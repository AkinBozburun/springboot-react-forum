import api from './api';

export const updatePost = async (postData) => {
    try {
        const response = await api.put('/posts/update', postData);
        return response;
    } catch (error) {
        throw error;
    }
}

export const addPost = async (postData) => {
    try {
        const response = await api.post('/posts/add', postData)
        return response;
    } catch (error) {
        throw error;
    }
}

export const deletePost = async (postId) => {
    try {
        const response = await api.delete(`posts/delete/${postId}}`)
        return response;
    } catch (error) {
        throw error;
    }
}

export const getAllPost = async () => {
    try {
        const response = await api.get('/posts/getall');
        return response;
    } catch (error) {
        throw error;
    }
};

export const getPostById = async (id) => {
    try {
        const response = await api.get(`/posts/${id}`);
        return response;
    } catch (error) {
        throw error;
    }
}

export const getPostByCategoryId = async (categoryId, skip, limit) => {
    try {
        const response = await api.get(`/posts/category/${categoryId}?skip=${skip}&limit=${limit}`);
        return response;
    } catch (error) {
        throw error;
    }
}