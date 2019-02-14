import image from './images/jerad-avatar.jpeg'
import './MainDisplay.css'
import React, { Component } from 'react';


class MainDisplay extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (

        <div className="main-display">
          <a name="home"></a>
          <div className="nav-container">
            <div className="pointing-menu ui inverted pointing menu">
              <div className="left menu">
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
      </div>
            <h1>Hello, I'm Jerad Amundsen</h1>
      </div>


    );
  }

}
export default MainDisplay
