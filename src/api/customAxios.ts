import axios from 'axios';

const BASE_URL = 'https://acc.my-account.p-e.kr:8080';

export const baseAPI = axios.create({
  baseURL: BASE_URL
});
