import {
  SIGN_IN_SUCCESS,
  REGISTRATION_SUCCESS,
  LOAD_USER,
  LOGOUT,
  SIGN_IN_FAIL,
  REGISTRATION_FAIL,
  REGISTRATION_VERIFY,
} from '../type'
import * as api from '../../api';

// Action creator
export const signIn = (data) => async(dispatch) => {
  console.log(data)
  try {
    const  token  = await api.signIn(data);
    dispatch({ type: SIGN_IN_SUCCESS, payload: token })
  } catch (error) {
    console.log(error);
  }
} 

export const registration = (data) => async(dispatch) => {
  try {
    const  res  = await api.registration(data);
    dispatch({ type: REGISTRATION_SUCCESS, payload: res })
  } catch (error) {
    console.log(error);
  }
} 

// export const registrationVerify = (token) => async(dispatch) => {
//   try {
//     const  res  = await api.registrationVerify(token);
//     dispatch({ type: REGISTRATION_VERIFY, payload: res })
//   } catch (error) {
//     console.log(error);
//   }
// } 
export const loadUser = () => async(dispatch) => {
  try {
    const  user  = await api.loadUser();
    dispatch({ type: LOAD_USER, payload: user })
  } catch (error) {
    console.log(error);
  }
} 

export const logout = () => async(dispatch) => {
  try {
    dispatch({ type: LOGOUT })
  } catch (error) {
    console.log(error);
  }
} 