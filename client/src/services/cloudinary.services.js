import axios from './http-common';

export const getStatistics = () => axios.get('/api/cloudinary/statistics').then(response => response.data).catch(err => console.log(err))
export const getCSV = () => axios.get('/api/cloudinary/csv').then(response => response.data).catch(err => console.log(err))
