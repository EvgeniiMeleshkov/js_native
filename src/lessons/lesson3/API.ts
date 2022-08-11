import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '&apikey=a12ff0fe';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`/?t=${title}${key}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`/?t=${title}&type=${type}${key}`)
    }
};


export default API;
