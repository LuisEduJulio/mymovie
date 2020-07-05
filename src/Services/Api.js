import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

const Key = '2a90aad7ded5b1412ecab1e5c0290766';

const Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTkwYWFkN2RlZDViMTQxMmVjYWIxZTVjMDI5MDc2NiIsInN1YiI6IjVlZmM3MmI4ZDZkNjRkMDAzNGM4ZTFkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UB_d-T_hMY9l7FEXZz_RnO_75LJ1vTta6gHFMF34nW4';

Api.defaults.headers.common['Authorization'] = Token;

export { Api, Token, Key } ;