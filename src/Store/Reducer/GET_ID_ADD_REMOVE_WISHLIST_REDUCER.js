import { GET_ID_ADDREMOVE_WISHLIST } from "../ActionType"

const initialstate = {}
export const getidAddRemoveWishlistReducer = (state = initialstate, action) => {

    switch (action.type) {
        case GET_ID_ADDREMOVE_WISHLIST: return {
            product_id: action.payload

        }



        default: return state

    }

}