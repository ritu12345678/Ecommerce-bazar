
import axios from 'axios'
const token = localStorage.getItem('logintoken')
export const Api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + process.env.REACT_APP_PREFIX + process.env.REACT_APP_VERSION,
    headers: { Authorization: 'Bearer ' + token }
})
// headers is used for authorisation 
Api.interceptors.request.use(function (config) {
    // Do something before request is sent


    config = { ...config, Auth: "Ritu" };
    return config;

}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
Api.interceptors.response.use(function (response) {

    // Do something with response data

    // response = { ...response, test2: "5478" };
    // console.log("Respone=====>", response)
    return response;
}, function (error) {

    // Do something with response error
    alert("Network error")
    return Promise.reject(error);
});

