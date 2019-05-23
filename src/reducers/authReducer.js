import { initialAuthState } from '../constants/initialState';

const initialState = {
  authError: null
}

export const authReducer = (state = initialAuthState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      }
    default:
      return state;
  }
};
