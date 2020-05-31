import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// my components
import './home.css'
import MyImage from '../../assets/images/myimage.png';
import LanguageFooter from '../Footer/footer';

class Home extends Component {
    render() { 
        return (  
            <div className="main-home">
                <div className="left-side">
                    <h1> Hello! </h1>
                    My name is Samantha Holstead and I graduated from RIT Croatia with honours this year.
                    <br/>
                    <Button variant="flat"> I need a website <FontAwesomeIcon icon={faChevronRight} /> </Button>
                    <Button variant="flat"> I need an app <FontAwesomeIcon icon={faChevronRight} /> </Button>
                    <Button variant="flat"> I'm looking to hire <FontAwesomeIcon icon={faChevronRight} /> </Button>
                </div>
                <div className="right-side">
                    <img className="myimage" src={MyImage} alt="Image of me." />  
                </div>
                <LanguageFooter/>
            </div>

            );
    }
}
 
export default Home;