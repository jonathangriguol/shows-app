import apiCall from './../helpers/api'

const searchShows = async (query) => {
  const response = apiCall({
    url: `search/shows?q=${query}`,
    method: 'GET'
  })
  return response
}

const ShowService = {
  searchShows
}

export default ShowService