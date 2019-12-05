import axios from 'axios';

const api = axios.create({
  baseURL: 'http://wcfservices.redenetimoveis.com.br/api/',
});

export default api;
