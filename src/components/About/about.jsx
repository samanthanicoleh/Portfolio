import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

// my components
import MyImage from "../../assets/images/myimageabout.png";
import "./about.css";
import LanguageFooter from "../Footer/footer";
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

import JavaLogo from "../../assets/images/technologies/java.png";
import PythonLogo from "../../assets/images/technologies/python.png";

import GitHubLogo from "../../assets/images/technologies/github.png";
import PerforceLogo from "../../assets/images/technologies/perforce.png";

function About() {
  return (
    <div className="main-about">
      <img className="myimage-about" src={MyImage} alt="Image of me." />
      <div className="companies-section">
        <h3> Companies I've worked with </h3>
        <h5>(hover to view more details)</h5>
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
              <br /> <FontAwesomeIcon icon={faBriefcase} /> Applications
              Developer <br />
              <br /> <FontAwesomeIcon icon={faClock} /> Summer 2018 and Summer
              2019{" "}
            </div>
          </div>
        </div>
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
              <br /> <FontAwesomeIcon icon={faBriefcase} /> Teaching Assistant:
              Secure Web Development <br />
              <br /> <FontAwesomeIcon icon={faClock} /> January 2020 - June 2020{" "}
            </div>
          </div>
        </div>
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
            <br /> <FontAwesomeIcon icon={faBriefcase} /> Web Developer: Senior
            Development Project <br />
            <br /> <FontAwesomeIcon icon={faClock} /> September 2019 - May 2020{" "}
          </div>
        </div>
      </div>
      </div>
      <div className="description-section">
        <h3> How People Describe Working with Me </h3>
        <h6 className="quote quote-one"> "Samantha's work is top notch and she would be a valuable teammate to any team!" </h6>
        <h6 className="quote quote-two"> "... she was always available and very quick with her work. She did not hesitate to help and speed up the learning process for the rest of us, since she had prior experience with React." </h6>
        <h6 className="quote quote-three"> "I would love to work with Samantha again, it was fun, efficient and productive." </h6>
      </div>
      <div className="technologies-section">
        <h3> Technologies I've used </h3>
        <h4 className="technologies-headers"> Web Development </h4>
        <img
            className="techlogos"
            src={HtmlLogo}
            alt="HTML 5 Logo"
          />
          <img
            className="techlogos"
            src={CssLogo}
            alt="CSS 3 Logo"
          />
          <img
            className="techlogos"
            src={JavaScriptLogo}
            alt="JavaScript Logo"
          />
          <img
            className="techlogos"
            src={ReactLogo}
            alt="React Logo"
          />
          <img
            className="techlogos"
            src={BootstrapLogo}
            alt="Bootstrap Logo"
          />
          <img
            className="techlogos"
            src={NodeLogo}
            alt="Node JS Logo"
          />
          <img
            className="techlogos"
            src={PHPLogo}
            alt="PHP Logo"
          />

        <h4 className="technologies-headers"> Mobile Development </h4>
        <img
            className="techlogos"
            src={KotlinLogo}
            alt="Kotlin Logo"
          />
          <img
            className="techlogos"
            src={SwiftLogo}
            alt="Swift Logo"
          />
        
        <h4 className="technologies-headers"> Testing </h4>
        <img
            className="techlogos"
            src={JUnitLogo}
            alt="JUnit Logo"
          />
          <img
            className="techlogos"
            src={SeleniumLogo}
            alt="Selenium Logo"
          />
          <span className="testingspan"> react-testing-library </span>

          <h4 className="technologies-headers"> Software Development </h4>
          <img
            className="techlogos"
            src={JavaLogo}
            alt="Java Logo"
          />
          <img
            className="techlogos"
            src={PythonLogo}
            alt="Python Logo"
          />

          <h4 className="technologies-headers"> Source Control </h4>
          <img
            className="techlogos"
            src={GitHubLogo}
            alt="GitHub Logo"
          />
          <img
            className="techlogos"
            src={PerforceLogo}
            alt="Perforce Logo"
          />
      </div>

      <h4 className="technologies-headers"> .. and more!  </h4>



      <LanguageFooter />
    </div>
  );
}

export default About;
