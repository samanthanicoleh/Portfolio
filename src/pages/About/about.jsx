import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";

// my components
import MyImage from "../../assets/images/myimageabout.png";
import MedoImg from "../../assets/images/aboutme/medo.jpg";
import BellaImg from "../../assets/images/aboutme/bella.jpg";
import PaintingImage from "../../assets/images/aboutme/painting.jpg";
import RunningImage from "../../assets/images/aboutme/running.jpg";
import DogImage from "../../assets/images/aboutme/dog.png";
import PizzaImage from "../../assets/images/aboutme/pizza.jpg";
import "./about.css";
import content from "../../LanguageAPI";
import LanguageFooter from "../../components/Footer/footer";
import FavouritesCard from "../../components/Cards/favouritescard";
// companies logos
import ImgTecLogo from "../../assets/images/logos/imaginationlogo.png";
import RitLogo from "../../assets/images/logos/ritcroatialogo.png";
import HealthTourismLogo from "../../assets/images/logos/healthlogos.png";
// technologies logos
import HtmlLogo from "../../assets/images/technologies/html.png";
import CssLogo from "../../assets/images/technologies/css.png";
import JavaScriptLogo from "../../assets/images/technologies/javascript.png";
import ReactLogo from "../../assets/images/technologies/react.png";
import BootstrapLogo from "../../assets/images/technologies/bootstrap.png";
import NodeLogo from "../../assets/images/technologies/nodejs.png";
import PHPLogo from "../../assets/images/technologies/php.png";
import KotlinLogo from "../../assets/images/technologies/kotlin.png";
import SwiftLogo from "../../assets/images/technologies/swift.png";
import JUnitLogo from "../../assets/images/technologies/junit.png";
import SeleniumLogo from "../../assets/images/technologies/selenium.png";
import JestLogo from "../../assets/images/technologies/jest.png";
import MochaLogo from "../../assets/images/technologies/mocha.png";
import JavaLogo from "../../assets/images/technologies/java.png";
import PythonLogo from "../../assets/images/technologies/python.png";
import GitHubLogo from "../../assets/images/technologies/github.png";
import PerforceLogo from "../../assets/images/technologies/perforce.png";
// certificates
import ESCertificate from "../../assets/images/certificates/es_certificate.png";
import TesterCertificate from "../../assets/images/certificates/becomeasoftwaretester_certificate.jpg";

import { ImageGroup, Image } from "react-fullscreen-image";

const certificates = [ESCertificate, TesterCertificate];

