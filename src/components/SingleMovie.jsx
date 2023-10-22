import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { API } from "../components/Context";

const SingleMovie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
        setIsError({
          show: false,
          msg: " ",
        });
        console.log(data);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API}&i=${id}`);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [id]);

  if (isLoading) {
    return (
      <div className="movies-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container-fluid bg-dark d-flex justify-content-center align-items-center" style={{height:"100vh"}}>

<div className="card" style={{ maxWidth: "540px" }} key={movie.imdbID}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={movie.Poster} className="img-fluid  rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">
              {movie.Year}
            </p>
            <p className="card-text">
              {movie.Released}
            </p>
            <p className="card-text">
              {movie.Genre}
            </p>
            {/* <p className="card-text">
              {movie.imdbRating}
            </p> */}
            <p className="card-text">
              {movie.Country}
            </p>
            <NavLink to={"/movies"}><button className="btn btn-primary">Go Back</button></NavLink>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default SingleMovie;
