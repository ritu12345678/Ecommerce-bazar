import { GET_PRODUCTDETAIL_DATA } from '../ActionType'


// import { GET_SEARCHBAR_DATA } from '../ActionType'
const initialstate = {
    ProductPageData: []
}

export const productPageReducer = (state = initialstate, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case GET_PRODUCTDETAIL_DATA: return {
            ...state,
            ProductPageData: action.payload


        }





        default: return state;

    }
}