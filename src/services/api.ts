import axios from 'axios';

export const api = axios.create({

    baseURL: 'https://miziara-money.vercel.app/' //http://localhost:3000

});