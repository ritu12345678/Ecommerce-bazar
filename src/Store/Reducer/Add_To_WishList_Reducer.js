import { ADD_TO_WISHLIST } from '../ActionType'


const initialstate = {
}
export const addWishListReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST: return {

            productId: action.payload


        }



        default: return state;

    }
}
