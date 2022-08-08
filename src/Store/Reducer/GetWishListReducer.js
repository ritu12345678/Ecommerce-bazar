import { GET_WISHLIST } from '../ActionType'


const initialstate = {
}
export const getWishListReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_WISHLIST: return {

            Product_Add_to_Wishlist: action.payload,
            Count_Product_Add_To_Wishlist: action.payload?.length


        }



        default: return state;

    }



}