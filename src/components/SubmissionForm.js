import React from 'react';
import serialize from 'form-serialize';

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/auth';

import config from '../firebase.config.json';

firebase.initializeApp(config);

const uploadAttachments = (files, user_id) => {
	let rootRef = firebase.storage().ref();
	return Promise.all(
		files.map(file => rootRef.child(`submissions/${user_id}/${file.name}`).put(file))
	);
}
class SubmissionForm extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.register = this.register.bind(this);
		this.state = {
			user: null
		};
	}

	componentDidMount() {
		firebase.auth().signOut().then(() => { firebase.auth().signInAnonymously() });
		firebase.auth().onAuthStateChanged(user => this.setState({ user }));
	}

	register(el) {
		this.form = el;
	}

	handleSubmit(e) {
		let formData = serialize(this.form, { hash: true });
		let attachments = [].slice.call(this.form.atasamente.files);
		let user_id = this.state.user.uid;

		uploadAttachments(attachments, user_id)
			.then(() => { 
				firebase.database().ref(`submissions/${user_id}`).set({
					...formData,
					atasamente: attachments.map(f => f.name)
				}, error => {
					if (error) {
						throw error;
					} else {
						firebase.auth().signOut().then({

						})
					}
				});
			})

		e.preventDefault();
	}

	render() {
		return (
			<React.Fragment>
				{ 
					this.state.user &&
						<form className='form' ref={this.register} onSubmit={this.handleSubmit}>
							<h1 className='main-title'>
								<span>
									<a href='http://somesdelivery.ro/editii/sd-2018'>Someș Delivery 2018</a>
								</span> Formular de participare
							</h1>
							<h3>După ce ai citit <a href="http://somesdelivery.ro/editii/sd-2018/regulament" target='_blank'>Regulamentul concursului</a>, completează formularul de mai jos.</h3>
							<section>
								<h2><span className='step'>1</span> Echipa</h2>
								<div className="form-item">
									<label>Numele și membrii echipei</label>
									<textarea required name='membri'/>
								</div>
								<div className='row'>
									<div className="form-item col col-1-3">
										<label>Adresa de email</label>
										<input type='text' required name='email'/>
									</div>
									<div className="form-item col col-1-3">
										<label>Număr de telefon</label>
										<input type='text' required name='telefon'/>
									</div>
									<div className="form-item col col-1-3">
										<label>Website (opțional)</label>
										<input type='text' name='website'/>
									</div>
								</div>
							</section>
							<section>
								<h2><span className='step'>2</span> Ideea</h2>
								<div className="form-item">
									<label>Titlul Proiectului</label>
									<input type='text' required name='titlu'/>
								</div>
								<div className="form-item">
									<label>Descrierea scurtă</label>
									<p>Spune-ne în câteva cuvinte la ce te-ai gândit. <span className='input-note'>(~100 cuvinte)</span></p>
									<textarea required name='descriere'/>
								</div>
								<div className="form-item">
									<label>Motivație</label>
									<p>În ce fel este ideea ta necesară și inovatoare? Cum se împacă ea cu scopurile și tema Someș Delivery? <span className='input-note'>(~100 cuvinte)</span></p>
									<textarea required name='motivatie'/>
								</div>
							</section>

							<section>
								<h2><span className='step'>3</span> Implementarea</h2>
								<div className="form-item">
									<label>Detalii tehnice</label>
									<p>Descrie în amănunt ideea ta. <span className='input-note'>(~300 cuvinte sau 4 paragrafe)</span></p>
									<textarea required name='detalii'/>
								</div>
								<div className="form-item">
									<label>Locul</label>
									<p>Descrie succint locul intervenției. <span className='input-note'>(~100 cuvinte sau un paragraf)</span></p>
									<textarea required name='locul'/>
								</div>
								<div className="form-item">
									<label>Buget estimativ</label>
									<p>Fă-ne o listă cu cheltuielile pe care le prevezi pentru implementarea proiectului. <span className='input-note'>(~300 cuvinte sau 4 paragrafe).</span></p>
									<textarea required name='buget'/>
								</div>

								<h4>Ilustrații (opțional)</h4>
								<p>Unele lucruri pot fi explicate mai bine în imagini. Dacă e nevoie, încarcă până la cinci imagini reprezentative pentru proiectul tău. Acceptăm fișiere în formatele PDF, JPG, PNG, TIFF. <span className='input-note'>(Pentru a selecta mai multe fișiere de pe computer, dați click pe fișiere având tasta Ctrl apăsată)</span></p>

								<div className="form-item">
									<input type='file' multiple className="form-attachments" name='atasamente'/>
								</div>
								<small><a href='#' className='clear-attachments'>Elimină atașamentele</a></small>
							</section>

							<section>
								<h2><span className='step'>4</span> Hârțogăraie</h2>
								<div className="form-item">
									<label><input type='checkbox' required name='acord'/> Am citit și sunt de acord cu <a href='http://somesdelivery.ro/editii/sd-2017/regulament' target='_blank'>Regulamentul de participare</a>.</label>
								</div>
							</section>
							
							<button type='submit' className='btn submit-link'>Înscrie proiectul în concurs</button>

							<div className='display-overlay'>
								<div className='display-overlay-inner'>
									<h3>Propunerea ta se trimite acum...</h3>
									<p>Te rugăm să nu închizi această fereastră. Acest proces poate dura câteva minute, mai ales dacă ilustrațiile atașate sunt de mari dimensiuni.</p>
									<p>În caz că întâmpini probleme cu trimiterea propunerii, poți folosi <a href='http://somesdelivery.ro/editii/sd-2017/formular' target='_blank'>formularul offline</a>.</p>
								</div>
							</div>
						</form>
				}
			</React.Fragment>
		);
	}
}

export default SubmissionForm;