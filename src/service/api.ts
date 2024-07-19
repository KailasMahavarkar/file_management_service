import axios from "axios";
import env from "@/env";

export const fileAPI = axios.create({
    baseURL: env.MODE === 'dev' ? env.FILE_SERVICE_API_DEV: env.FILE_SERVICE_API_PROD
});

export const api = axios.create({
    baseURL: env.API
})
