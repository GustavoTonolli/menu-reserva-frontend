import axios, { AxiosInstance } from 'axios'

const clienteHttp: AxiosInstance = axios.create({
  baseURL: 'https://menu-reserva-api.onrender.com/',
})

export default clienteHttp
