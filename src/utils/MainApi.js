class MainApi {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}. ${res.message}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this.handleResponse);
  }

  register(credentials) {
    console.log(credentials);
    return this._request(this.url + "/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
  }
  
  login(credentials) {
    return this._request(this.url + "/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email:credentials.email, password:credentials.password }),
    });
  }
  
  setToken(token) {
    this.headers = {
      Authorization: `${token}`,
      "content-Type": "application/json",
    }
  }

  getUser() {
    return this._request(this.url +'/users/me', {
      headers: this.headers, 
    });
  }

  setUser(name, email) {
    return this._request(this.url + '/users/me', {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ name, email }),
    });
  }

  saveMovie(data) {
    return this._request(this.url + '/movies', {
      method: "POST",
      headers:  this.headers,
      body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: `https://api.nomoreparties.co/beatfilm-movies${data.image.url}`,
          trailerLink: data.trailerLink,
          thumbnail: `https://api.nomoreparties.co/beatfilm-movies${data.image.url}`,
          movieId: data.id,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
      }),
    });
  }

  getSavedMovies() {
    return this._request(this.url + '/movies', {
      method: "GET",
      headers: this.headers,
    });
  }

  deleteMovie(id) {
    return this._request(this.url + `/movies/${id}`, {
        method: 'DELETE',
        headers: this.headers,
    });
  }
}

const currentUrl = window.location.href; 

const mainApi = new MainApi({
  url: currentUrl.includes('localhost') ? 'http://localhost:3002' : 'https://dogroseknight.back.nomoredomains.club',
  headers: {
    Authorization: "",
    "content-Type": "application/json",
  },
});

export default mainApi;