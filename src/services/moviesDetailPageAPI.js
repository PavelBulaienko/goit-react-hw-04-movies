import axios from 'axios'

const moviesDetailPageAPI = {
  api_key: '745843703988462346ba909afe11c7ba',

  async fullInfoMovie(movieId) {
    const responce = await axios(
      `https:api.themoviedb.org/3/movie/${movieId}&?api_key=${this.api_key}`
    ).then((responce) => responce.data)

    return responce
  },
  async castInfoMovie(movieId) {
    const responce = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.api_key}`
    ).then((responce) => responce.data)

    return responce
  },
  async reviewsInfoMovie(movieId) {
    const responce = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${this.api_key}`
    ).then((responce) => responce.data)

    return responce
  },
}

export default moviesDetailPageAPI
