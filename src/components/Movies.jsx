import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Movies = () => {
  const { movie,isLoading } = useGlobalContext();
  if(isLoading){
    return(
    <div className="movies-section">
        <div className="loading ">Loading...</div>
    </div>
    )
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          
            {movie.map((val) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-6" key={val.imdbID}>
                  <div className="card "  key={val.imdbID}>
                  <Link to={`movie/${val.imdbID}`}>
                  <img src={val.Poster}  className="card-img-top image-fluid" alt="..." />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{val.Title.slice(0,15)}</h5>
                    <p className="card-text">
                      {val.Year}
                    </p>
                  </div>
                </div>
                </div>
              );
            })}
          
        </div>
      </div>
    </>
  );
};

export default Movies;
