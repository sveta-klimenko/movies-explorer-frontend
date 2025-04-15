class MoviesApi {
  constructor(config) {
      this._url = config.url;
      this._headers = config.headers;
  }

  handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies = () => {
      return fetch(this._url, {
          method: 'GET',
          headers: this._headers
      }).then(this.handleResponse);
  }
}
const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    "Content-Type": "application/json",
  }
});

export default moviesApi;