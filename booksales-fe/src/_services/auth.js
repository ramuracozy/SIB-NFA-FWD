import { useJwt } from "react-jwt";
import { API } from "../_api";

export const register = async ({ name, email, password }) => {
  try {
    const { data } = await API.post('/register', {
      name,
      email,
      password,
      role: 'user'
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const login = async ({ email, password }) => {
  try {
    const { data } = await API.post('/login', { email, password })
    return data
  } catch (error) {
    console.log(error);
    throw error
  }
}

export const logout = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    if (token) {
      await API.post('/logout', { token }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    // Hapus semua data autentikasi dari localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    return { success: true };
  } catch (error) {
    console.log(error);
    // Tetap hapus data lokal meskipun API gagal
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    throw error;
  }
}

export const useDecodeToken = (token) => {
  const { decodedToken, isExpired } = useJwt(token);

  try {
    if (isExpired) {
      return {
        success: false,
        message: "Token expired",
        data: null
      }
    }

    return {
      success: true,
      message: "Token valid",
      data: decodedToken
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null
    }
  }
}