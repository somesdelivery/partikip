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
		let uid = this.props.match.params.id;
		firebase.database()
			.ref(`submissions/${uid}`)
			.once('value')
			.then(snapshot => {
				let s =  snapshot.val();
				let rootRef = firebase.storage().ref();
				Promise.all(
					s.atasamente.map(f => rootRef.child(`submissions/${uid}/${f}`).getDownloadURL())
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
					snapshot && <table>
						<tbody>
							<tr>
								<th>Membri</th>
								<td>{snapshot.membri}</td>
							</tr>
							<tr>
								<th>Adresa de email</th>
								<td>{snapshot.email}</td>
							</tr>
							<tr>
								<th>Nr. de telefon</th>
								<td>{snapshot.telefon}</td>
							</tr>
							<tr>
								<th>Website</th>
								<td>{snapshot.website}</td>
							</tr>
							<tr>
								<th>Titlu</th>
								<td>{snapshot.titlu}</td>
							</tr>
							<tr>
								<th>Descriere</th>
								<td>{snapshot.descriere}</td>
							</tr>
							<tr>
								<th>Motivație</th>
								<td>{snapshot.motivatie}</td>
							</tr>
							<tr>
								<th>Detalii tehnice</th>
								<td>{snapshot.detalii}</td>
							</tr>
							<tr>
								<th>Locul</th>
								<td>{snapshot.locul}</td>
							</tr>
							<tr>
								<th>Buget</th>
								<td>{snapshot.buget}</td>
							</tr>
							<tr>
								<th>Atașamente</th>
								<td>{
									snapshot.atasamente.map(
										f => <img src={f}/>
									)
								}</td>
							</tr>
						</tbody>
					</table>
				}
			</React.Fragment>
		);
	}
}

export default SubmissionDetails;