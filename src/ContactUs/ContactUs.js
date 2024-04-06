import React from "react";
import Navbar_Component from "../HomePage/Navbar/Navbar_Component";
import "./ContactUs.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Accordion, Card } from "react-bootstrap";
import { useState } from "react";
import Footer from "../HomePage/Footer/Footer";

function ContactUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar_Component />
      <div>
        <div className="contheader">
          <h3>Contact</h3>
          <div className="d-flex justify-content-center">
            <a href="">Home</a>
            <p>- Contact</p>
          </div>
        </div>
      </div>

      <div className="controw row">
        <div className="col-md-7 sm-12">
          <h5>Kindly share your details so we can get back to you</h5>
          <br></br>
          <Form className="ms-3">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Your Email Address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Subject</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group className="mb-3" controlId="yourmessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="contaccordion col-md-5 sm-12">
          <h5>Frequently Asked Questions</h5>
          <br></br>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header
                onClick={() => handleToggle(0)}
                className="custom-accordion-header"
              >
                {openIndex === 0 ? "-" : "+"} On how many devices can i watch at
                the same time?
              </Accordion.Header>
              <Accordion.Body className="text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header onClick={() => handleToggle(1)}>
                {openIndex === 1 ? "-" : "+"} First launch of Vodi
              </Accordion.Header>
              <Accordion.Body className="text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header onClick={() => handleToggle(2)}>
                {openIndex === 2 ? "-" : "+"} What is a Vodi
              </Accordion.Header>
              <Accordion.Body className="text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header onClick={() => handleToggle(3)}>
                {openIndex === 3 ? "-" : "+"} Failure to login Vodi on Mobile
              </Accordion.Header>
              <Accordion.Body className="text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header onClick={() => handleToggle(4)}>
                {openIndex === 4 ? "-" : "+"} Access to Vodi + packages in
                European Union Countries
              </Accordion.Header>
              <Accordion.Body className="text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br></br>
          <div className="offloc d-flex gap-3 mt-4">
            <div className="offaddress">
              <h6>Our Office</h6>
              <p>
                Brooklyn, New York 849 Diamond Str, 112th Floor NY 10012 New
                York, United Stated America
              </p>
            </div>
            <div className="offworkinghr">
              <h6>Working Hours</h6>
              <p>Mon-Sat : 8:00 - 17:00</p>
              <p>Sunday Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* MAP ROW */}
      <div className="mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6304563203194!2d-73.94973242532845!3d40.72615093675135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25948a387ece7%3A0x29260d175271dc23!2sDiamond%20St%2C%20Brooklyn%2C%20NY%2011222%2C%20USA!5e0!3m2!1sen!2sin!4v1709653056195!5m2!1sen!2sin"
          width="100%"
          height="320"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/*  */}
      <div className="moto">
        <h6>We Are Always Thinking Global</h6>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
