// Env
const CLOUD_NAME = process.env.CLOUD_NAME
const API_KEY = process.env.API_KEY
const API_SECRET = process.env.API_SECRET
// Axios
const axios = require('axios').default


class cloudinaryAPIHandler {
  constructor() {
    this.axiosApp = axios.create({
      baseURL: `https://${API_KEY}:${API_SECRET}@api.cloudinary.com/v1_1/${CLOUD_NAME}`
    })
  }
  getImage = (nextPage) => nextPage ? this.axiosApp.get(`/resources/image?max_results=500&next_cursor=${nextPage}`) :
    this.axiosApp.get(`/resources/image?max_results=500`)
}

module.exports = cloudinaryAPIHandler;