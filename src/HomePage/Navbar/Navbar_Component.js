import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import header1 from "../Images/header1.svg";
import "./Navbar.css";
import VUDU_logo_ from "../Images/VUDU_Logo_.jpg";
import { AccordionHeader } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar_Component = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* header */}
      <div className="header_1">
        <img src={header1} />
        <button>Buy Now</button>
      </div>

      <div className="navmain">
        <Navbar expand="lg">
          <Container fluid>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                id: "navbarcollcont",
              }}
            >
              {/* OFFCANVAS BUTON */}
              <div>
                <Button
                  variant="primary"
                  onClick={handleShow}
                  id="offcanvasb"
                  style={{
                    marginLeft: "40px",
                    marginTop: "10px",
                    backgroundColor: "white",
                    border: "none",
                  }}
                >
                  <span
                    class="material-symbols-outlined"
                    style={{ color: "black" }}
                  >
                    menu
                  </span>
                </Button>
              </div>
              {/*  */}
              <div>
                <Navbar.Brand href="#home">
                  <img
                    id="vudulogo"
                    src={VUDU_logo_}
                    style={{
                      height: "60px",
                      width: "90px",
                      marginLeft: "50px",
                    }}
                  ></img>
                </Navbar.Brand>
              </div>

              <Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse id="navbar-example">
                <Nav style={{ marginLeft: "70px" }}>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>

                  <Nav.Link as={Link} to="/allmovies">
                    Pages
                  </Nav.Link>

                  <Nav.Link as={Link} to="/allmovies">
                    Movies
                  </Nav.Link>

                  <Nav.Link as={Link} to="/allmovies">
                    TV Shows
                  </Nav.Link>

                  <Nav.Link as={Link} to="/contactus">
                    Blog
                  </Nav.Link>

                  <Nav.Link as={Link} to="/contactus">
                    Docs
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              {/*  */}
              <div
                className="nav_upload"
                style={{ display: "flex", marginLeft: "70px" }}
              >
                <input
                  type="text"
                  className="rounded-pill min-width-250"
                  placeholder="  Search..."
                ></input>
                <div className="searchicn">
                  <span>
                    <IoSearchSharp />
                  </span>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div
                className="uploadic"
                style={{
                  marginLeft: "100px",
                  marginTop: "17px",
                  display: "flex",
                }}
              >
                <IoCloudUploadOutline />
                <p>Upload</p>
              </div>
              {/*  */}
            </div>

            <div
              className="dpicon"
              style={{ marginRight: "60px", marginTop: "10px" }}
            >
              <CgProfile />
            </div>
          </Container>
        </Navbar>
      </div>
      {/*  */}

      {/* OFF CANVAS CONTENT */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton style={{ marginRight: "20px" }}>
          <Offcanvas.Title>
            <img
              src={VUDU_logo_}
              style={{ height: "103px", width: "90px", marginLeft: "30px" }}
            ></img>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr></hr>
        <Offcanvas.Body>
          <Accordion>
            <AccordionHeader>Home</AccordionHeader>
            <AccordionBody>
              <p>Home v1</p>
              <p>Home v2</p>
              <p>Home v3</p>
              <p>Home v4</p>
              <p>Home v5</p>
              <p>Home v6 - Vodi Prime (Light)</p>
              <p>Home v7 - Vodi Prime (Dark)</p>
              <p>Home v8 Vodi Stream</p>
              <p>Home v9 - Vodi Tube (Light)</p>
              <p>Home v10 - Vodi Tube (Dark)</p>
            </AccordionBody>
          </Accordion>
          {/*  */}
          <Accordion>
            <AccordionHeader>Archive Pages</AccordionHeader>
            <AccordionBody>
              <p>Movies</p>
              <p>TV Shows</p>
              <p>Videos</p>
            </AccordionBody>
          </Accordion>
          {/*  */}
          <Accordion>
            <AccordionHeader>Single Movies</AccordionHeader>
            <AccordionBody>
              <p>Movie v1</p>
              <p>Movie v2</p>
              <p>Movie v3</p>
              <p>Movie v4</p>
              <p>Movie v5</p>
              <p>Movie v6</p>
              <p>Movie v7</p>
            </AccordionBody>
          </Accordion>
          {/*  */}
          <Accordion>
            <AccordionHeader>Single Videos</AccordionHeader>
            <AccordionBody>
              <p>Videos v1</p>
              <p>Videos v2</p>
              <p>Videos v3</p>
              <p>Videos v4</p>
              <p>Videos v5</p>
              <p>Videos v6</p>
            </AccordionBody>
          </Accordion>
          {/*  */}
          <Accordion>
            <AccordionHeader>Single Episodes</AccordionHeader>
            <AccordionBody>
              <p>Episode v1</p>
              <p>Episode v2</p>
              <p>Episode v3</p>
              <p>Episode v4</p>
            </AccordionBody>
          </Accordion>

          {/*  */}
          <Accordion>
            <AccordionHeader>Other Pages</AccordionHeader>
            <AccordionBody>
              <p>Landing v1</p>
              <p>Landing v2</p>
              <p>Coming Soon</p>
              <p>Single TV Show</p>
            </AccordionBody>
          </Accordion>
          {/*  */}
          <Accordion>
            <AccordionHeader>Blog Pages</AccordionHeader>
            <AccordionBody>
              <p>Blog</p>
              <p>Single Blog</p>
            </AccordionBody>
          </Accordion>
          {/*  */}
          <Accordion>
            <AccordionHeader>Static Pages</AccordionHeader>
            <AccordionBody>
              <p>Contact US</p>
              <p>404</p>
            </AccordionBody>
            {/*  */}
            <Accordion>
              <AccordionHeader>Docs</AccordionHeader>
              <AccordionBody>
                <p>Documentation</p>
                <p>Snippets</p>
              </AccordionBody>
            </Accordion>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar_Component;
