import axios from 'axios';

const mongoAPI = axios.create({baseURL:"https://super-riddikulus-server.herokuapp.com/"});

export const localAPI = axios.create({baseURL:"http://10.0.2.2:3008"});

export default mongoAPI;
