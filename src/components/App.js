import './app.css'
import React, { Component } from 'react';
import MainDisplay from './MainDisplay'
import ProjectsList from './ProjectsList'
import Footer from './Footer'
import ContactMe from './ContactMe'

 class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
      <div className="main_container ui container ">
          <MainDisplay/>
          <ProjectsList/>
          <ContactMe/>
      </div>
        <div className="ui inverted vertical footer segment">
          <Footer/>
        </div>

      </div>
    );
  }


}
export default App
