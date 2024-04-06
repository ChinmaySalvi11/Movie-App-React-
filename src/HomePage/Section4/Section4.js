import React from "react";
import "./Section4.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Section3() {
  const items = useSelector((store) => store.users);

  const [tab, setTab] = useState(1);
  const [tab2, setTab2] = useState(1);

  return (
    <div>
      <div className="row w-100">
        <div className="col-md-5 sm-12 T9 bg-gray-3100 p-4">
          <div className="tabs border-bottom d-flex pb-2d border-gray-3200 justify-content-between">
            <h3>Top 9 this Week</h3>
            <ul className="nav gap-3">
              <li
                onClick={() => {
                  setTab(1);
                }}
                className={tab === 1 ? "active-tab" : ""}
              >
                Movies
              </li>
              <li
                onClick={() => {
                  setTab(2);
                }}
                className={tab === 2 ? "active-tab" : ""}
              >
                TV Series
              </li>
            </ul>
          </div>

          <div>
            {tab === 1 && (
              <ol>
                {items.slice(0, 5).map((item, index) => (
                  <Link
                    to={`details/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <li
                      key={index}
                      className=" border-gray-3200 border-bottom py-2d align-items-center"
                    >
                      <div className="sec4_top9 ps-2 mb-3 ">
                        <span className="font-size-12 text-gray-1300 mb-1 d-inline-block text-lh-1">
                          {item.year}
                        </span>
                        <h6 className="mb-0 font-size-14 text-white">
                          <a className="text-white">{item.name}</a>
                        </h6>
                        <a className="mtype font-size-12">{item.type}</a>
                      </div>
                    </li>
                  </Link>
                ))}
              </ol>
            )}
          </div>

          <div>
            {tab === 2 && (
              <ol>
                {items.slice(10, 18).map((item, index) => (
                  <Link
                    to={`details/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <li
                      key={index}
                      className="border-gray-3200 border-bottom py-2d align-items-center"
                    >
                      <div className="sec4_top9 ps-2 mb-3 ">
                        <span className="font-size-12 text-white-1300 mb-1 d-inline-block text-lh-1">
                          {item.year}
                        </span>
                        <h6 className="mb-0 font-size-14 text-white">
                          <a className="text-white">{item.name}</a>
                        </h6>
                        <a className="mtype font-size-12">{item.type}</a>
                      </div>
                    </li>
                  </Link>
                ))}
              </ol>
            )}
          </div>
        </div>

        <div className="newestm_main col-md-7 p-md-4 tb2">
          <div className="py-4 p-md-4 ml-wd-3">
            <div className="border-bottom d-xl-flex pb-2d mb-3d align-items-center justify-content-between">
              <h3 className="font-size-22 text-white font-weight-medium mb-2">
                Newest Movies
              </h3>
              <ul className="nav-item2 d-flex gap-3 list-unstyled">
                <li
                  onClick={() => {
                    setTab2(1);
                  }}
                  className={tab2 === 1 ? "active-tab" : ""}
                >
                  Today
                </li>
                <li
                  onClick={() => {
                    setTab2(2);
                  }}
                  className={tab2 === 2 ? "active-tab" : ""}
                >
                  This week
                </li>
                <li
                  onClick={() => {
                    setTab2(3);
                  }}
                  className={tab2 === 3 ? "active-tab" : ""}
                >
                  Last 30 Days
                </li>
              </ul>
            </div>
          </div>
          {/* title tab */}
          <div>
            {items.map((item, index) => (
              <>
                <Link
                  to={`details/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div key={index} className="tab-content align-content-center">
                    <div className="singleitem row">
                      {index === 11 && (
                        <>
                          <div className="col-auto">
                            <img
                              src={item.avatar}
                              style={{ width: "176px", height: "264px" }}
                            ></img>
                          </div>

                          <div className="firstitem col-auto mt-4">
                            <div className="product-meta font-size-12 mb-1">
                              {item.year}
                            </div>
                            <h4>{item.name}</h4>
                            <p className="text-gray font-size-14">
                              {item.desc}
                            </p>

                            <button id="btn1">WATCH NOW</button>
                            <button id="btn2">+ PLAYLIST</button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              </>
            ))}
            {/* Today content */}
            <>
              <div className="d-flex justify-content-center">
                {tab2 === 1 && (
                  <div className="sec4_cont d-flex mt-4">
                    <div className="r-1">
                      {items.slice(10, 14).map((item, index) => (
                        <Link
                          to={`details/${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div key={index} className="row">
                            <div className="col-6">
                              <ul className="row d-block d-lg-flex no-gutters product mr-lg-6 pb-2d border-gray-3200 mb-2d list-unstyled">
                                <li className="col-auto">
                                  <img
                                    src={item.avatar}
                                    style={{ width: "64px", height: "94px" }}
                                  ></img>
                                </li>
                                <li className="col-auto">
                                  <div className="sec4_top9_2 my-auto pl-lg-3d">
                                    <span>{item.year}</span>
                                    <h5>{item.name}</h5>
                                    <p>{item.type}</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="r-2 ms-2">
                      {items.slice(4, 8).map((item, index) => (
                        <Link
                          to={`details/${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div key={index} className="row">
                            <div className="col-6">
                              <ul className="row d-block d-lg-flex no-gutters product  mr-lg-6 pb-2d border-gray-3200 mb-2d list-unstyled ps-3">
                                <li className="col-auto">
                                  <img
                                    src={item.avatar}
                                    style={{ width: "64px", height: "94px" }}
                                  ></img>
                                </li>
                                <li className="col-auto">
                                  <div className="sec4_top9_2 my-auto pl-lg-3d">
                                    <span>{item.year}</span>
                                    <h5>{item.name}</h5>
                                    <p>{item.type}</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
            {/* This week content */}
            <>
              <div className="d-flex justify-content-center">
                {tab2 === 2 && (
                  <div className="sec4_cont d-flex mt-4">
                    <div className="r-1">
                      {items.slice(1, 5).map((item, index) => (
                        <Link
                          to={`details/${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div key={index} className="row">
                            <div className="col-6">
                              <ul className="row d-block d-lg-flex no-gutters product border-bottom mr-lg-6 pb-2d border-gray-3200 mb-2d list-unstyled">
                                <li className="col-auto">
                                  <img
                                    src={item.avatar}
                                    style={{ width: "64px", height: "94px" }}
                                  ></img>
                                </li>
                                <li className="col-auto">
                                  <div className="sec4_top9_2 my-auto pl-lg-3d">
                                    <span>{item.year}</span>
                                    <h5>{item.name}</h5>
                                    <p>{item.type}</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="r-2 ms-2">
                      {items.slice(6, 10).map((item, index) => (
                        <Link
                          to={`details/${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div key={index} className="row">
                            <div className="col-6">
                              <ul className="row d-block d-lg-flex no-gutters product border-bottom mr-lg-6 pb-2d border-gray-3200 mb-2d list-unstyled ps-3">
                                <li className="col-auto">
                                  <img
                                    src={item.avatar}
                                    style={{ width: "64px", height: "94px" }}
                                  ></img>
                                </li>
                                <li className="col-auto">
                                  <div className="sec4_top9_2 my-auto pl-lg-3d">
                                    <span>{item.year}</span>
                                    <h5>{item.name}</h5>
                                    <p>{item.type}</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
            {/* Last 30 day content */}
            <>
              <div className="d-flex justify-content-center">
                {tab2 === 3 && (
                  <div className="sec4_cont d-flex mt-4">
                    <div className="r-1">
                      {items.slice(20, 24).map((item, index) => (
                        <Link
                          to={`details/${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div key={index} className="row">
                            <div className="col-6">
                              <ul className="row d-block d-lg-flex no-gutters product border-bottom mr-lg-6 pb-2d border-gray-3200 mb-2d list-unstyled">
                                <li className="col-auto">
                                  <img
                                    src={item.avatar}
                                    style={{ width: "64px", height: "94px" }}
                                  ></img>
                                </li>
                                <li className="col-auto">
                                  <div className="sec4_top9_2 my-auto pl-lg-3d">
                                    <span>{item.year}</span>
                                    <h5>{item.name}</h5>
                                    <p>{item.type}</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="r-2 ms-2">
                      {items.slice(21, 25).map((item, index) => (
                        <Link
                          to={`details/${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div key={index} className="row">
                            <div className="col-6">
                              <ul className="row d-block d-lg-flex no-gutters product border-bottom mr-lg-6 pb-2d border-gray-3200 mb-2d list-unstyled ps-3">
                                <li className="col-auto">
                                  <img
                                    src={item.avatar}
                                    style={{ width: "64px", height: "94px" }}
                                  ></img>
                                </li>
                                <li className="col-auto">
                                  <div className="sec4_top9_2 my-auto pl-lg-3d">
                                    <span>{item.year}</span>
                                    <h5>{item.name}</h5>
                                    <p>{item.type}</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
