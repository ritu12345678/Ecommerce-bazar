import { MAINMENU } from "../ActionType";
const initialstate = {

}
export const mainMenuReducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAINMENU: return {
            payload: action.payload

        }


        default: return state

    }





}