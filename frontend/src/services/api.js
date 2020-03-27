import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ec2-18-228-46-120.sa-east-1.compute.amazonaws.com:3333',
})

export default api;