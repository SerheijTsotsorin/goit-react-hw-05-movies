// Ключ API (v3 auth)
// e17c0253c8740e62872e4c433f2396d4
// Пример API-запроса
// https://api.themoviedb.org/3/movie/550?api_key=e17c0253c8740e62872e4c433f2396d4

import axios from 'axios';

const API_KEY = 'e17c0253c8740e62872e4c433f2396d4';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

async function fetchData(URL) {
  try {
    const response = await axios.get(URL);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export function fetchTrendingMovies() {
  return fetchData(`/trending/movie/week?api_key=${API_KEY}`);
}

export function fetchMoviesByName(name) {
  return fetchData(`/search/movie?api_key=${API_KEY}&query=${name}`);
}

export function fetchMoviesById(id) {
  return fetchData(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
}

export function fetchMoviesActors(id) {
  return fetchData(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
}

export function fetchMoviesReviews(id) {
  return fetchData(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
