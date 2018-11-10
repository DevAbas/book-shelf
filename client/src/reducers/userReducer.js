import * as actionTypes from '../actions/actionTypes';

export default function(state={},action) {
  switch(action.type) {
    case actionTypes.LOGIN_USER: 
      return { ...state, login: action.payload }
    case actionTypes.USER_AUTH: 
      return { ...state, login: action.payload }
    case actionTypes.GET_USER_POSTS:
      return { ...state, userPosts: action.payload }
    default: 
      return state
  }
}