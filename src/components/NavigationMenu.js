import image from './images/jerad-avatar.jpeg'
import './NavigationMenu.css'
import React, { Component } from 'react';


 class NavigationMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="pointing-menu ui inverted pointing menu">
        <div class="left menu">
          <a className="active item">
            <img src={image} alt=""/>Jerad
            </a>
        </div>
        <div className="right menu">
          <a className="item">
            Projects
          </a>
          <a className="item">
            Contact Me
          </a>
          <a className="item">
            Resume
          </a>
        </div>


  </div>

    );
  }

}
export default NavigationMenu
