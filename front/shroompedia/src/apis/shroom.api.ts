import axios from "axios";

const apiUrl = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const getShrooms = async () => {
    const token = localStorage.getItem("token");
    
    const response: any = await apiUrl.get(
        "/shrooms",
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        }
    )
    console.log(response.data)
    return response.data
}