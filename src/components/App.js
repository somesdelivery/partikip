import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../application.css';

import SubmissionForm from './SubmissionForm';

class App extends React.Component {
	render() {
		return <SubmissionForm/>;
	}
}

export default App;