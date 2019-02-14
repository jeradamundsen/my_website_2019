
import React from 'react'

const Footer = ()=>{
  return (

      <div className="footer ui container">
        <div className="ui grid">
          <div className="four wide column">
            <h4>Links</h4>
            <div className="ui list">
              <a href="#home" className="item">home</a>
              <a href="#projects" className="item">projects</a>
              <a href="#contactme" className="item">contact me</a>


            </div>
          </div>
          <div className="four wide column">
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
              <a href="https://github.com/theSoviet1984">github.com/theSoviet1984</a>
            </div>
          </div>
        </div>
          </div>
          <div className="eight wide column">

              <div class="ui grid">
                <div className="four wide column"></div>
                <div className="twelve wide column">
                  <span><i className="copyright icon"></i>2019</span>
                </div>

            </div>


</div>
        </div>
      </div>

  )
}
export default Footer
