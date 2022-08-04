const API_KEY = '6e6385f58666428924c228f464131223';
const ENDPOINT = 'https://api.themoviedb.org/3/trending/movie/day';

export function Api() {
  return fetch(`${ENDPOINT}?api_key=${API_KEY}`).then(response =>
    response.json()
  );
}

export function ApiSearch(searchQuery) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`
  ).then(response => response.json());
}

export function ApiDetails(movieID) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`
  ).then(response => response.json());
}

export function ApiCast(movieID) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`
  ).then(response => response.json());
}

export function ApiReviews(movieID) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then(response => response.json());
}
