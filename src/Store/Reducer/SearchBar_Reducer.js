import { GET_SEARCHBAR_DATA, GET_FILTERDATA } from '../ActionType'
const initialstate = {
    SearchBarData: []


}

export const searchBarReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_SEARCHBAR_DATA: {
            return {
            ...state,
            SearchBarData: action.payload

        }}
        case GET_FILTERDATA: {
            return {
                ...state,

                FilterData: action.payload


            }
        }




        default: return state;

    }
}
