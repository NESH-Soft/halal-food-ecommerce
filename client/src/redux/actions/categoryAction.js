
import * as api from '../../api';
import {
  GET_CATEGORY,
} from '../type'
// Action creator
export const getCategory = () => async(dispatch) => {

  try {
    const  category  = await api.getCategory();
    dispatch({ type: GET_CATEGORY, payload: category })
  } catch (error) {
    console.log(error);
  }
} 






