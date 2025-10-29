import { API } from "../_api"

const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
};

export const getGenres = async () => {
    const { data } = await API.get("/genres")
    return data.data
}

export const createGenre = async (data) => {
    try {
        const response = await API.post("/genres", data, config)
        return response.data
    } catch (error) {
        console.log("API Error Detail:", error.response ? error.response.data : error.message);
        throw error
    }
}

export const showGenre = async (id) => {
    try {
        const { data } = await API.get(`/genres/${id}`, config);
        return data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateGenre = async (id, data) => {
    try {
        const response = await API.post(`/genres/${id}`, { ...data, _method: "PUT" }, config);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteGenre = async (id) => {
    try {
        await API.delete(`/genres/${id}`, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
};