import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '973b560a9b6736b8c3136ef5ec47130e';

export const fetchTrending = async () => {
  const res = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return res.data;
};

export const fetchSearchMovies = async query => {
  const res = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return res.data;
};

export const fetchDetailsMovie = async movieId => {
  const res = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};

export const fetchCast = async movieId => {
  const res = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};

export const fetchReviews = async movieId => {
  const res = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return res.data;
};
