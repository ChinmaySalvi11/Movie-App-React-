import React, { useState } from "react";
import Navbar_Component from "../HomePage/Navbar/Navbar_Component";
import Footer from "../HomePage/Footer/Footer";
import "./AllMovies.css";
import "../HomePage/Section1/Section1.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function AllMovies() {
  const [movietype, setMovietype] = useState(1);
  const items = useSelector((store) => store.users);

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value);
    setMovietype((prevState) => (prevState === value ? 1 : value));
  };

  //  All movies
  const allmovies = items.filter((item) => item.detail === "Movie");

  const horror_movies = items.filter((item) => item.type === "Horror");

  const action_movies = items.filter((item) => item.type === "Action");

  const comedy_movies = items.filter((item) => item.type === "Comedy");

  const adventure_movies = items.filter((item) => item.type === "Adventure");

  const drama_movies = items.filter((item) => item.type === "Drama");

  //

  return (
    <>
      <Navbar_Component />
      <div className="allmoviescomp">
        <div className="row">
          {/* Categories */}
          <div className="headingcrumb d-flex  gap-2">
            <a href="#">Home</a>
            <FaChevronRight style={{ marginTop: "2px", color: "#949cb0" }} />
            <p>Movies</p>
          </div>

          <div className="allmoviescomp1 col-lg-auto ms-3">
            <div className="w-md-352rem space-bottom-2">
              <div className="px-3 py-3 mb-4 border-bottom">
                <h6>Categories</h6>
              </div>
              <div className="pt-2 pb-1 px-3">
                <div className="row mb-4 pb-1">
                  {/*  */}
                  <div className="col-md">
                    <ul className="filter1 list-unstyled mb-0">
                      <li>
                        <input
                          type="checkbox"
                          id="action"
                          value={3}
                          checked={movietype === 3}
                          onChange={handleCheckboxChange}
                        />
                        <label for="action"> Action</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="drama"
                          value={6}
                          checked={movietype === 6}
                          onChange={handleCheckboxChange}
                        />
                        <label for="drama">Drama </label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="adventure"
                          value={5}
                          checked={movietype === 5}
                          onChange={handleCheckboxChange}
                        />
                        <label for="adventure"> Adventure</label>
                      </li>
                    </ul>
                  </div>
                  {/*  */}
                  <div className="col-md">
                    <ul className="filter2 list-unstyled mb-0 ps-1">
                      <li>
                        <input
                          type="checkbox"
                          id="horror"
                          value={2}
                          checked={movietype === 2}
                          onChange={handleCheckboxChange}
                        />
                        <label for="horror"> Horror</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          id="comedy"
                          value={4}
                          checked={movietype === 4}
                          onChange={handleCheckboxChange}
                        />
                        <label for="comedy">Comedy</label>
                      </li>
                    </ul>
                  </div>
                  {/*  */}
                </div>

                <ul id="iconsmain">
                  <li className="caticons list-unstyled d-flex mb-0 gap-2">
                    <li>
                      <span class="material-symbols-outlined">mimo</span>
                      <p>4K ULTRA</p>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">subtitles</span>
                      <p>Subtitles</p>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">
                        interactive_space
                      </span>
                      <p>Dubbed</p>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">comedy_mask</span>
                      <p>Live</p>
                    </li>
                  </li>
                </ul>
              </div>
              {/* ================================================================================================= */}
              {/* Movies by year */}
              <div className="moviesbyyear pb-1 mt-2">
                <h6 className="border-bottom pb-3">Movies by Year</h6>
                <ul className="list-unstyled d-flex flex-wrap mb-4">
                  <li>
                    <p>2017</p>
                  </li>
                  <li>
                    <p>2018</p>
                  </li>
                  <li>
                    <p>2019</p>
                  </li>
                  <li>
                    <p>2020</p>
                  </li>
                  <li>
                    <p>2021</p>
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h6 className="border-bottom pb-3">By Ratings</h6>
                <div className="ratings">
                  <div className="row text-center">
                    <div className="col">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="col">
                      <p>(11)</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="row text-center">
                    <div className="col">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                    </div>
                    <div className="col">
                      <p>(23)</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="row text-center">
                    <div className="col">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                    <div className="col">
                      <p>(9)</p>
                    </div>
                  </div>

                  {/*  */}
                  <div className="row text-center">
                    <div className="col">
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                    <div className="col">
                      <p>(14)</p>
                    </div>
                  </div>

                  {/*  */}
                  <div className="row text-center">
                    <div className="col">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                    <div className="col">
                      <p>(15)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-2 pb-1 px-3">
                <h3 className="border-bottom pb-3">Top 5 List</h3>
                <ol>
                  {items.slice(0, 5).map((item) => (
                    <li
                      key={item.id}
                      className=" border-gray-3200 border-bottom py-2d align-items-center"
                    >
                      <Link
                        to={`/details/${item.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="top5_allmov ps-2 mb-3 ">
                          <span className="font-size-12 text-gray-1300 mb-1 d-inline-block text-lh-1">
                            {item.year}
                          </span>
                          <h6 className="mb-0 font-size-14 text-white">
                            <a className="text-white">{item.name}</a>
                          </h6>
                          <a className="mtype font-size-12">{item.type}</a>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Movies Section*/}

          <div className="moviesection1 col-lg">
            <section className="border-bottom pb-4">
              <div className="moviesheader mb-4">
                <header className="border-bottom pb-1 text-start">
                  Movies
                </header>
              </div>
              <div className="tabcontent d-flex gap-2">
                {movietype === 1 &&
                  allmovies.map((items) => (
                    <div key={items.id} className="text-start">
                      <Link
                        to={`/details/${items.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={items.avatar}
                          style={{ width: "145px", height: "203px" }}
                          alt={items.name}
                        />
                        <p>
                          {items.year}, {items.type}
                        </p>
                        <h6>{items.name}</h6>
                      </Link>
                    </div>
                  ))}

                {/*  */}

                {movietype === 2 &&
                  horror_movies.map((items) => (
                    <div key={items.id} className="text-start">
                      <Link
                        to={`/details/${items.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={items.avatar}
                          style={{ width: "145px", height: "203px" }}
                          alt={items.name}
                        />
                        <p>
                          {items.year}, {items.type}
                        </p>
                        <h6>{items.name}</h6>
                      </Link>
                    </div>
                  ))}
                {/*  */}
                {movietype === 3 &&
                  action_movies.map((items) => (
                    <div key={items.id} className="text-start">
                      <Link
                        to={`/details/${items.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={items.avatar}
                          style={{ width: "145px", height: "203px" }}
                          alt={items.name}
                        />
                        <p>
                          {items.year}, {items.type}
                        </p>
                        <h6>{items.name}</h6>
                      </Link>
                    </div>
                  ))}
                {/*  */}
                {movietype === 4 &&
                  comedy_movies.map((items) => (
                    <div key={items.id} className="text-start">
                      <Link
                        to={`/details/${items.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={items.avatar}
                          style={{ width: "145px", height: "203px" }}
                          alt={items.name}
                        />
                        <p>
                          {items.year}, {items.type}
                        </p>
                        <h6>{items.name}</h6>
                      </Link>
                    </div>
                  ))}
                {/*  */}
                {movietype === 5 &&
                  adventure_movies.map((items) => (
                    <div key={items.id} className="text-start">
                      <Link
                        to={`/details/${items.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={items.avatar}
                          style={{ width: "145px", height: "203px" }}
                          alt={items.name}
                        />
                        <p>
                          {items.year}, {items.type}
                        </p>
                        <h6>{items.name}</h6>
                      </Link>
                    </div>
                  ))}
                {/*  */}
                {movietype === 6 &&
                  drama_movies.map((items) => (
                    <div key={items.id} className="text-start">
                      <Link
                        to={`/details/${items.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={items.avatar}
                          style={{ width: "145px", height: "203px" }}
                          alt={items.name}
                        />
                        <p>
                          {items.year}, {items.type}
                        </p>
                        <h6>{items.name}</h6>
                      </Link>
                    </div>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllMovies;
