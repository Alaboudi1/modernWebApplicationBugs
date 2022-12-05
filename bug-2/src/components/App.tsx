import React, { useReducer, useEffect } from "react";

import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";
import "./App.css";

export const App = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchMovies("avengers");
  }, []);

  const fetchMovies = (searchValue: string): void => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((movies) => {
        if (movies) {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: movies,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: "Something went wrong",
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  const retrievedMovies: JSX.Element[] | JSX.Element =
    loading && !errorMessage ? (
      <div className="spinner">⏳Loading...</div>
    ) : errorMessage ? (
      <div className="errorMessage">⚠️{errorMessage}</div>
    ) : (
      <div className="movies">
        {movies.map((movie, index) => (
          <Movie key={`${index}-${movie.Title}`} movie={movie} />
        ))}
      </div>
    );

  return (
    <div className="container">
      <div className="title">
        <Header text="Search For Your Favourite Movies 🎥 " />

        <Search search={fetchMovies} />
      </div>
      <div>{retrievedMovies}</div>
    </div>
  );
};
