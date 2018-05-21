import React from 'react';

import { Link } from 'react-router-dom';

class Submitting extends React.Component {
	render() {
		return <div>
			<h3>Propunerea ta se trimite acum...</h3>
			<p>Te rugăm să nu închizi această fereastră. Acest proces poate dura câteva minute, mai ales dacă ilustrațiile atașate sunt de mari dimensiuni.</p>
			<p>În caz că întâmpini probleme cu trimiterea propunerii, poți folosi <Link to='offline'>formularul offline</Link>.</p>
		</div>;
	}
}

export default Submitting;