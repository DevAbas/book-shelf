import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getBooks = (
  limit = 10,
  start = 0,
  order = 'asc',
  list = ''
) => {
  const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
    .then(response => {
      if(list) {
        return [...list, ...response.data]
      } else {
        return response.data
      }
    });
  return {
    type: actionTypes.GET_BOOKS,
    payload: request
  }
}