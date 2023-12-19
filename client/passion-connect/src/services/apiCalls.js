import axios from "axios";

// users
export const getAllUsers = () => {
  const url = `http://localhost:5000/users/`;
  return axios.get(url);
};

export const getSingleUser = (id) => {
  const url = `http://localhost:5000/users/${id}`;
  return axios.get(url);
};

export const getSingleUserLean = (id) => {
  const url = `http://localhost:5000/users/${id}?action=lean`;
  return axios.get(url);
};

export const subscribeToUser = (subscribeeId) => {
  const url = `http://localhost:5000/users/${subscribeeId}/subscribe`;
  return axios.post(url, subscribeeId);
};

// auth
export const postRegisterForm = (formData) => {
  const url = `http://localhost:5000/auth/register`;
  return axios.post(url, formData);
};

export const postLoginForm = (formData) => {
  const url = `http://localhost:5000/auth/login`;
  return axios.post(url, formData);
};

export const postEditUserForm = (formData, userId) => {
  const url = `http://localhost:5000/auth/${userId}/edit`;
  return axios.post(url, formData);
};

// articles
export const getAllArticles = () => {
  const url = `http://localhost:5000/articles/`;
  return axios.get(url);
};

export const getSingleArticle = (id) => {
  const url = `http://localhost:5000/articles/${id}`;
  return axios.get(url);
};

export const getSingleArticleLean = (id) => {
  const url = `http://localhost:5000/articles/${id}?action=lean`;
  return axios.get(url);
};

export const createArticle = (formData) => {
  const url = `http://localhost:5000/articles/create`;
  return axios.post(url, formData);
};

export const addComment = (formData, id) => {
  const url = `http://localhost:5000/articles/${id}/comment/`;
  return axios.post(url, formData);
};

export const likeArticle = (id) => {
  const url = `http://localhost:5000/articles/${id}/like/`;
  return axios.get(url);
};

export const editArticle = (formData, id) => {
  const url = `http://localhost:5000/articles/${id}/edit`;
  return axios.post(url, formData);
};

export const deleteArticle = (articleId) => {
  const url = `http://localhost:5000/articles/${articleId}/delete`;
  return axios.get(url);
};

// topics
export const getSingleTopic = (id) => {
  const url = `http://localhost:5000/topics/${id}`;
  return axios.get(url);
};

export const getAllTopics = () => {
  const url = `http://localhost:5000/topics/`;
  return axios.get(url);
};

// comments
export const getCommentById = (id) => {
  const url = `http://localhost:5000/comments/${id}`;
  return axios.get(url);
};
