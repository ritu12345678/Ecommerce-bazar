import { DELETE_FROM_CART } from "../ActionType"
const initialstate = {
}
export const deletefromCartReducer = (state = initialstate, action) => {
    switch (action.type) {
        case DELETE_FROM_CART: return {

            itemdeletefromcart: action.payload


        }



        default: return state;

    }



}