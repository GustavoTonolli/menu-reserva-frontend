import axios, { AxiosInstance } from 'axios'

const clienteHttp: AxiosInstance = axios.create({
  baseURL: process.env.VITE_BASE_API_URL || 'http://localhost:3000/',
})

export default clienteHttp
