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

export const getUserPosts = (userId) => {
  const request = axios.get(`/api/user_posts?id=${userId}`)
    .then(response => response.data)

  return {
    type: actionTypes.GET_USER_POSTS,
    payload: request
  }
}