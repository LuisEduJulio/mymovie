import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

const token = '2a90aad7ded5b1412ecab1e5c0290766';

export { Api, token } ;