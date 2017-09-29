import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import './Main.css';
import Topbar from '../../components/Topbar/Topbar';
import Maincontent from '../../components/Maincontent/Maincontent';
class Main extends Component {
  render() {
    return (
      <Container fluid>
        <Topbar />
        <Maincontent />
      </Container>
    );
  }
}
export default Main;
