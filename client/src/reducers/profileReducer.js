import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_PROFILES,
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: null,
  loading: false,
  isOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
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
