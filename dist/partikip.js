(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('firebase')) :
	typeof define === 'function' && define.amd ? define(['react', 'firebase'], factory) :
	(factory(global.React,global.firebase));
}(this, (function (React$1,firebase) { 'use strict';

	React$1 = React$1 && React$1.hasOwnProperty('default') ? React$1['default'] : React$1;

	var SubmissionForm = (function (superclass) {
		function SubmissionForm () {
			superclass.apply(this, arguments);
		}

		if ( superclass ) SubmissionForm.__proto__ = superclass;
		SubmissionForm.prototype = Object.create( superclass && superclass.prototype );
		SubmissionForm.prototype.constructor = SubmissionForm;

		SubmissionForm.prototype.render = function render () {
			return (
				React$1.createElement( 'form', { class: 'form' },
					React$1.createElement( 'h1', { className: 'main-title' },
						React$1.createElement( 'span', null, React$1.createElement( 'a', { href: 'http://somesdelivery.ro/editii/sd-2018' }, "Someș Delivery 2018") ), " Formular de participare"),
					React$1.createElement( 'h3', null, "După ce ai citit ", React$1.createElement( 'a', { href: "http://somesdelivery.ro/editii/sd-2018/regulament", target: '_blank' }, "Regulamentul concursului"), ", completează formularul de mai jos." ),
					React$1.createElement( 'section', null,
						React$1.createElement( 'h2', null, React$1.createElement( 'span', { className: 'step' }, "1"), " Echipa" ),
						React$1.createElement( 'div', { className: "form-item" },
							React$1.createElement( 'label', null, "Numele și membrii echipei" ),
							React$1.createElement( 'textarea', { required: true })
						),
						React$1.createElement( 'div', { className: 'row' },
							React$1.createElement( 'div', { className: "form-item col col-1-3" },
								React$1.createElement( 'label', null, "Adresa de email" ),
								React$1.createElement( 'input', { type: 'text', required: true })
							),
							React$1.createElement( 'div', { className: "form-item col col-1-3" },
								React$1.createElement( 'label', null, "Număr de telefon" ),
								React$1.createElement( 'input', { type: 'text', required: true })
							),
							React$1.createElement( 'div', { className: "form-item col col-1-3" },
								React$1.createElement( 'label', null, "Website (opțional)" ),
								React$1.createElement( 'input', { type: 'text' })
							)
						)
					),
					React$1.createElement( 'section', null,
						React$1.createElement( 'h2', null, React$1.createElement( 'span', { className: 'step' }, "2"), " Ideea" ),
						React$1.createElement( 'div', { className: "form-item" },
							React$1.createElement( 'label', null, "Titlul Proiectului" ),
							React$1.createElement( 'input', { type: 'text', required: true })
						),
						React$1.createElement( 'div', { className: "form-item" },
							React$1.createElement( 'label', null, "Descrierea scurtă" ),
							React$1.createElement( 'p', null, "Spune-ne în câteva cuvinte la ce te-ai gândit. ", React$1.createElement( 'span', { className: 'input-note' }, "(~100 cuvinte)") ),
							React$1.createElement( 'textarea', { required: true })
						),
						React$1.createElement( 'div', { className: "form-item" },
							React$1.createElement( 'label', null, "Motivație" ),
							React$1.createElement( 'p', null, "În ce fel este ideea ta necesară și inovatoare? Cum se împacă ea cu scopurile și tema Someș Delivery? ", React$1.createElement( 'span', { className: 'input-note' }, "(~100 cuvinte)") ),
							React$1.createElement( 'textarea', { required: true })
						)
					),

					React$1.createElement( 'section', null,
						React$1.createElement( 'h2', null, React$1.createElement( 'span', { className: 'step' }, "3"), " Implementarea" ),
						React$1.createElement( 'div', { className: "form-item" },
							React$1.createElement( 'label', null, "Detalii tehnice" ),
							React$1.createElement( 'p', null, "Descrie în amănunt ideea ta. ", React$1.createElement( 'span', { className: 'input-note' }, "(~300 cuvinte sau 4 paragrafe)") ),
							React$1.createElement( 'textarea', { required: true })
						),
						React$1.createElement( 'div', { className: "form-item" },
							React$1.createElement( 'label', null, "Locul" ),
							React$1.createElement( 'p', null, "Descrie succint locul intervenției. ", React$1.createElement( 'span', { className: 'input-note' }, "(~100 cuvinte sau un paragraf)") ),
							React$1.createElement( 'textarea', { required: true })
						),
						React$1.createElement( 'div', { className: "form-item" },
							React$1.createElement( 'label', null, "Buget estimativ" ),
							React$1.createElement( 'p', null, "Fă-ne o listă cu cheltuielile pe care le prevezi pentru implementarea proiectului. ", React$1.createElement( 'span', { className: 'input-note' }, "(~300 cuvinte sau 4 paragrafe).") ),
							React$1.createElement( 'textarea', { required: true })
						),

						React$1.createElement( 'h4', null, "Ilustrații (opțional)" ),
						React$1.createElement( 'p', null, "Unele lucruri pot fi explicate mai bine în imagini. Dacă e nevoie, încarcă până la cinci imagini reprezentative pentru proiectul tău. Acceptăm fișiere în formatele PDF, JPG, PNG, TIFF. ", React$1.createElement( 'span', { className: 'input-note' }, "(Pentru a selecta mai multe fișiere de pe computer, dați click pe fișiere având tasta Ctrl apăsată)") ),

						React$1.createElement( 'div', { className: "form-item" },
							React$1.createElement( 'input', { type: 'file', multiple: true, className: "form-attachments" })
						),
						React$1.createElement( 'small', null, React$1.createElement( 'a', { href: '#', className: 'clear-attachments' }, "Elimină atașamentele") )
					),

					React$1.createElement( 'section', null,
						React$1.createElement( 'h2', null, React$1.createElement( 'span', { className: 'step' }, "4"), " Hârțogăraie" ),
						React$1.createElement( 'div', { className: "form-item" },
							React$1.createElement( 'label', null, React$1.createElement( 'input', { type: 'checkbox', required: true }), " Am citit și sunt de acord cu ", React$1.createElement( 'a', { href: 'http://somesdelivery.ro/editii/sd-2017/regulament', target: '_blank' }, "Regulamentul de participare"), "." )
						)
					),
					
					React$1.createElement( 'button', { type: 'submit', className: 'btn submit-link' }, "Înscrie proiectul în concurs"),

					React$1.createElement( 'div', { className: 'display-overlay' },
						React$1.createElement( 'div', { className: 'display-overlay-inner' },
							React$1.createElement( 'h3', null, "Propunerea ta se trimite acum..." ),
							React$1.createElement( 'p', null, "Te rugăm să nu închizi această fereastră. Acest proces poate dura câteva minute, mai ales dacă ilustrațiile atașate sunt de mari dimensiuni." ),
							React$1.createElement( 'p', null, "În caz că întâmpini probleme cu trimiterea propunerii, poți folosi ", React$1.createElement( 'a', { href: 'http://somesdelivery.ro/editii/sd-2017/formular', target: '_blank' }, "formularul offline"), "." )
						)
					)
				)
			)
		};

		return SubmissionForm;
	}(React$1.Component));

	var App = (function (superclass) {
		function App () {
			superclass.apply(this, arguments);
		}

		if ( superclass ) App.__proto__ = superclass;
		App.prototype = Object.create( superclass && superclass.prototype );
		App.prototype.constructor = App;

		App.prototype.render = function render () {
			return React$1.createElement( SubmissionForm, null );
		};

		return App;
	}(React$1.Component));

	var apiKey = "AIzaSyArFvMYhypWs22CmVrpd1G2AqM-t1piFBc";
	var authDomain = "sd-concurs-2018.firebaseapp.com";
	var databaseURL = "https://sd-concurs-2018.firebaseio.com";
	var projectId = "sd-concurs-2018";
	var storageBucket = "";
	var messagingSenderId = "551767314639";
	var config = {
		apiKey: apiKey,
		authDomain: authDomain,
		databaseURL: databaseURL,
		projectId: projectId,
		storageBucket: storageBucket,
		messagingSenderId: messagingSenderId
	};

	firebase.initializeApp(config);

	ReactDOM.render(React.createElement( App, null ), document.getElementById('app'));

})));
