import React from "react";
import "./Section3.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Section3() {
  const items = useSelector((store) => store.users);

  const [tab, setTab] = useState(1);

  return (
    <div className="populartvseries">
      {/* TAB ROW */}
      <div className="row tvseries">
        <div className="tab-nav">
          <ul className="d-flex justify-content-center list-unstyled">
            <li
              id="poptvseriestab"
              onClick={() => {
                setTab(1);
              }}
              className={tab === 1 ? "active-tab" : ""}
            >
              Today <span> / </span>
            </li>

            <li
              id="poptvseriestab"
              onClick={() => {
                setTab(2);
              }}
              className={tab === 2 ? "active-tab" : ""}
            >
              This week <span>/</span>
            </li>

            <li
              id="poptvseriestab"
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

      {/* TAB 1  */}

      {tab === 1 && (
        <>
          <div className="poptrow1_main row m-0 p-0 ms-2">
            <div className="popTrow1 col-md-5 sm-12 md-12 mb-3 ms-1">
              <h3 className="display-7 mb-3 pb-2 border-bottom">
                Popular TV Series Right Now
              </h3>
            </div>
            <div className="defsec3 col-md-7 sm-12 d-flex gap-2 ms-4">
              {items.slice(20, 24).map((item) => (
                <>
                  <div className="product text-start">
                    <Link
                      to={`details/${item.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img src={item.avatar}></img>
                      <p>{item.type}</p>
                      <h6>{item.name}</h6>
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="popTrow2 row ms-1">
            <div className="defsec col-md-12 d-flex gap-3 m-0">
              {items.slice(19, 25).map((item) => (
                <>
                  <div className="product">
                    <Link
                      to={`details/${item.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img src={item.avatar}></img>
                      <p>{item.type}</p>
                      <h6>{item.name}</h6>
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      )}

      {/* TAB 2  */}

      {tab === 2 && (
        <>
          <div className="poptrow1_main row m-0 p-0 ms-2">
            <div className="popTrow1 col-md-5 mb-3 ms-1">
              <h3 className="display-7 mb-3 font-weight-semi-bold title pb-2 border-bottom">
                Popular TV Series Right Now
              </h3>
            </div>
            <div className="defsec3 col-md-7 d-flex gap-2 ms-4">
              {items.slice(10, 14).map((item) => (
                <>
                  <div className="product text-start">
                    <Link
                      to={`details/${item.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img src={item.avatar}></img>
                      <p>{item.type}</p>
                      <h6>{item.name}</h6>
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="popTrow2 row ms-1">
            <div className="defsec col-md-12 d-flex gap-3 m-0">
              {items.slice(12, 17).map((item) => (
                <>
                  <div className="product">
                    <img src={item.avatar}></img>
                    <p>{item.type}</p>
                    <h6>{item.name}</h6>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      )}

      {/* TAB 3  */}

      {tab === 3 && (
        <>
          <div className="poptrow1_main row m-0 p-0 ms-2">
            <div className="popTrow1 col-md-5 mb-3 ms-1">
              <h3 className="display-7 mb-3 font-weight-semi-bold title pb-2 border-bottom">
                Popular TV Series Right Now
              </h3>
            </div>
            <div className="defsec3 col-md-7 d-flex gap-2 ms-4">
              {items.slice(3, 7).map((item) => (
                <>
                  <div className="product text-start">
                    <img src={item.avatar}></img>
                    <p>{item.type}</p>
                    <h6>{item.name}</h6>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="popTrow2 row ms-1 ">
            <div className="defsec col-md-12 d-flex gap-3 m-0">
              {items.slice(5, 10).map((item) => (
                <>
                  <div className="product">
                    <img src={item.avatar}></img>
                    <p>{item.type}</p>
                    <h6>{item.name}</h6>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Section3;
