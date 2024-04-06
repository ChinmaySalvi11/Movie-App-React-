import React from "react";
import { useState } from "react";
import "./Carousel.css";
import { useSelector } from "react-redux";
import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function CarouselApp() {
  const [index, setIndex] = useState(0);

  const handleState = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const items = useSelector((store) => store.users);

  if (!items || items.length === 0) {
    return <div>API FETCHING!! PLEASE WAIT</div>;
  }

  const filteredItems = items.filter((item) => item.type === "Action");

  return (
    <>
      <div className="main">
        <Carousel activeIndex={index} onSelect={handleState}>
          {filteredItems.map((data) => (
            <CarouselItem key={data.id}>
              <img
                className="mainimg d-block mh-100 w-100 object-fit-fill"
                src={data.avatar}
              />
              <CarouselCaption>
                <h3>{data.name}</h3>
                <p>2020 | Action | 2 hr 33 min</p>
                <Link
                  to={`details/${data.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <button id="carwatchnow">Watch Now</button>
                  <button id="carplaylist">+ Play List</button>
                </Link>
              </CarouselCaption>
            </CarouselItem>
          ))}
        </Carousel>
        <div className="custom-carousel-indicators">
          {filteredItems.map((data, i) => (
            <img
              key={data.id}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
              src={data.avatar}
              alt={data.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CarouselApp;
