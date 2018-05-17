import React from 'react';

import SubmissionDetails from '../SubmissionDetails';

class SuccessScreen extends React.Component {

	render() {
		return <div>
			<h3>Succes!</h3>
			<SubmissionDetails uid={this.props.uid}/>
		</div>
	}
}

export default SuccessScreen;