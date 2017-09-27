/*COMPONENTS*/
import React from 'react';
import ReactDOM from 'react-dom';
/*CSS*/
import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.min.css';
/*APP-COMPONENTS*/
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
