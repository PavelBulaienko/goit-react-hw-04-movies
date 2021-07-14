const fetchOnAPI = async (query) => {
  const api_key = '745843703988462346ba909afe11c7ba';
  const responce = await fetch(
    `https:api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
  ).then((responce) => responce.json());
  const results = responce.results;
  return results;
};

export default fetchOnAPI;
