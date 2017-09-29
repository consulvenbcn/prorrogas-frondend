/*COMPONENTS*/
import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'
/*APP-COMPONENTS*/

import Login from './util/Login/Login';

class App extends Component {
  state = {}
  componentDidMount(){
    setTimeout(() => {
      this.setState({ active: false });
    }, 2000);

  }
  componentWillMount(){
    this.setState({ active: true });
  }
  render() {
    const { active } = this.state
    return (
      <Dimmer.Dimmable dimmed={active}>
        <Dimmer active={active}>
          <Loader size='massive'>Cargando...</Loader>
        </Dimmer>
        <Login />
      </Dimmer.Dimmable>
    );
  }
}
export default App;
