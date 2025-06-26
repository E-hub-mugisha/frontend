import axios from 'axios';

const publicApi = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: false, // No cookies, for public routes
});

export default publicApi;
