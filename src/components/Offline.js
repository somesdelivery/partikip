import React from 'react';

class Offline extends React.Component {
	render() {
		return <div>
			<h1 class='main-title'>Formular offline</h1>

			<h3>Instrucțiuni</h3>

			<ol className='tight'>
				<li>Completează toate cîmpurile din formularul de mai jos, în zonele marcate cu verde și salvează documentul</li>
				<li>Arhivează în format ZIP documentul împreună cu până la cinci imagini reprezentative pentru proiect (vezi secțiunea Ilustrații)</li>
				<li>Trimite arhiva la adresa <a href='mailto:concurs@somesdelivery.ro'>concurs@somesdelivery.ro</a> până în data de <strong>30 mai 2019</strong> ora 23:59 ca să te înscrii în concurs.</li>
			</ol>

			<p>Prin participare confirmi că ai citit și ești de acord cu regulamentul concursului, <a href='http://somesdelivery.ro/editii/sd-2019/regulament/'>disponibil aici</a>.</p>

			<div>
				<a href='/somes-delivery-2019-formular-de-participare.docx' class='btn'>Descarcă .DOC</a>
			</div>
		</div>
	}
}

export default Offline;