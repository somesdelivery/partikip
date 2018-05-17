import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../application.css';

import SubmissionForm from './SubmissionForm';
import SubmissionList from './SubmissionList';
import SubmissionDetails from './SubmissionDetails';

class App extends React.Component {
	render() {
		return <Router>
			<div>
				<Route exact path='/nou' component={SubmissionForm}/>
				<Route exact path='/inscrieri' component={SubmissionList}/>
				<Route path='/inscrieri/:id' component={SubmissionDetails}/>
			</div>
		</Router>;
	}
}

export default App;