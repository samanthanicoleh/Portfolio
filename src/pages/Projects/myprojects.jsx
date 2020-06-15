import React, { Component } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

// my components
import "./myprojects.css";
import HTImage from "../../assets/images/projects/healthtourismproject.jpg";
import MenuAppImage from "../../assets/images/projects/menuapppreview.png";
import RescuePetsImage from "../../assets/images/projects/rescuepetspreview.png";
import content from "../../LanguageAPI";
import LanguageFooter from "../../components/Footer/footer";

import MediaCard from "../../components/Cards/card";

class Projects extends Component {
  render() {
    return (
      <div className="main-projects">
        <h1 className="headline"> {content.projectspage.headers[0]} </h1>
        <Container>
          <h3> {content.projectspage.headers[1]} </h3>
          <Row>
            <Col>
              <img
                className="healthtourism-image"
                src={HTImage}
                alt="My Health Tourism project"
              />
            </Col>
            <Col>
              <p>{content.projectspage.healthtourismdesc}</p>
              <p>
                {content.projectspage.healthtourismguide[0]}{" "}
                <a href="/">{content.projectspage.healthtourismguide[1]}</a>.
              </p>
            </Col>
          </Row>
          <hr />
          <h3> {content.projectspage.headers[2]} </h3>
          <Row className="coursework-projects">
            <Col>
              <Row>
                <div className="coursework-item">
                  <MediaCard
                    cardtitle="Menu App"
                    cardimage={MenuAppImage}
                    carddesc={content.projectspage.projectsdesc[0]}
                    cardlink="https://github.com/samanthanicoleh/MenuApp"
                  />
                </div>
                <div className="coursework-item">
                  <MediaCard
                    cardtitle="Rescue Pets"
                    cardimage={RescuePetsImage}
                    carddesc={content.projectspage.projectsdesc[1]}
                    cardlink="https://github.com/samanthanicoleh/RescuePets"
                  />
                </div>
                <div className="coursework-item">
                  <MediaCard
                    cardtitle="Martian Dice"
                    cardimage={RescuePetsImage}
                    carddesc={content.projectspage.projectsdesc[2]}
                    cardlink="https://github.com/samanthanicoleh/MartianDice"
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        <LanguageFooter />
      </div>
    );
  }
}

export default Projects;
