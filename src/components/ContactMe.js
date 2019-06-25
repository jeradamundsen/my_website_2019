import './ContactMe.css'
import React from 'react';

const ContactMe =()=>{
  return(

      <div className="contact_segment ui segment">

        <div className="ui grid">
          <div className="ten wide column">
            <h3>About</h3>
          </div>
          <div className="six wide column">
            <div className="ui list">
          <div className="item">
            <i className="linkedin icon"></i>
            <div className="content">
              <a href="http://www.linkedin.com/in/jeradamundsen">
                www.linkedin.com/in/jeradamundsen
              </a>
            </div>
          </div>
          <div className="item">
            <i className="mobile alternative icon"></i>
            <div className="content">
              (801)792-3538
            </div>
          </div>
          <div className="item">
            <i className="mail icon"></i>
            <div className="content">
              <a href="mailto:jerad.amundsen@gmail.com">jerad.amundsen@gmail.com</a>
            </div>
          </div>
          <div className="item">
            <i className="github icon"></i>
            <div className="content">
              <a href="https://github.com/jeradamundsen">github.com/jeradamundsen</a>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
  )
}
export default ContactMe
