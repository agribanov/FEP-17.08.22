import axios from 'axios';

const API_URL = 'https://rest-mock-server.herokuapp.com/';

export default axios.create({
    baseURL: API_URL,
});
