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
import setAuthToken from '../../utils/setAuthToken';
import Notification from '../../utils/Notification'

// Action creator
export const signIn = (data) => async(dispatch) => {
  try {
    const  res  = await api.signIn(data);
    dispatch({ type: SIGN_IN_SUCCESS, payload: res })
    Notification("Login success","success")
  } catch (error) {
    console.log(error);
  }
} 

export const registerAction = (data) => async(dispatch) => {
  try {
    const  res  = await api.registration(data);
    dispatch({ type: REGISTRATION_SUCCESS, payload: res })
  } catch (error) {
    console.log(error);
  }
} 

export const registrationVerify = (token) => async(dispatch) => {
  try {
    const  res  = await api.registrationVerify(token);
    dispatch({ type: REGISTRATION_VERIFY, payload: res })
  } catch (error) {
    console.log(error);
  }
} 


export const loadUser = () => async(dispatch) => {
  if(localStorage.token){
    setAuthToken(localStorage.token);
  }
  try {
    const  res  = await api.loadUser();
    dispatch({ type: LOAD_USER, payload: res })
  } catch (error) {
    console.log(error);
  }
} 

export const logout = () => async(dispatch) => {
  try {
    dispatch({ type: LOGOUT })
    Notification("Logout success","success")
  } catch (error) {
    console.log(error);
  }
} 