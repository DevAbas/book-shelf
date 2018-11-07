import * as actionTypes from '../actions/actionTypes';

export default function(state={},action) {
  switch(action.type) {
    case actionTypes.GET_BOOKS:
      return {...state, list: action.payload}
    case actionTypes.GET_BOOK_W_REVIEWER:
      return { 
        ...state, 
        selectedBook: action.payload.book,
        reviewer: action.payload.reviewer 
      }
    case actionTypes.CLEAR_BOOK_W_REVIEWER:
      return {
        ...state,
        selectedBook: action.payload.selectedBook,
        reviewer: action.payload.reviewer
      }
    default: 
      return state
  }
}