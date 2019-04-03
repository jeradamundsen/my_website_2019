import "./app.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainDisplay from "./MainDisplay";
import ProjectsList from "./ProjectsList";
import Footer from "./Footer";
import ContactMe from "./ContactMe";
import Header from "./Header"
import Resume from "./Resume"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="ui container">

        <BrowserRouter>

          <div className="main_container ui container ">
            <Header/>
            <Route path="/" exact component={MainDisplay} />
            <Route path="/projects" component={ProjectsList} />
            <Route path="/projects/detail" component={ProjectDetail} />
            <Route path="/contactme" component={ContactMe} />
            <Route path="/resume" component={Resume} />
            <Footer />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}
export default App;
