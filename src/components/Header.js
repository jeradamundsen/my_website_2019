import image from './images/jerad-avatar.jpeg'
import './Header.css'
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


 class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (

        <div className="navbar ui inverted pointing menu">

            <div className="left menu">
              <Link to="/" className="active item">
                <img src={image} alt=""/>Jerad
              </Link>
            </div>
            <div className="right menu">
              <Link to="/projects" className="item">
                Projects
              </Link>
              <Link to="/contactme " className="item">
                Contact Me
              </Link>
              <Link to="/resume" className="item">
                Resume
              </Link>
            </div>
      </div>



    );
  }

}
export default Header
