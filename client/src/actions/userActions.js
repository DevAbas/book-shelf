import axios from 'axios';
import * as actionTypes from './actionTypes';

export const loginUser = ({ email, password }) => {
  const request = axios.post('/api/login', { email, password })
    .then(response => response.data)

    return {
      type: actionTypes.LOGIN_USER,
      payload: request
    }
}

export const getAuth = () => {
  const request = axios.get('/api/auth')
    .then(response => response.data)

  return {
    type: actionTypes.USER_AUTH,
    payload: request    
  }
}