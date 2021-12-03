import { createStore } from 'redux';

const initialState = {
  isLogin: false,
  userData: {},
}

function authReducer(state = initialState, action){
  switch (action.type){
    case 'SET_USER':
      return {...state, userData: action.payload};
    case 'SET_LOGIN':
      return {...state, isLogin: action.payload};
    default:
      return state;
  }
}

const store = createStore(authReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store