import React from 'react';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

window.firebase = firebase;

class SubmissionDetails extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			snapshot: null
		}
	}

	componentDidMount() {
		let uid = this.props.uid || this.props.match.params.id;
		firebase.database()
			.ref(`submissions/${uid}`)
			.once('value')
			.then(snapshot => {
				let s =  snapshot.val();
				let rootRef = firebase.storage().ref();
				Promise.all(
					(s.atasamente || []).map(f => rootRef.child(`submissions/${uid}/${f}`).getDownloadURL())
				).then(attachments => {
					this.setState({ 
						snapshot: {
							...s,
							atasamente: attachments
						} 
					});
				});
			})
	}

	render() {
		let { snapshot } = this.state;
		return (
			<React.Fragment>
				{
					snapshot && <div class='submission'>
							<h4>Membri</h4>
							<div>{snapshot.membri}</div>

							<h4>Adresa de email</h4>
							<div>{snapshot.email}</div>

							<h4>Nr. de telefon</h4>
							<div>{snapshot.telefon}</div>

							<h4>Website</h4>
							<div>{snapshot.website}</div>

							<h4>Titlu</h4>
							<div>{snapshot.titlu}</div>

							<h4>Descriere</h4>
							<div>{snapshot.descriere}</div>

							<h4>Motivație</h4>
							<div>{snapshot.motivatie}</div>

							<h4>Detalii tehnice</h4>
							<div>{snapshot.detalii}</div>

							<h4>Locul</h4>
							<div>{snapshot.locul}</div>

							<h4>Buget</h4>
							<div>{snapshot.buget}</div>

							<h4>Atașamente</h4>
							<div>{ (snapshot.atasamente || []).map(f => <img src={f}/>) }</div>
					</div>
				}
			</React.Fragment>
		);
	}
}

export default SubmissionDetails;