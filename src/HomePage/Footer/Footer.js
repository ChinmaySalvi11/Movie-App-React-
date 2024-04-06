import React from "react";
import { Row, Col } from "react-bootstrap";
import VUDU_logo_ from "../Images/VUDU_Logo_.jpg";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <section className="footerupper-1 d-flex justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <img
              src={VUDU_logo_}
              style={{
                width: "103px",
                height: "50px",
                backgroundColor: "transparent",
              }}
            ></img>
          </div>

          <div className="socialf mt-2">
            <a href="" className="me-4 text-light text-decoration-none">
              <i
                class="fa fa-facebook text-light me-2"
                style={{ fontSize: "20px" }}
              ></i>
              Facebook
            </a>
            <a href="" className="me-4 text-light text-decoration-none">
              <i
                class="fa fa-twitter text-light me-2"
                style={{ fontSize: "20px" }}
              ></i>
              Twitter
            </a>
            <a href="" className="me-4 text-light text-decoration-none">
              <i
                class="fa fa-google text-light me-2"
                style={{ fontSize: "20px" }}
              ></i>
              Google+
            </a>
            <a href="" className="me-4 text-light text-decoration-none">
              <i
                class="fa fa-vimeo text-light me-2"
                style={{ fontSize: "20px" }}
              ></i>
              Vimeo
            </a>
            <a href="" className="me-4 text-light text-decoration-none">
              <i
                class="fa fa-rss text-light me-2"
                style={{ fontSize: "20px" }}
              ></i>
              RSS
            </a>
          </div>
        </section>

        <section>
          <div className=" text-center text-md-start">
            <Row className="mt-5" id="footer1">
              <Col md="3" lg="4" xl="3" className="moviecatcol mx-auto mb-5">
                <h6
                  className="text-uppercase fw-bold mb-4 text-center"
                  style={{ color: "#d1d1d1" }}
                >
                  Movie Categories
                </h6>
                <div
                  className="d-flex text-start"
                  id="footerul-1"
                  style={{ color: "#d1d1d1" }}
                >
                  <ul className="moviecatr-1 list-unstyled">
                    <li>Action</li>
                    <li>Adventure</li>
                    <li>Animation</li>
                    <li>Comedy</li>
                    <li>Crime</li>
                  </ul>
                  <ul className="moviecatr-2 list-unstyled ps-5">
                    <li>Drama</li>
                    <li>Fantasy</li>
                    <li>Horror</li>
                    <li>Mystery</li>
                    <li>Romance</li>
                  </ul>
                </div>
              </Col>

              <Col lg="2" xl="5" className="mx-auto mb-5">
                <h6
                  className="text-uppercase fw-bold mb-4 text-center"
                  style={{ color: "#d1d1d1" }}
                >
                  TV Series
                </h6>
                <div
                  className="d-flex text-start"
                  id="footerul-2"
                  style={{ color: "#d1d1d1" }}
                >
                  <ul className="list-unstyled ">
                    <li>Valentine Day</li>
                    <li>Underrated Comedies</li>
                    <li>Scary TV Series</li>
                    <li>Best 2020 Documentaries</li>
                    <li>Classic Shows</li>
                  </ul>

                  <ul className="list-unstyled ps-5">
                    <li>Big TV Premieres</li>
                    <li>Reality TV Shows</li>
                    <li>Original Shows</li>
                    <li>Surprise of the Year Shows</li>
                    <li>Top 10 TV Shows</li>
                  </ul>
                </div>
              </Col>

              <Col
                md="3"
                lg="2"
                className="supportcol mx-auto mb-2 border-start h-80"
              >
                <h6
                  className="text-uppercase fw-bold mb-4 footerul-3 text-center"
                  style={{ color: "#d1d1d1" }}
                >
                  Support
                </h6>
                <ul
                  className="list-unstyled footerul-3"
                  style={{ color: "#d1d1d1" }}
                >
                  <li>My Account</li>
                  <li>FAQ</li>
                  <li>Watch on TV</li>
                  <li>Help Center</li>
                  <li>Contact</li>
                </ul>
              </Col>
            </Row>
          </div>
        </section>
        <section id="footerlower">
          <div className="footerlower_1 text-center d-md-flex align-items-center py-3 mt-5">
            <div class="font-size-13 text-gray-1300 mb-2 mb-md-0 ms-2">
              Copyright © 2020, Vodi. All Rights Reserved
            </div>
            <a
              href="../static/contact.html"
              class="font-size-13 h-g-white ml-md-auto text-decoration-none"
            >
              Privacy Policy
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
export default Footer;
