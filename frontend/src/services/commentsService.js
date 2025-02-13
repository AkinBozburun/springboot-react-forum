import api from './api';

export const updateComment = async (commentData) => {
    try {
        const response = await api.put('/comments/update', commentData);
        return response;
    } catch (error) {
        throw error;
    }
}

export const addComment = async (commentData) => {
    try {
        const response = await api.post('/comments/create', commentData);
        return response;
    } catch (error) {
        throw error;
    }
}

export const deleteComment = async (commentData) => {
    try {
        const response = await api.delete(`/comments/delete`, commentData);
        return response;
    } catch (error) {
        throw error;
    }
}

export const getCommentByPostId = async (postId, skip, limit) => {
    try {
        const response = await api.get(`/comments/${postId}?skip=${skip}&limit=${limit}`);
        return response;
    } catch (error) {
        throw error;
    }
}