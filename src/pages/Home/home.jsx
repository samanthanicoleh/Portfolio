import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// my components
import "./home.css";
import content from "../../LanguageAPI";
import LanguageFooter from "../../components/Footer/footer";

class Home extends Component {
  render() {
    return (
      <div className="main-home">
        <div className="left-side">
          <h1 className="headline"> {content.homepage.header[0]} </h1>
          <h3> {content.homepage.header[1]} </h3>
          <p> {content.homepage.aboutme}</p>
          <br />
          <div className="buttons">
            <Link as={Link} to="/about">
              <Button style={{margin: '2em'}} variant="flat">
                {" "}
                {content.homepage.button[0]}{" "}
                <FontAwesomeIcon icon={faChevronRight} />{" "}
              </Button>
            </Link>
          </div>
        </div>
        <LanguageFooter />
      </div>
    );
  }
}

export default Home;
