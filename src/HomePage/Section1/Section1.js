import { useState, Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import "./Section1.css";
import { Link } from "react-router-dom";

function Section1() {
  const items = useSelector((store) => store.users);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="sec1 bg-dark">
        <>
          <Row className="h-25 d-flex flex-row w-100">
            <Col lg="3" sm="12" className="sec1_title mt-5 text-start">
              <hr />
              <p className="sec1title  display-7 font-weight-semi-bold">
                Popular Movies to Watch
              </p>
              <p className="sec1p text-white font-secondary font-weight-medium border-bottom">
                Most watched movies by days
              </p>
              <Link
                to={`allmovies/`}
                style={{ textDecoration: "none" }}
                className="viewall"
              >
                VIEW ALL
              </Link>
            </Col>

            <Col
              xs
              lg="9"
              sm="12"
              className="row1popmov d-flex text-white gap-2"
            >
              {items.slice(11, 16).map((item) => (
                <div key={item.id} className="rowpopedit">
                  <Link
                    to={`details/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={item.avatar}
                      style={{ width: "154px", height: "230px" }}
                      className="m-3"
                    />
                    <p>2020, Action, Comedy</p>
                    <h7>{item.name}</h7>
                  </Link>
                </div>
              ))}
            </Col>
          </Row>

          <Row className="w-100">
            <Col
              xs
              lg="9"
              sm="12"
              className="row2popmov d-flex text-white gap-4 mr-1 mt-3"
            >
              {items.slice(0, 7).map((item) => (
                <div key={item.id} className="m-2 text-start rowpopedit">
                  <Link
                    to={`details/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={item.avatar}
                      style={{ width: "154px", height: "230px" }}
                    />
                    <p>2020, Action, Comedy</p>
                    <h7>{item.name}</h7>
                  </Link>
                </div>
              ))}
            </Col>
          </Row>

          <Row className="w-100">
            <Col xs lg="9" sm="12" className="row3popmov d-flex text-white">
              <Collapse isOpen={isOpen}>
                <div
                  id="example-collapse-text"
                  className="d-flex gap-3 ms-3 rowpopedit"
                >
                  {items.slice(7, 14).map((item) => (
                    <div key={item.id} className="m-2">
                      <Link
                        to={`details/${item.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={item.avatar}
                          style={{ width: "154px", height: "230px" }}
                        />
                        <p>2020, Action, Comedy</p>
                        <h7>{item.name}</h7>
                      </Link>
                    </div>
                  ))}
                </div>
              </Collapse>
            </Col>
          </Row>
          <Button
            color="primary"
            onClick={toggle}
            style={{ marginBottom: "1rem" }}
          >
            + View More
          </Button>
        </>
      </div>
    </>
  );
}

export default Section1;
