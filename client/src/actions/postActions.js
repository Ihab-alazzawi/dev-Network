import axios from 'axios';
import {
  ADD_POST,
  GET_ERRORS,
  POST_LOADING,
  GET_POSTS,
  DELETE_POST,
  GET_POST,
  EDIT_POST,
  GET_LIKES,
  CLEAR_ERRORS
} from './types';

import { showModal } from './profileActions';

//Get post
export const getPost = id => async dispatch => {
  dispatch(setPostLoading());
  try {
    const res = await axios.get(`/api/posts/${id}`);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_POST,
      payload: null
    });
  }
};

//Get posts
export const getPosts = () => async dispatch => {
  dispatch(setPostLoading());
  try {
    const res = await axios.get('/api/posts');
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_POSTS,
      payload: null
    });
  }
};

//Add post
export const addPost = postData => async dispatch => {
  dispatch(clearErrors());
  try {
    const res = await axios.post('/api/posts', postData);
    dispatch({
      type: ADD_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

//Edit post
export const editPost = id => async dispatch => {
  dispatch(setPostLoading());
  try {
    const res = await axios.get(`/api/posts/${id}/edit`);
    dispatch({
      type: EDIT_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

//update post
export const updatePost = (id, postData) => async dispatch => {
  dispatch(clearErrors());
  try {
    await axios.put(`/api/posts/${id}`, postData);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

//delete post
export const deletePost = id => async dispatch => {
  dispatch(showModal());
  try {
    await axios.delete(`/api/posts/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

//Get likes
export const getLikes = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({
      type: GET_LIKES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_LIKES,
      payload: null
    });
  }
};

//add like
export const addLike = id => async dispatch => {
  try {
    await axios.post(`/api/posts/like/${id}`);
    dispatch(getLikes());
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

//remove like
export const removeLike = id => async dispatch => {
  try {
    await axios.post(`/api/posts/unlike/${id}`);
    dispatch(getLikes());
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

//Add comment
export const addComment = (postId, commentData) => async dispatch => {
  dispatch(clearErrors());
  try {
    const res = await axios.post(`/api/posts/comment/${postId}`, commentData);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// Delete Comment
export const deleteComment = (postId, commentId) => async dispatch => {
  dispatch(showModal());
  try {
    const res = await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

//Set Loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

//Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
