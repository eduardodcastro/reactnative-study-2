import axios from 'axios';

const autocomplete = axios.create({
  baseURL: 'https://autocomplete.netimoveis.me/',
});

export default autocomplete;
