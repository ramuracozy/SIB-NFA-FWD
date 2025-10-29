import { API } from "../_api";

export const getTransactions = async () => {
    const { data } = await API.get("/transactions", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    });
    return data.data;
}

export const createTransaction = async (data) => {
    try {
        // Calculate total price before sending to server
        if (data.book && data.quantity) {
            data.total_price = data.book.price * data.quantity;
        }

        const response = await API.post("/transactions", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });


        if (response.data.success && data.book) {
            // Update book stock after successful transaction creation
        }

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}