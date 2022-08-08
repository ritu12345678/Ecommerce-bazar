import { POST_SIGNUP_DATA } from '../ActionType'
const initialstate = {

}
export const signUpReducer = (state = initialstate, action) => {

    switch (action.type) {
        case POST_SIGNUP_DATA: return {

            x: action.payload


        }

        default: return state

    }







}