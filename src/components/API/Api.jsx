import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0cd55b4344e70019c3438e2ebc4c74a1';
const instance = axios.create({
  baseURL: `${BASE_URL}`,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getSearchMovie = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: query,
    },
  });
  return data;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
