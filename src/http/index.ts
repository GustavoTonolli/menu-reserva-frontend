import axios, { AxiosInstance } from 'axios'

const clienteHttp: AxiosInstance = axios.create({
  baseURL: 'https://menu-reserva-api.onrender.comgit a',
})

export default clienteHttp
