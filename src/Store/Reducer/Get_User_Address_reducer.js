import { GET_USER_ADDRESS } from "../ActionType";
const initialstate ={

}

const get_User_Address_reducer = (state=initialstate,action) => {
  switch (action.type) {
      case GET_USER_ADDRESS:return{

        useraddressdetail : action.payload
      }
          
 
  
      default:
         return state;
  }
}

export default get_User_Address_reducer