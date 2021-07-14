const homePageApi = async () => {
  const api_key = '745843703988462346ba909afe11c7ba'
  const responce = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`
  )
  const trendingResponce = responce.json()

  return trendingResponce
}
export default homePageApi
