import axios from "axios";

// Création de l'url d'api
const apiUrl = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

// Fonction de d'appel à l'API pour récupérer tous les shrooms
export const getShrooms = async () => {
    // Récupération du token nécessaire
    const token = localStorage.getItem("token");
    
    // Appel en passant le token
    const response: any = await apiUrl.get(
        "/shrooms",
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        }
    )
    
    return response.data
}