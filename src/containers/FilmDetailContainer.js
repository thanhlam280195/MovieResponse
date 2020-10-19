import React from "react";
import { useSelector } from "react-redux";
import { getListMovies } from "../selector/filmSelector";
import { getItemLocalStorage } from "../utils/localStorage";
import { Link, useLocation } from "react-router-dom";
import "../styles/FilmsContainer.scss";
function FilmsDetailContainer() {
  let listMovie;
  const location = useLocation().pathname;
  const idMovie = location.slice(6);
  const listMovieFromStore = useSelector(getListMovies);
  if (listMovieFromStore.length) {
    listMovie = listMovieFromStore;
  } else {
    listMovie = getItemLocalStorage("LIST_MOVE");
  }
  const movieItem = listMovie.filter((i) => i.id === idMovie)[0];
  return (
    <div>
      <h1 className="section-heading">FILM DETAIL</h1>
      <div>
        <div className="rmdb-navigation">
          <div className="rmdb-navigation-content">
            <Link to="/">
              <p>Home</p>
            </Link>
            <p>/</p>
            <p>{movieItem.title}</p>
          </div>
        </div>
        <div
          className="rmdb-movieinfo"
          style={{ backgroundImage: `url(${movieItem.backdrop_path})` }}
        >
          <div className="rmdb-movieinfo-content">
            <div className="rmdb-movieinfo-thumb">
              <div className="rmdb-moviethumb">
                <img src={movieItem.poster_path} alt="moviethumb" />
              </div>
            </div>
            <div className="rmdb-movieinfo-text">
              <h1 className="movie_title">
                {movieItem.title}
                <span>(Released)</span>
              </h1>
              <h3>PLOT</h3>
              <p>{movieItem.overview}</p>
              <h3>IMDB RATING</h3>
              <div className="rmdb-rating">
                <meter
                  min="0"
                  max="10"
                  optimum="10"
                  low="4"
                  high="7"
                  value={`${movieItem.vote_average}`}
                />
                <p className="rmdb-score">{movieItem.vote_average}</p>
              </div>
              <h3>VOTE COUNT</h3>
              <p className="rmdb-director">{movieItem.vote_count}</p>
              <h3>RELEASE DATE</h3>
              <p className="rmdb-director">{movieItem.release_date}</p>
            </div>
            <span
              aria-hidden="true"
              className="fa fa-film fa-5x fa-film"
            ></span>
          </div>
        </div>
        <div className="rmdb-movieinfobar"></div>
      </div>
    </div>
  );
}
export default FilmsDetailContainer;
