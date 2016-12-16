import React, { PropTypes, Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { Input, Menu, Segment } from 'semantic-ui-react'
import {browserHistory} from 'react-router';

class NavBar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name}) => 
  {
    this.setState({ activeItem: name });
    browserHistory.push('/'+name);
  }

componentDidMount(){
  let currentRoute = location.pathname;
  this.setState({ activeItem:currentRoute.substring(1, currentRoute.length)});
}

render(){ 
      const { activeItem } = this.state

  return (
     <div>
        <Menu pointing inverted>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Item name='json' active={activeItem === 'json'} onClick={this.handleItemClick} />
          <Menu.Item name='semantic' active={activeItem === 'semantic'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
   );
  }
}

export default NavBar;
