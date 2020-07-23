import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://apinodecad.herokuapp.com/'
})


export { Api } ;