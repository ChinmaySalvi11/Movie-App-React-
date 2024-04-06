import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../HomePage/Footer/Footer";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./DetailsPage.css";
import { FaEye } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import abu from "../HomePage/Images/abu.jpg";
import { FaRegStar } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { FaRegHeart } from "react-icons/fa";
import Navbar_Component from "../HomePage/Navbar/Navbar_Component";

function DetailsPage() {
  const items = useSelector((state) => state.users);
  const { id } = useParams();

  console.log("ID from URL:", id);
  console.log("All items:", items);

  const filteredItems = items.filter((item) => item.id === Number(id));
  console.log("Filtered items:", filteredItems);

  const [tab, setTab] = useState(1);

  return (
    <div>
      <Navbar_Component />
      {filteredItems.map((item) => (
        <div key={item.id} item={item}>
          {console.log(item.trailer)}
          <div className="row detailspage_mainrow">
            <div className="col-lg mb-5 mt-4 row1det">
              <iframe src={item.trailer} height={620} width={989} />
              <div className="trailer d-md-flex align-items-center justify-content-between">
                <div className="trailer_time_type">
                  <h6>{item.name}</h6>
                  <ul className="trailerduration d-flex">
                    <li>
                      {item.year}
                      <span>|</span>
                    </li>
                    <li>
                      1hr 54min<span>|</span>
                    </li>
                    <li>
                      TV-BG<span>|</span>
                    </li>
                    <li>{item.type}</li>
                  </ul>
                </div>
                <div className="star_hearticn d-md-flex align-items-center mb-1 gap-3 mx-3">
                  <div className="d-flex">
                    <div className="star_icon">
                      <FaStar />
                    </div>
                    <div className="rate">
                      <div className="rate10">10.0</div>
                      <div>1 vote</div>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="hearticon">
                      <FaRegHeart />
                    </div>
                    <div id="addplaylist">+ Playlist</div>
                  </div>
                </div>
              </div>
              {/* Views on trailer */}
              <div className="trailerviews d-flex gap-3 ms-3">
                <div className="d-flex">
                  <div className="eyeicon">
                    <FaEye />
                  </div>
                  <span>8.3k views</span>
                </div>
                <div className="thumpsupicon ms-3">
                  <FaThumbsUp />
                  <span>29 +</span>
                </div>
              </div>
              {/*  */}
              <br></br>
              <p id="descrip">{item.desc}</p>

              <div className="trailertab text-center ">
                <ul className="border-bottom d-flex">
                  <li
                    onClick={() => {
                      setTab(1);
                    }}
                  >
                    Description /
                  </li>
                  <li
                    onClick={() => {
                      setTab(2);
                    }}
                  >
                    Review /
                  </li>
                  <li
                    onClick={() => {
                      setTab(3);
                    }}
                  >
                    Sources
                  </li>
                </ul>
                {tab === 1 && (
                  <div className="desccontent">
                    <p>
                      Praesent iaculis, purus ac vehicula mattis, arcu lorem
                      blandit nisl, non laoreet dui mi eget elit. Donec
                      porttitor ex vel augue maximus luctus. Vivamus finibus
                      nibh eu nunc volutpat suscipit. Nam vulputate libero quis
                      nisi euismod rhoncus. Sed eu euismod felis.{" "}
                    </p>
                  </div>
                )}
                {/* review content */}
                {tab === 2 && (
                  <div className="reviewcont">
                    <div className="reviewtitle text-start">
                      <h6>Add a review</h6>
                      <p>You must be logged in to post a review</p>
                    </div>
                    <div className="userreview text-start">
                      <h6>User Reviews</h6>
                      <div className="aburev d-flex">
                        <div>
                          <img src={abu} />
                        </div>
                        <div className="abuname ms-2">
                          <p>
                            abu backer <span>March 1, 2020</span>
                          </p>
                          <div className="staricons">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-start">
                      <p>Nice Movie</p>
                    </div>
                    <div className="thumb text-start">
                      <FaRegThumbsUp /> 0
                    </div>
                  </div>
                )}

                {/* Ṣources */}

                {tab === 3 && (
                  <div className="sourcescont">
                    <table>
                      <thead>
                        <tr>
                          <th>Links</th>
                          <th>Quality</th>
                          <th>Language</th>
                          <th>Player</th>
                          <th>Date Added</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="border-bottom">
                          <td>
                            <FaRegPlayCircle /> Play Now
                          </td>
                          <td>1080p</td>
                          <td>Marathi</td>
                          <td>OpenLoad</td>
                          <td>2020-07-05</td>
                        </tr>

                        <tr className="border-bottom">
                          <td>
                            <FaRegPlayCircle /> Play Now
                          </td>
                          <td>1080p</td>
                          <td>English</td>
                          <td>Stramango</td>
                          <td>2020-05-05</td>
                        </tr>

                        <tr className="border-bottom">
                          <td>
                            <FaRegPlayCircle /> Play Now
                          </td>
                          <td>1080p</td>
                          <td>Hindi</td>
                          <td>StreamCherry</td>
                          <td>2020-08-05</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <div className="card_main d-flex gap-3 mt-5">
                {items.slice(9, 13).map((item) => (
                  <>
                    <Card className="carddetailsp bg-dark text-white">
                      <Card.Img src={item.avatar} alt="Card image" />
                      <Card.ImgOverlay>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.desc}</Card.Text>
                        <button>WATCH NOW</button>
                      </Card.ImgOverlay>
                    </Card>
                  </>
                ))}
              </div>
            </div>
            {/* side-details */}
            <div className="col-lg mt-4 sidecol">
              <div className="comingsoon max-w-35rem">
                <img src="https://i.pinimg.com/236x/df/d3/eb/dfd3eb93a9247b6e28b1e2357450015b.jpg"></img>
              </div>

              <ol>
                <h5 className="text-start text-light mt-3">Top 5 List</h5>
                {items.slice(2, 7).map((item, index) => (
                  <li
                    key={index}
                    className="top5list border-gray-3200 border-bottom py-2d align-items-center"
                  >
                    <div className="ps-2 mb-3 ">
                      <span className="font-size-12 text-gray-1300 mb-1 d-inline-block text-lh-1">
                        {item.year}
                      </span>
                      <h6 className="mb-0 font-size-14 text-white">
                        <a className="text-white">{item.name}</a>
                      </h6>
                      <a className="mtype font-size-12">{item.type}</a>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default DetailsPage;
