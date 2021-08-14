import React from "react";
import "./ShowsScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../requests";

function ShowsScreen() {
  return (
    <div className="showsScreen">
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchPopularShows} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedShows} />
      <Row title="Latest Shows" fetchUrl={requests.fetchTrending} />
      <Row title="Thriller Shows" fetchUrl={requests.fetchActionShows} />
      <Row title="Comedy Shows" fetchUrl={requests.fetchComedyShows} />
      <Row title="Sci-Fi and Fantasy Shows" fetchUrl={requests.fetchScifiShows} />
      <Row title="Romance Shows" fetchUrl={requests.fetchRomanceShows} />
    </div>
  );
}

export default ShowsScreen;
