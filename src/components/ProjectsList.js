
import image1 from './images/nasa_app_homepage.png'
import image2 from './images/search_metorites.png'
import image3 from './images/recruiter-bot-home.jpeg'
import image4  from './images/recruiter-bot.jpeg'
import image5 from './images/mortgage-home.jpeg'
import image6 from './images/mortgage-sprite-styling.jpeg'
import image7 from './images/hubble_screenshot.jpeg'
import image8 from './images/react_website.jpeg'

import './ProjectsList.css';

import React, {Component} from 'react';



class ProjectsList extends Component {



render(){



  return(

      <div className="ui segment">
        <h1 className="ui header">
          Projects
        </h1>
        <div className=" image-list">
          <a href="https://spaceshipapp.herokuapp.com/#/about">
            <img className="thumbnail" src={image1} alt=""/>
          </a>
          <a href="https://spaceshipapp.herokuapp.com/#/meteoriteClassification">
            <img className="thumbnail" src={image2} alt=""/>
          </a>
          <a href="https://spaceshipapp.herokuapp.com/#/meteoriteClassification">
            <img className="thumbnail" src={image8} alt=""/>
          </a>
           <img className="thumbnail" src={image3} alt=""/>
           <img className="thumbnail" src={image4} alt=""/>
           <img className="thumbnail" src={image5} alt=""/>
           <img className="thumbnail" src={image6} alt=""/>
           <img className="thumbnail" src={image7} alt=""/>
        </div>
        <div className=" sub_header">Technologies Used: ReactJS | Angular | Nodejs | HTML5 | CSS | MongoDB | SASS | LESS | Botkit</div>
      </div>




  )
}
}

export default ProjectsList
