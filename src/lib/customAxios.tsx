import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
    proxy: {
        host: 'http://localhost',
        port: 3000
      }
})