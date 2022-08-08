import {GET_CLICKED_PRODUCT_ID} from "../ActionType"
const initialstate ={}


const getclickedproductidReducer = (state=initialstate,action) => {
  switch (action.type) {
      case GET_CLICKED_PRODUCT_ID:return{
          clickedid : action.payload
      }
          
       
  
      default:
         return state;
  }
}

export default getclickedproductidReducer