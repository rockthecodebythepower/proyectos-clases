import axios from "axios";

const APIHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': {
        toString() {
            return `Bearer ${localStorage.getItem('token')}`
        }
    }
}

export const API = axios.create({
    baseURL: "https://master-10-back.vercel.app/api/v1",
    headers: APIHeaders
});

/* https://master-10-back.vercel.app/api/v1 */