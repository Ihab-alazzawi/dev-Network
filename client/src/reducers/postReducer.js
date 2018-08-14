import {
  ADD_POST,
  POST_LOADING,
  GET_POSTS,
  DELETE_POST,
  GET_POST,
  EDIT_POST,
  GET_LIKES,
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  loading: false,
  isOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case EDIT_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    case GET_LIKES:
      return {
        ...state,
        posts: action.payload
      };
    case SHOW_MODAL:
      return {
        ...state,
        isOpen: true
      };
    case HIDE_MODAL:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
}
