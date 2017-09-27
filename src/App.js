/*COMPONENTS*/
import React, { Component } from 'react';
/*APP-COMPONENTS*/
import Topbar from './components/Topbar/Topbar';
import Maincontent from './components/Maincontent/Maincontent';

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Maincontent />
      </div>
    );
  }
}

export default App;
