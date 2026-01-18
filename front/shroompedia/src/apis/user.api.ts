import axios from "axios";
import type { User } from "../types/common.type";

const apiUrl = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const postUser = async (userPayload: User) => {
    const response = await apiUrl.post("/users/create", userPayload);
    console.log(response.data);
    return response.data;
}

export const loginUser = async (userPayload: User) => {
    const response = await apiUrl.post("/auth/login", userPayload);
    console.log(response.data);
    return response.data;
}

export const getUser = async (userId: number) => {
    const response = await apiUrl.get(`/users/${userId}`);
    console.log(response.data)
    return response.data
}