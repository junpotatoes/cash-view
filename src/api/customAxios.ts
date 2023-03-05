import axios from 'axios';

const BASE_URL =
  'http://ec2-52-78-60-21.ap-northeast-2.compute.amazonaws.com:8080';

export const baseAPI = axios.create({
  baseURL: BASE_URL
});
