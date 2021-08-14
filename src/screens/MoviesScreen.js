import React from "react";
import "./MoviesScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../requests";

function MoviesScreen() {
  return (
    <div className="moviesScreen">
      <Nav />
      <Banner fetchUrl={requests.fetchUpcomingMovies} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchUpcomingMovies}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchPopularMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default MoviesScreen;
