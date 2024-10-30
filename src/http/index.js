import axios from 'axios';
const clienteHttp = axios.create({
    baseURL: process.env.BASE_API_URL || 'http://localhost:3000/',
});
export default clienteHttp;
//# sourceMappingURL=index.js.map