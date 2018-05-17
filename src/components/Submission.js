import React from 'react';
import serialize from 'form-serialize';

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/auth';

import config from '../firebase.config.json';

import Form from './submission/Form';
import ErrorScreen from './submission/ErrorScreen';
import SuccessScreen from './submission/SuccessScreen';
import Submitting from './submission/Submitting';
import Preparing from './submission/Preparing';

firebase.initializeApp(config);

const uploadAttachments = (files, user_id) => {
	let rootRef = firebase.storage().ref();
	return Promise.all(
		files.map(file => rootRef.child(`submissions/${user_id}/${file.name}`).put(file))
	);
}

const STATE_ROOT = 'root';
const STATE_READY = 'ready';
const STATE_SUBMITTING = 'submitting';
const STATE_ERROR = 'error';
const STATE_SUCCESS = 'success';

class SubmissionForm extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.register = this.register.bind(this);
		this.state = {
			user: null,
			state: STATE_ROOT
		};
	}

	componentDidMount() {
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(
			() => {
				firebase.auth().signOut().then(
					() => { 
						firebase.auth().signInAnonymously();
					}
				);
			}
		);
		firebase.auth().onAuthStateChanged(
			user => this.setState({ 
				user,
				state: user ? STATE_READY : STATE_ROOT
			})
		);
	}

	register(el) {
		this.form = el;
	}

	handleSubmit(e) {
		let formData = serialize(this.form, { hash: true });
		let attachments = [].slice.call(this.form.atasamente.files);
		let user_id = this.state.user.uid;

		this.setState({
			state: STATE_SUBMITTING
		}, () => {
			uploadAttachments(attachments, user_id)
				.then(() => { 
					firebase.database().ref(`submissions/${user_id}`).set({
						...formData,
						atasamente: attachments.map(f => f.name)
					}, error => {
						if (error) {
							this.setState({
								state: STATE_ERROR
							})
						} else {
							this.setState({
								state: STATE_SUCCESS
							});
						}
					});
				});
		});
		e.preventDefault();
	}

	render() {
		let { state } = this.state;
		return (
			<React.Fragment>
				{ 
					state === STATE_ROOT && <Preparing/>
				}

				{ 
					state === STATE_READY && <Form register={this.register} handleSubmit={this.handleSubmit}/>
				}

				{ 
					state === STATE_SUBMITTING && <Submitting/>
				}

				{ 
					state === STATE_ERROR && <ErrorScreen/>
				}

				{
					state === STATE_SUCCESS && <SuccessScreen uid={this.state.user.uid}/>
				}
						
			</React.Fragment>
		);
	}
}

export default SubmissionForm;