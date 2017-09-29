/*COMPONENTS*/
import React, { Component } from 'react';
import { Sidebar, Label, Segment, Container, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
/*CSS*/
import './Maincontent.css';
/*IMAGES*/
import paragraphMedia from '../../images/media-paragraph.png';
import paragraph from "../../images/paragraph.png";

class Maincontent extends Component {
  state = {
    visible: false,
    activeItem: 'inbox'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  render() {
    const { visible } = this.state
    const { activeItem } = this.state
    return (
      <Container className="main container" fluid>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='wide' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
              <Label color='teal'>1</Label>
              Inbox
            </Menu.Item>
            <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
              <Label>51</Label>
              Spam
            </Menu.Item>
            <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
              <Label>1</Label>
              Updates
            </Menu.Item>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment>
              <Container fluid>
                <Button onClick={this.toggleVisibility} primary><Icon name='sidebar' /> Menu</Button>
                <Header as='h1'>Application Content</Header>
                <p>This is a basic fixed menu template using fixed size containers.</p>
                <p>A text container is used for the main container, which is useful for single column layouts</p>
                <Image className="wireframe" src={paragraphMedia}/>
                <Image className="wireframe" src={paragraph}/>
                <Image className="wireframe" src={paragraph}/>
                <Image className="wireframe" src={paragraph}/>
                <Image className="wireframe" src={paragraph}/>
                <Image className="wireframe" src={paragraph}/>
                <Image className="wireframe" src={paragraph}/>
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Container>
    );
  }
}
export default Maincontent;
