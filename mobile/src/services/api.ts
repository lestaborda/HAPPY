import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333' //se localhost, mudar para o ip da maquina
})

export default api;