import {
 GET_CATEGORY,
} from '../type'
const initialState = {
  category: [],

};
const categoryReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_CATEGORY:
      return {
        category: action.payload
      }
  
    default:
      return state;
  }
}

export default categoryReducer;
