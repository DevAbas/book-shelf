import * as actionTypes from '../actions/actionTypes';

export default function(state={},action) {
  switch(action.type) {
    case actionTypes.LOGIN_USER: 
      return { ...state, login: action.payload }
    default: 
      return state
  }
}