import axios from 'axios';
import https from 'https';

const BASE_URL =
  'https://ec2-52-78-60-21.ap-northeast-2.compute.amazonaws.com:8080';
const agent = new https.Agent({
  rejectUnauthorized: false
});

export const baseAPI = axios.create({
  baseURL: BASE_URL,
  httpsAgent: agent
});
