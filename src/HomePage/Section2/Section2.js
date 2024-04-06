import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Section2.css";
// import Harry from "../HomePage/Images/Harry.jpg";

function Section2() {
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div>
      {/* iframe controls */}
      {showVideo && (
        <div className="iframe-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/JfVOs4VSpmA?si=sr7THq2R2F8EAvZD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <button className="close-button" onClick={closeVideo}>
            X
          </button>
        </div>
      )}
      <div className="harrybg">
        <div className="container">
          <Row>
            {/* TITLE COL */}
            <Col className="carousel_firstsec mb-5 text-center">
              <img
                src="https://artfiles.alphacoders.com/115/115622.jpg"
                style={{ width: "87px", height: "60px", borderRadius: "70px" }}
              ></img>
              <div className="maintitlecar text-start">
                <h3>
                  <a href="">Spider-Man: No Way Home</a>
                </h3>
                <p>
                  With Spider-Man's identity now revealed, Peter asks Doctor
                  Strange for help.
                </p>
              </div>
              <div className="sec2btn d-flex gap-3">
                <button
                  style={{
                    backgroundColor: "#24BAE4",
                    borderColor: "#24BAE4",
                  }}
                >
                  <a
                    href="#"
                    style={{ color: "red", fontWeight: "800" }}
                    onClick={playVideo}
                  >
                    WATCH NOW
                  </a>
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#24BAE4",
                    color: "black",
                  }}
                >
                  <a href="#" style={{ color: "red", fontWeight: "800" }}>
                    + PLAYLIST
                  </a>
                </button>
              </div>
            </Col>

            {/* play button col */}
            <Col className="playbtniframe text-center mt-5">
              <i
                class="material-icons"
                style={{
                  fontSize: "120px",
                  cursor: "pointer",
                  color: "lightBlue",
                }}
                onClick={playVideo}
              >
                play_circle_outline
              </i>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Section2;
