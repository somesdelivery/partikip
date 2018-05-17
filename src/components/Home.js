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
				<p><Link to='/nou' className='btn primary'>Formularul online de participare</Link></p>
				<p>Preferi să-l completezi la tine pe calculator? <Link to='/offline' className='btn primary'>Descarcă .doc</Link></p>
			</div>
		)
	}
}

export default Home;