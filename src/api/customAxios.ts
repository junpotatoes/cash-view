import axios from 'axios';
import https from 'https';

const BASE_URL = 'https://acc.my-account.p-e.kr';
const agent = new https.Agent({
  rejectUnauthorized: false
});

export const baseAPI = axios.create({
  baseURL: BASE_URL,
  httpsAgent: agent
});
