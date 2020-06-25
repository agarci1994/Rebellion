// Axios
const axios = require('axios').default

// Env
const CLOUD_NAME = process.env.CLOUD_NAME
const API_KEY = process.env.API_KEY
const API_SECRET = process.env.API_SECRET


class cloudinaryAPIHandler {
  constructor() {
    this.axiosApp = axios.create({
      baseURL: `https://${API_KEY}:${API_SECRET}@api.cloudinary.com/v1_1/${CLOUD_NAME}`
    })
  }

// Get data from the Cloudinary Admin API
  getImage = (nextPage) => {
    const storageImage = []

    return nextPage ? this.axiosApp.get(`/resources/image?max_results=500&next_cursor=${nextPage}`) :
      this.axiosApp.get(`/resources/image?max_results=500`)
      .then(response => {
        storageImage.push(response.data.resources)
        return response.data.next_cursor && this.getImage(response.data.next_cursor)
      })
      .then(response => {
        response && storageImage.push(response.data.resources)
        return storageImage
      })
  }
}

module.exports = cloudinaryAPIHandler;