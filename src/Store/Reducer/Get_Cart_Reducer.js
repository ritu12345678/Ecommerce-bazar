import { ADD_ITEM_TO_CART_LOCAL, GET_ITEM_ADD_TO_CART, ADD_LENGTH } from '../ActionType'
const initialstate = {

}
export const getCartReducer = (state = initialstate, action) => {

    switch (action.type) {
        case GET_ITEM_ADD_TO_CART: return {

            cartItem: action.payload,
            cartItemcount: action.payload.length


        }
        case ADD_ITEM_TO_CART_LOCAL: return {
            cartLocal: action.payload
        }

        case ADD_LENGTH: return {
            cartitemcount: action.payload
        }



        default: return state;

    }



}