const API_KEY = '470bbffa94cc19a28fe8df80131cea37';

const Apis = {
  getTopRated:`https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=${API_KEY}`,
  getTrendingNow:`https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=${API_KEY}`,
  getHorrorMovies:`https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${API_KEY}`,
  getRomanceMovies:`https://api.themoviedb.org/3/discover/movie?with_genres=10749&api_key=${API_KEY}`,
  getDocumentaries:`https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=${API_KEY}`,
  getComedyMovies:`https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${API_KEY}`,
  getActionsMovies:`https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=${API_KEY}`,
  getPopular: `https://api.themoviedb.org/3/popular?&language=en-US&${API_KEY}`,
  getNetflixOriginals:`https://api.themoviedb.org/3/discover/tv?with_networks=213&api_key=${API_KEY}`,
  getDramaMovies :`https://api.themoviedb.org/3//discover/movie?with_genres=18&api_key=${API_KEY}`,
  getSfMovies:`https://api.themoviedb.org/3/discover/movie?with_genres=878&api_key=${API_KEY}`
}

export default Apis;