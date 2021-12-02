import { createStore } from 'redux';

const initialState = {
  isLogin: false,

}

function mainReducer(state = initialState, action){
  switch (action.type){
    case 'SET_LOGIN':
      return {...state, isLogin: action.pay};
    default:
      return state;
  }
}

const store = createStore(

);

export default store