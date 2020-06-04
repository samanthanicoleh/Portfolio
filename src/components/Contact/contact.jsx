import React, { Component } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import "./contact.css";

// my components
import LinkedInLogo from "../../assets/images/contact/linkedin.png";
import GitHubLogo from "../../assets/images/contact/github.png";

class Contact extends Component {
  render() {
    return (
      <div className="main-contact">
        <Container>
          <Row>
            <Col>
              <h3> Contact Me! </h3>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label> Your Name </Form.Label>
                  <Form.Control type="name" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label> Your Email </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    {" "}
                    Your email will never be shared with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formSubject">
                  <Form.Label> Subject </Form.Label>
                  <Form.Control
                    type="subject"
                    placeholder="Enter message title"
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label> Message </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    type="message"
                    placeholder="Enter your message"
                  />
                </Form.Group>
                <Button className="submit-btn" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col className="right-side">
              <img
                className="contact-imgs"
                src={LinkedInLogo}
                alt="LinkedIn Logo."
              />
              <a href="https://www.linkedin.com/in/samantha-holstead-331135151">Link to LinkedIn Profile</a>

              <img
                className="contact-imgs"
                src={GitHubLogo}
                alt="GitHub Logo."
              />
              <a href="https://github.com/samanthanicoleh">Link to GitHub Profile</a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
