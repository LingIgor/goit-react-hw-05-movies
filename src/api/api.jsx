import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3f267efdd2dfa6b504977d892a47bb84';

export const getTrendMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}`
  );
  return data;
};

export const searchMovies = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`
  );
  return data;
};

export const getMoviesDeteils = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMoviesCredits = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMoviesReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
