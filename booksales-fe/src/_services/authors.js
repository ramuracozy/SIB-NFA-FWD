import { API } from "../_api"

const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
};

export const getAuthors = async () => {
    const { data } = await API.get("/authors")
    return data.data
}

export const createAuthor = async (data) => {
    try {
        const response = await API.post("/authors", data, config)
        return response.data
    } catch (error) {
        console.log("API Error Detail:", error.response ? error.response.data : error.message);
        throw error
    }
}

export const showAuthor = async (id) => {
    try {
        const { data } = await API.get(`/authors/${id}`, config);
        return data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateAuthor = async (id, data) => {
    try {
        const response = await API.post(`/authors/${id}`, { ...data, _method: "PUT" }, config);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteAuthor = async (id) => {
    try {
        await API.delete(`/authors/${id}`, config);
    } catch (error) {
        console.log(error);
        throw error;
    }
};