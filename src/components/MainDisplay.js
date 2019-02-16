import image from './images/jerad-avatar.jpeg'
import {Link} from 'react-router-dom';
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


            <h1>Hello, I'm Jerad Amundsen</h1>
        </div>

    );
  }

}
export default MainDisplay
