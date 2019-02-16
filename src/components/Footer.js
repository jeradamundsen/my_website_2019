import "./Footer.css";

import React from "react";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer-segment ui inverted vertical footer segment">
      <div className="ui two column centered grid">
        <div className="four column centered row">
          <div className="column">
            <h4>Links</h4>
            <div className="ui list">
              <Link to="/"className="item">
                home
              </Link>
              <Link to="/projects" className="item">
                projects
              </Link>
              <Link to="/contactme" className="item">
                contact me
              </Link>
              <Link to="/resume" className="item">
                resume
              </Link>
            </div>
          </div>
          <div className="column">
            <h2 className="sub-header ui sub header">
              Website built with: ReactJS, Semantic UI, React-Router-Dom, HTML,
              CSS
            </h2>
            <span>
              <i className="copyright icon" />
            </span>
          </div>

          <div className="column">
            <div className="ui list">
              <div className="item">
                <i className="linkedin icon" />
                <div className="content">
                  <a href="http://www.linkedin.com/in/jeradamundsen">
                    www.linkedin.com/in/jeradamundsen
                  </a>
                </div>
              </div>
              <div className="item">
                <i className="mobile alternative icon" />
                <div className="content">(801)792-3538</div>
              </div>
              <div className="item">
                <i className="mail icon" />
                <div className="content">
                  <a href="mailto:jerad.amundsen@gmail.com">
                    jerad.amundsen@gmail.com
                  </a>
                </div>
              </div>
              <div className="item">
                <i className="github icon" />
                <div className="content">
                  <a href="https://github.com/theSoviet1984">
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
