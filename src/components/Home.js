import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	render() {
		return (

			<div>
				<h1 className='main-title'>
					<span>
						<a href='http://somesdelivery.ro/editii/sd-2018'>Someș Delivery 2018</a>
					</span> Participă
				</h1>
				
				<div class='layout layout--hbox layout--stretch layout--spread'>
					<div class='layout__item'>
						<p>Completează formularul direct din browser:</p>
						<Link to='/nou' className='btn'>Formularul online de participare</Link>
					</div>
					<div class='layout__item'>
						<p>Preferi să-l completezi la tine pe calculator?</p>
						<Link to='/offline' className='btn btn--secondary'>Descarcă .doc</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;