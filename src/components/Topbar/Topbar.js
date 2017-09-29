import React, { Component } from 'react';
import {  Menu, Image, Icon, Dropdown } from 'semantic-ui-react';
import logo from '../../images/logo.png';

class Topbar extends Component {
  render() {
    return (
      <Menu fixed='top'>
        <Menu.Item>
            <Image size='mini' className="logo" src={logo}/>
            ConsulVenBCN 2.0(Alpha)
        </Menu.Item>
        <Menu.Item position='right'>
          <Dropdown button trigger={<a><Icon name='user' /> nombre.usuario</a>}>
            <Dropdown.Menu>
              <Dropdown.Header icon='user circle' content='Perfil'></Dropdown.Header>
              <Dropdown.Item icon='cogs' text='Configurar Cuenta' />
              <Dropdown.Item icon='ellipsis horizontal' text='Cambiar Contraseña' />
              <Dropdown.Item icon='file text' text='Tramites Internos' />
              <Dropdown.Divider />
              <Dropdown.Item icon='sign out' text='Salir' />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Topbar;
