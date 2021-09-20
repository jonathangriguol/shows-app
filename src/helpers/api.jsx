import axios from 'axios'

const client = axios.create({
  baseURL: 'http://api.tvmaze.com/'
})

const apiCall = function(options) {

  return client(options)

}

export default apiCall