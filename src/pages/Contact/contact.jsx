import React, { Component } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import "./contact.css";

// my components
import LinkedInLogo from "../../assets/images/contact/linkedin.png";
import GitHubLogo from "../../assets/images/contact/github.png";
import LanguageFooter from "../../components/Footer/footer";
import content from "../../LanguageAPI";

class Contact extends Component {
  render() {
    return (
      <div className="main-contact">
        <Container>
          <Row>
            <Col>
              <h3> {content.contactpage.header} </h3>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label> {content.contactpage.formlabel[0]} </Form.Label>
                  <Form.Control type="name" placeholder={content.contactpage.formplaceholder[0]} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label> {content.contactpage.formlabel[1]} </Form.Label>
                  <Form.Control type="email" placeholder={content.contactpage.formplaceholder[1]} />
                  <Form.Text className="text-muted">
                    {" "}
                    {content.contactpage.formtext}
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formSubject">
                  <Form.Label> {content.contactpage.formlabel[2]} </Form.Label>
                  <Form.Control
                    type="subject"
                    placeholder={content.contactpage.formplaceholder[2]}
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label> {content.contactpage.formlabel[3]} </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    type="message"
                    placeholder={content.contactpage.formplaceholder[3]}
                  />
                </Form.Group>
                <Button className="submit-btn" variant="primary" type="submit">
                  {content.contactpage.button}
                </Button>
              </Form>
            </Col>
            <Col className="right-side">
              <img
                className="contact-imgs"
                src={LinkedInLogo}
                alt="LinkedIn Logo."
              />
              <a href="https://www.linkedin.com/in/samantha-holstead-331135151">{content.contactpage.links[0]}</a>

              <img
                className="contact-imgs"
                src={GitHubLogo}
                alt="GitHub Logo."
              />
              <a href="https://github.com/samanthanicoleh">{content.contactpage.links[1]}</a>
            </Col>
          </Row>
        </Container>
        <LanguageFooter/>
      </div>
    );
  }
}

export default Contact;
