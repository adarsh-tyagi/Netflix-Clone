const API_KEY = "e8dce7da46844c6b013c0e835f59da30";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,
  fetchLatestMovies: `/movie/latest?api_key=${API_KEY}`,

  fetchPopularShows: `/tv/popular?api_key=${API_KEY}`,
  fetchTopRatedShows: `/tv/top_rated?api_key=${API_KEY}`,
  fetchLatestShows: `/tv/latest?api_key=${API_KEY}`,
  fetchActionShows: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  fetchComedyShows: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchScifiShows: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  fetchRomanceShows: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;
