import "./Footer.css";

import React from "react";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer-segment ui inverted vertical footer segment">
      <div className="ui three column centered grid">
        <div className="five column centered row">
          <div className="navigation_links column ui list">


              <Link to="/"className="i_tem item">
                home
              </Link>
              <Link to="/projects" className=" i_tem item">
                projects
              </Link>
              <Link to="/contactme" className="i_tem item">
                contact me
              </Link>
              <Link to="/resume" className="i_tem item">
                resume
              </Link>

          </div>
          <div className="technologies_used column">
            <div className="sub-header ui sub header">
              Website built with: ReactJS, Semantic UI, React-Router-Dom, HTML,
              CSS
            </div>

          </div>
          <div className="copyright column">

            <div className="inner">
              <i className="copyright icon" />2019 Jerad Amundsen Inc.
            </div>
          </div>

          <div className="links_list column">
            <div className="links_inner ui list">
              <div className="item">
                <i className="linkedin icon" />
                <div className="content">
                  <a className="link" href="http://www.linkedin.com/in/jeradamundsen">
                    www.linkedin.com/in/jeradamundsen
                  </a>
                </div>
              </div>
              <div className="item">
                <i className="mobile alternative icon" />
                <div className="link content">(801)792-3538</div>
              </div>
              <div className="item">
                <i className="mail icon" />
                <div className="content">
                  <a className="link" href="mailto:jerad.amundsen@gmail.com">
                    jerad.amundsen@gmail.com
                  </a>
                </div>
              </div>
              <div className="item">
                <i className="github icon" />
                <div className="content">
                  <a className="link" href="https://github.com/theSoviet1984">
                    github.com/theSoviet1984
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
