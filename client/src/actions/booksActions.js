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

export const getBookWithReviewer = (id) => {
  const request = axios.get(`/api/book?id=${id}`)
  
  return (dispatch) => {
    request.then(({data}) => {
      let book = data;

      axios.get(`/api/getReviewer?id=${book.ownerId}`)
        .then(({data}) => {
          let response = {
            book, 
            reviewer: data
          }

          dispatch({
            type: actionTypes.GET_BOOK_W_REVIEWER,
            payload: response
          })
        })
    })
  }
}

export const clearBookReviewer = () => {
  return {
    type: actionTypes.CLEAR_BOOK_W_REVIEWER,
    payload: {
      selectedBook: {},
      reviewer: {}
    }
  }
}