import React, { Component } from 'react';


export default class Resume extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="ui container">
        <h1>Jerad Amundsen</h1>
        <div>
          <h2>Technical Skills</h2>
  <p>JavaScript: AngularJS, React.js, Node.js, MongoDb
  Other Skills: Jquery, Git, Jira
  </p>
        </div>
<div>
  <h2>Projects</h2>
  <div>
    <h4>
      SPACE ON EARTH — MAY 2016 -JULY 2016
    </h4>
    URL: SPACESHIPAPP.HEROKUAPP.COM
    An app that queries NASA api for meteorite landings. User can also report fireballs.
    Technologies used: AngularJS | Express | MongoDB | Bootstrap | JavaScript
    App queies RESTful Api and retrieves large amounts of data.
    Utilized many Angular directives both built-in and custom.
    • Demonstrates thorough understanding of mongo Db and structuring schemas.
  </div>
 <div>
   <h4>
    RECRUITERBOT — JULY 2016- SEPT 2016
   </h4>

   VIDEO LINK: HTTPS://YOUTU.BE/BDOUOB7HNBY
   RecruiterBot is a slack bot integration that connects job seekers and employers.
   Technologies used: Mongoose | MongoDb | Socket.IO | Botkit | Slack
   • learned new technology not taught in class. The Slack docs are not good and bots are
   relatively newer tech so had to do a lot of digging to find any examples to work off.
   • Wrote bot conversation for Slacks RTM api and built views for slack app. Submitted app
   for Slack approval.
 </div>

</div>
 <div>
   <h2>Work Experience</h2>
   <h3>Sales Engineer, SpotterRF</h3>
2018 – Present

Expertise operating, designing, and installing control room installations of radar detection and video monitoring systems.
Provide partner and end user product and integration support.
Build relationships with end users, collect technical information to understand customer needs, design project layouts and proposals.
Close complex sales that involve multiple stake holders and longer sales cycle.
Write software release notes and reference guide.


   <h3>Vivint Account Manager— Nov 2011 - May 2016</h3>
   Team leader, top first year sales rep in region, Hit top sales numbers 4 yrs in a row.
   Successfully enriched account relationships across various demographics.
   CHASE BANK PERSONAL BANKER — DEC 2009 - APRIL 2011
   Accountable for business development, customer relationships, account reviews /
   maintenance, loan processing, and branch opening / closing.
   <div>
     <h2>Education</h2>
     <div>
       University of Utah, Salt Lake City, UT — Bachelors of Science Business Finance,
       Minor- Russian
     </div>
     <div>
       DevMountain, Dallas, TX — MEAN Stack Web Applications Graduate
     </div>


   </div>
 </div>


      </div>
    );
  }

}
