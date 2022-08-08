import { GET_SELLERPROFILE_DATA } from '../ActionType'
const initialstate = {
    SellerProfileData: []
}

export const sellerProfileReducer = (state = initialstate, action) => {

    switch (action.type) {
        case GET_SELLERPROFILE_DATA: return {
            ...state,
            SellerProfileData: [action.payload]

        }




        default: return state;

    }
}