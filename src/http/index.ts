import axios, { AxiosInstance } from 'axios'

const clienteHttp: AxiosInstance = axios.create({
  baseURL: process.env.BASE_API_URL || 'http://localhost:3000/',
})

export default clienteHttp
