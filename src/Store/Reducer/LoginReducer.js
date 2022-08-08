import { POST_LOGIN_CREDENTIAL, LOGOUT } from '../ActionType'
const initialstate = {

}
export const loginReducer = (state = initialstate, action) => {

        switch (action.type) {
                case POST_LOGIN_CREDENTIAL: return {

                        loggedIn: true


                }
                case LOGOUT: return {
                        loggedIn: false

                }

                default: return state
        }
}