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
    case actionTypes.ADD_BOOK:
      return { ...state, newBook: action.payload }
    case actionTypes.CLEAR_NEW_BOOK:
      return { ...state, newBook: action.payload }
    case actionTypes.GET_BOOK:
      return { ...state, selectedBook: action.payload }
    case actionTypes.UPDATE_BOOK:
      return { 
        ...state, 
        selectedBook: action.payload.doc,
        updateBook: action.payload.success 
      }
    default: 
      return state
  }
}