class About extends Component {
  render() {
    return (
      <div className="main-about">
        <h1 className="headline">{content.aboutpage.mainheader}</h1>

        {/* <img
          className="myimage-about"
          src={MyImage}
          alt={content.aboutpage.alt}
        /> */}
        <div className="companies-section">
          <h3> {content.aboutpage.header[0]} </h3>
          <h5>{content.aboutpage.header[1]}</h5>
          <Row style={{ textAlign: "center" }}>
            <Col sm>
              <div className="hvrbox">
                <img
                  className="hvrbox-layer_bottom"
                  src={ImgTecLogo}
                  alt="Imagination Technologies Logo"
                />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text">
                    {" "}
                    Imagination Technologies <br />
                    <br /> <FontAwesomeIcon icon={faBriefcase} />{" "}
                    {content.aboutpage.jobtitle[0]} <br />
                    <br /> <FontAwesomeIcon icon={faClock} />{" "}
                    {content.aboutpage.jobperiod[0]}{" "}
                  </div>
                </div>
              </div>
            </Col>
            <Col sm>
              <div className="hvrbox">
                <img
                  className="hvrbox-layer_bottom"
                  src={RitLogo}
                  alt="RIT Croatia Logo"
                />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text">
                    {" "}
                    RIT Croatia <br />
                    <br /> <FontAwesomeIcon icon={faBriefcase} />{" "}
                    {content.aboutpage.jobtitle[1]} <br />
                    <br /> <FontAwesomeIcon icon={faClock} />{" "}
                    {content.aboutpage.jobperiod[1]}{" "}
                  </div>
                </div>
              </div>
            </Col>
            <Col sm>
              <div className="hvrbox">
                <img
                  className="hvrbox-layer_bottom"
                  src={HealthTourismLogo}
                  alt="Kvarner Health and Bagatin Clinic Logo"
                />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text">
                    {" "}
                    Kvarner Health and Bagatin Clinic <br />
                    <br /> <FontAwesomeIcon icon={faBriefcase} />{" "}
                    {content.aboutpage.jobtitle[2]} <br />
                    <br /> <FontAwesomeIcon icon={faClock} />{" "}
                    {content.aboutpage.jobperiod[2]}{" "}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <div className="description-section">
          <h3> {content.aboutpage.header[2]} </h3>
          <h6 className="quote quote-one"> {content.aboutpage.quotes[0]} </h6>
          <h6 className="quote quote-two"> {content.aboutpage.quotes[1]} </h6>
          <h6 className="quote quote-three"> {content.aboutpage.quotes[2]} </h6>
        </div>
        <hr />
        <div className="technologies-section">
          <h3> {content.aboutpage.header[3]} </h3>
          <h4 className="technologies-headers">
            {" "}
            {content.aboutpage.technologiesheaders[0]}{" "}
          </h4>
          <img className="techlogos" src={HtmlLogo} alt="HTML 5 Logo" />
          <img className="techlogos" src={CssLogo} alt="CSS 3 Logo" />
          <img
            className="techlogos"
            src={JavaScriptLogo}
            alt="JavaScript Logo"
          />
          <img
            className="techlogos longerimg"
            src={ReactLogo}
            alt="React Logo"
          />
          <img className="techlogos" src={BootstrapLogo} alt="Bootstrap Logo" />
          <img
            className="techlogos longerimg"
            src={NodeLogo}
            alt="Node JS Logo"
          />
          <img className="techlogos longerimg" src={PHPLogo} alt="PHP Logo" />

          <h4 className="technologies-headers">
            {" "}
            {content.aboutpage.technologiesheaders[1]}{" "}
          </h4>
          <img className="techlogos" src={KotlinLogo} alt="Kotlin Logo" />
          <img className="techlogos" src={SwiftLogo} alt="Swift Logo" />

          <h4 className="technologies-headers">
            {" "}
            {content.aboutpage.technologiesheaders[2]}{" "}
          </h4>
          <img className="techlogos" src={JUnitLogo} alt="JUnit Logo" />
          <img className="techlogos" src={SeleniumLogo} alt="Selenium Logo" />
          <img className="techlogos" src={JestLogo} alt="Jest Logo" />
          <img className="techlogos" src={MochaLogo} alt="Mocha Logo" />

          <h4 className="technologies-headers">
            {" "}
            {content.aboutpage.technologiesheaders[3]}{" "}
          </h4>
          <img className="techlogos longerimg" src={JavaLogo} alt="Java Logo" />
          <img className="techlogos" src={PythonLogo} alt="Python Logo" />

          <h4 className="technologies-headers">
            {" "}
            {content.aboutpage.technologiesheaders[4]}{" "}
          </h4>
          <img className="techlogos" src={GitHubLogo} alt="GitHub Logo" />
          <img
            className="techlogos longerimg"
            src={PerforceLogo}
            alt="Perforce Logo"
          />

          <h4 className="technologies-headers">
            {" "}
            {content.aboutpage.technologiesheaders[5]}{" "}
          </h4>
        </div>
        <hr />
        <div className="certificate-section">
          <h3> {content.aboutpage.header[4]} </h3>
          <Row>
            <ImageGroup>
              <Row style={{ textAlign: "center" }}>
                {certificates.map((i) => (
                  <Col className="certificate-columns certificate-img">
                    <div>
                      <img
                        className="certificate-img-hidden"
                        src={i}
                        alt="Hidden Certificate"
                      />
                      <Image
                        src={i}
                        alt="Certificate"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </ImageGroup>
          </Row>
        </div>
        <hr />
        <div className="more-section">
          <h3> {content.aboutpage.header[5]} </h3>
          <Row>
            <Col>
              <Row>
                <FavouritesCard cardtitle="Pets" cardimage1={MedoImg} cardimage2={BellaImg} />
                <FavouritesCard cardtitle="Hobbies" cardimage1={PaintingImage} cardimage2={RunningImage} />
                <FavouritesCard cardtitle="Favourites" cardimage1={PizzaImage} cardimage2={DogImage} />
              </Row>
            </Col>
          </Row>
        </div>
        <LanguageFooter />
      </div>
    );
  }
}

export default About;
