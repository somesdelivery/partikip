import App from './components/App';
import config from './firebase.config.json';

import * as firebase from 'firebase';

firebase.initializeApp(config);

ReactDOM.render(<App/>, document.getElementById('app'));