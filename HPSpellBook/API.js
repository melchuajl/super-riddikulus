import axios from 'axios';

const API = axios.create({baseURL:"https://wizard-world-api.herokuapp.com"});

export default API;