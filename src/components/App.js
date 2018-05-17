import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../application.css';

import Home from './Home';
import Offline from './Offline';
import Submission from './Submission';
import SubmissionList from './SubmissionList';
import SubmissionDetails from './SubmissionDetails';

class App extends React.Component {
	render() {
		return <Router>
			<div>
				<Route exact path='/' component={Home}/>
				<Route exact path='/nou' component={Submission}/>
				<Route exact path='/offline' component={Offline}/>
				<Route exact path='/inscrieri' component={SubmissionList}/>
				<Route path='/inscrieri/:id' component={SubmissionDetails}/>
			</div>
		</Router>;
	}
}

export default App;