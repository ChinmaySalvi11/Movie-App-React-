import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import "./Section5.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Section5() {
  const [tab, setTab] = useState(1);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "290px",
    slidesToShow: 2,
    speed: 500,
  };

  const items = useSelector((store) => store.users);

  return (
    <>
      <div className="valentinesmain">
        <div className="row">
          <div className="tab-nav">
            <ul className="d-flex justify-content-start list-unstyled ms-4">
              <li
                id="rommoviestab"
                onClick={() => {
                  setTab(1);
                }}
                className={tab === 1 ? "active-tab" : ""}
              >
                Today <span> / </span>
              </li>

              <li
                id="rommoviestab"
                onClick={() => {
                  setTab(2);
                }}
                className={tab === 2 ? "active-tab" : ""}
              >
                This week <span>/</span>
              </li>

              <li
                id="rommoviestab"
                onClick={() => {
                  setTab(3);
                }}
                className={tab === 3 ? "active-tab" : ""}
              >
                Last 30 days
              </li>
            </ul>
          </div>
        </div>

        {/* VALENTINES */}
        <>
          {/* TODAY TAB */}
          {tab === 1 && (
            <div className="valentines row ms-2">
              <div className="valentinescol1 col-md-8 slider-container">
                <Slider {...settings}>
                  {items.slice(0, 9).map((item) => (
                    <>
                      <div className="valentimg text-center">
                        <Link
                          to={`details/${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <img
                            src={item.avatar}
                            style={{ height: "219px", width: "147px" }}
                          ></img>

                          <h4>{item.name}</h4>
                        </Link>
                      </div>
                    </>
                  ))}
                </Slider>
              </div>
              <div className="valentinescol2 col-md-4 mt-3 max-w-370 ps-4 ">
                <h3>Movies to watch on Valentines day</h3>
                <Link
                  to={`allmovies/`}
                  style={{ textDecoration: "none" }}
                  className="viewall_sec5"
                >
                  <p>VIEW ALL</p>
                </Link>
              </div>
            </div>
          )}
        </>

        <>
          {/* This week TAB */}
          {tab === 2 && (
            <div className="row valentines ms-2">
              <div className="valentinescol1 col-md-8 slider-container">
                <Slider {...settings}>
                  {items.slice(11, 19).map((item) => (
                    <>
                      <div className="text-center">
                        <img
                          src={item.avatar}
                          style={{ height: "219px", width: "147px" }}
                        ></img>

                        <h4>{item.name}</h4>
                      </div>
                    </>
                  ))}
                </Slider>
              </div>
              <div className="valentinescol2 col-md-4 mt-3 max-w-370 ps-4 ">
                <h3>Movies to watch on Valentines day</h3>
                <p>VIEW ALL</p>
              </div>
            </div>
          )}
        </>

        <>
          {/* LAST 30 Days TAB */}
          {tab === 3 && (
            <div className="row valentines ms-2">
              <div className="valentinescol1 col-md-8 slider-container">
                <Slider {...settings}>
                  {items.slice(17, 24).map((item) => (
                    <>
                      <div className="text-center">
                        <img
                          src={item.avatar}
                          style={{ height: "219px", width: "147px" }}
                        ></img>
                        <h4>{item.name}</h4>
                      </div>
                    </>
                  ))}
                </Slider>
              </div>
              <div className="valentinescol2 col-md-4 mt-3 max-w-370 ps-4 ">
                <h3>Movies to watch on Valentines day</h3>
                <p>VIEW ALL</p>
              </div>
            </div>
          )}
        </>
      </div>
    </>
  );
}

export default Section5;
