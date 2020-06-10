import React, { Component } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import "./contact.css";
import * as emailjs from 'emailjs-com';

// my components
import LinkedInLogo from "../../assets/images/contact/linkedin.png";
import GitHubLogo from "../../assets/images/contact/github.png";
import LanguageFooter from "../../components/Footer/footer";
import content from "../../LanguageAPI";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state= {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "portfoliotemplate",
        ".contact_form",
        "user_dYd6o0N4JcOIrZprzOZyx"
      )
      .then()
      .catch();
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    })
  }

  render() {
    return (
      <div className="main-contact">
        <Container>
          <Row>
            <Col>
              <h3> {content.contactpage.header} </h3>
              <Form onSubmit={this.handleSubmit.bind(this)} className="contact_form">
                <Form.Group controlId="formName">
                  <Form.Label> {content.contactpage.formlabel[0]} </Form.Label>
                  <Form.Control
                    type="name"
                    id="name"
                    name="name"
                    placeholder={content.contactpage.formplaceholder[0]}
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label> {content.contactpage.formlabel[1]} </Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    placeholder={content.contactpage.formplaceholder[1]}
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                  />
                  <Form.Text className="text-muted">
                    {" "}
                    {content.contactpage.formtext}
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formSubject">
                  <Form.Label> {content.contactpage.formlabel[2]} </Form.Label>
                  <Form.Control
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder={content.contactpage.formplaceholder[2]}
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this)}
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label> {content.contactpage.formlabel[3]} </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    type="message"
                    id="message"
                    name="message"
                    placeholder={content.contactpage.formplaceholder[3]}
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                  />
                </Form.Group>
                <Button className="submit-btn" variant="primary" type="submit">
                  {content.contactpage.button}
                </Button>
              </Form>
            </Col>
            <Col className="right-side">
              <a href="https://www.linkedin.com/in/samantha-holstead-331135151">
                <img
                  className="contact-imgs"
                  src={LinkedInLogo}
                  alt="LinkedIn Logo."
                />
              </a>

              <a href="https://github.com/samanthanicoleh">
                <img
                  className="contact-imgs"
                  src={GitHubLogo}
                  alt="GitHub Logo."
                />
              </a>
            </Col>
          </Row>
        </Container>
        <LanguageFooter />
      </div>
    );
  }
}

export default Contact;
