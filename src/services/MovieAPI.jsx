// Ключ API (v3 auth)
// e17c0253c8740e62872e4c433f2396d4
// Пример API-запроса
// https://api.themoviedb.org/3/movie/550?api_key=e17c0253c8740e62872e4c433f2396d4

import axios from 'axios';

const API_KEY = 'e17c0253c8740e62872e4c433f2396d4';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMoviesByName(name) {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${name}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMoviesById(id) {
  try {
    const response = await axios.get(
      `/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMoviesActors(id) {
  try {
    const response = await axios.get(
      `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMoviesReviews(id) {
  try {
    const response = await axios.get(
      `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
