import axios from "axios";

export const APIHeaders = {
    "Accept": "application/json",
    "Content_Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*"
};

export const API = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: APIHeaders
})