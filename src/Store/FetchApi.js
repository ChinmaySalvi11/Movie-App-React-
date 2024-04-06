import React from "react";
import { useEffect } from "react";
import { movieDetails } from "./UserSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

function FetchApi() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://65a68c3d74cf4207b4f05469.mockapi.io/MovieApp")
      .then((items) => {
        dispatch(movieDetails(items.data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  return <div></div>;
}

export default FetchApi;
