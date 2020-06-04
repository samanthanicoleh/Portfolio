import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// my components
import './home.css'
import content from "../../LanguageAPI";
import MyImage from '../../assets/images/myimage.png';
import LanguageFooter from '../Footer/footer';

class Home extends Component {
    render() { 
        return (  
            <div className="main-home">
                <div className="left-side">
                    <h1> {content.homepage.header[0]} </h1>
                    <h3> {content.homepage.header[1]} </h3> 
                    <p> {content.homepage.aboutme}
                    </p>
                    <br/>
                    <Button variant="flat"> {content.homepage.button[0]} <FontAwesomeIcon icon={faChevronRight} /> </Button>
                    <Button variant="flat"> {content.homepage.button[1]} <FontAwesomeIcon icon={faChevronRight} /> </Button>
                    <Button variant="flat"> {content.homepage.button[2]} <FontAwesomeIcon icon={faChevronRight} /> </Button>
                </div>
                <LanguageFooter/>
            </div>

            );
    }
}
 
export default Home;