import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/foundation-sites/dist/css/foundation.css';
import Core from './Core';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Core />, document.getElementById('root'));
registerServiceWorker();
