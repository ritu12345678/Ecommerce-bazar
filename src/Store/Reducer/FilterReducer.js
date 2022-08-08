import { GET_ALLFILTER_DATA } from "../ActionType"
const initialstate = []


export const filterReducer = (state = initialstate, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case GET_ALLFILTER_DATA: return {

            SidebarFilterdata: action.payload

        }



        default: return state;

    }
}