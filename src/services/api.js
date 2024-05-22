import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://food-explorer-backend-f3wr.onrender.com/'
})
