import * as actionTypes from '../actions/actionTypes';

export default function(state={},action) {
  switch(action.type) {
    case actionTypes.GET_BOOKS:
      return {...state, list: action.payload}
    default: 
      return state
  }
}