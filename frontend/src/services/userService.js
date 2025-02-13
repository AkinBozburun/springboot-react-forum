import api from './api'

export const updateUser = async (userData) => {
    try {
        const response = await api.put('/users/update', userData);
        return response;
    } catch (error) {
        throw error;
    }
}

export const createUser = async (userData) => {
    try {
        const response = await api.post('/users/create', userData);
        return response;
    } catch (error) {
        throw error;
    }
}

export const getUserById = async (userId) => {
    try {
        const response = await api.get(`/users/${userId}`);
        return response;
    } catch (error) {
        throw error;
    }
}