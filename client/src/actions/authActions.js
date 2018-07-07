import axios from 'axios';
import { GET_ERRORS } from './types';

export const signUpUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/signup', userData)
    .then(res => history.push('./signin'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
