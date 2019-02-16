import image1 from "./images/nasa_app_homepage.png";
import image2 from "./images/space-shuttle.jpg";
import image3 from "./images/slack.jpeg";

import React, { Component } from "react";

export default class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui segment">

          <h1>Jerad Amundsen</h1>
          <div>
            <h2>Technical Skills</h2>
            <p>
              JavaScript: AngularJS, React.js, Node.js, MongoDb Other Skills:
              Jquery, Git, Jira
            </p>
          </div>
        </div>

        <div className="ui segment">
          <h2>Projects</h2>
          <div class="ui list">
            <div className="item">
              <img className="ui avatar image" src={image2} />
              <div className="content">

              <h4>SPACE ON EARTH
            MAY 2016 -JULY 2016</h4>
                <div className="description">

                  <strong>URL:{" "}</strong>
                  <a>
                    <b>SPACESHIPAPP.HEROKUAPP.COM</b>
                  </a>

                </div>
                <div className="description">
                  An app that queries NASA api for meteorite landings. User can
                  also report fireballs. App queies RESTful Api and
                  retrieves large amounts of data. Utilized many Angular
                  directives both built-in and custom. • Demonstrates thorough
                  understanding of mongo Db and structuring schemas.
                  <div> <strong>Technologies used:</strong> AngularJS | Express
                  | MongoDB | Bootstrap | JavaScript</div>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={image3} alt="" className="ui avatar image"/>
              <div className="content">
                <h4>RECRUITERBOT — JULY 2016- SEPT 2016</h4>
                <div className="description">
                  <a href="http://YOUTU.BE/BDOUOB7HNBY"><strong>VIDEO LINK: </strong>HTTPS://YOUTU.BE/BDOUOB7HNBY</a>
                  <div>
                    RecruiterBot is a slack bot
                    integration that connects job seekers and employers. Learned new
                    technology not taught in class. The Slack docs are not good and bots
                    are relatively newer tech so had to do a lot of digging to find any
                    examples to work off. • Wrote bot conversation for Slacks RTM api
                    and built views for slack app. Submitted app for Slack approval.
                      </div>
                    <div><strong>Technologies
                    used: Mongoose | MongoDb | Socket.IO | Botkit | Slack </strong></div>

                </div>

              </div>

            </div>
          </div>


        </div>
        <div className="ui segment">
          <h2>Work Experience</h2>
          <div className="ui list">
            <div className="item">
              <h3>Sales Engineer, SpotterRF</h3>
              <div>
                Jan 2018 -Present
              </div>
              <ul className="ui list">
                <li>
                  Expertise operating, designing, and installing control room
                  installations of radar detection and video monitoring systems.
                </li>
                <li>
                  Provide partner and end user product and integration support.
                </li>
                <li>
                  Build relationships with end users, collect technical
                  information to understand customer needs, design project layouts
                  and proposals.
                </li>
                <li>
                  Close complex sales that involve multiple stake holders and
                  longer sales cycle.
                </li>
                <li>Write software release notes and reference guide.</li>
              </ul>
            </div>

            <div className="item">
              <h3>Vivint Account Manager</h3>
              <div>
                 Nov 2011 - May 2016
              </div>
              <ul className="ui list">
                <li>
                  {" "}
                  Team leader, top first year sales rep in region, Hit top sales
                  numbers 4 yrs in a row.
                </li>
                <li>
                  {" "}
                  Successfully enriched account relationships across various
                  demographics.
                </li>
              </ul>
            </div>

            <div className="item">
              <h3>CHASE BANK PERSONAL BANKER</h3>
              <div>
                 DEC 2009 - APRIL 2011
              </div>

              <ul className="ui list">
                <li>
                  {" "}
                  Accountable for business development, customer relationships,
                  account reviews /
                </li>
                <li>
                  {" "}
                  maintenance, loan processing, and branch opening / closing.
                </li>
              </ul>
            </div>

            <div />
          </div>
          </div>

        <div className="ui segment">
          <h2>Education</h2>
          <div>
            University of Utah, Salt Lake City, UT — Bachelors of Science
            Business Finance, Minor- Russian
          </div>
          <div>
            DevMountain, Dallas, TX — MEAN Stack Web Applications Graduate
          </div>
        </div>
      </div>
    );
  }
}
