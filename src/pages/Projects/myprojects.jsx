import React, {Component} from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

// my components
import "./myprojects.css";
import HTImage from "../../assets/images/projects/healthtourismproject.jpg";
import content from "../../LanguageAPI";
import LanguageFooter from "../../components/Footer/footer";

import CourseworkCard from "../../components/Cards/card";

class Projects extends Component {
  render() {
    return (
      <div className="main-projects">
        <h1> {content.projectspage.headers[0]} </h1>
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
              <CourseworkCard  />
            </Col>
          </Row>
        </Container>
        <LanguageFooter />
      </div>
    );
  }
}

export default Projects;
