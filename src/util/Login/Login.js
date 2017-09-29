import React, { Component } from 'react';
import {Header, Divider, Icon, Input, Grid, Segment, Container, Form, Button, Image} from 'semantic-ui-react';
import './Login.css';
import logo from '../../images/logo.png';
import Main from '../Main/Main';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:null,
  password:null
  }
 }
handleShow = () => {
  this.setState({ username: true })
  console.log(this.state);
}
render() {
    return (
      <Container fluid>
        {this.state.username ? (
          <Main />
        ) : null}
        {this.state.username ? null : (
          <Grid centered columns={3} padded='horizontally'>
            <Grid.Column>
              <Segment textAlign='left'>
                <Header as='h1'><Image className="logo" src={logo}/> ConsulVenBCN 2.0 (Alpha)</Header>
              </Segment>
              <Container fluid>
                <Segment padded='very'>
                  <Header as='h4' textAlign='center' dividing>Bienvenido ingrese su usuario y contraseña</Header>
                  <Divider hidden />
                  <Form>
                    <Form.Field>
                      <label>Nombre de Usuario</label>
                      <Input
                        icon='user'
                        iconPosition='left'
                        placeholder='Nombre de Usaurio'
                        type='text'
                        fluid='true'
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Contraseña</label>
                      <Input
                        icon='lock'
                        iconPosition='left'
                        placeholder='Contraseña'
                        type='password'
                        fluid='true'
                      />
                    </Form.Field>
                    <Divider />
                    <Button type='submit' color='teal' fluid onClick={this.handleShow}><Icon name='sign in' size='medium'/> Ingresar</Button>
                  </Form>
                </Segment>
              </Container>
            </Grid.Column>
          </Grid>
        )}
      </Container>
    );
  }
}
export default Login;
