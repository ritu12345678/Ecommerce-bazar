import { GET_MYPROFILE_RES } from '../ActionType'
const initialstate = []
export const myprofilereducer = (state = initialstate, action) => {

    switch (action.type) {
        case GET_MYPROFILE_RES: {
            // console.log(action.payload)
            return {

                userIdMyProfile: action.payload,
                userDetail: action.myprofileuserdetail

            }
        }
        default: return state


    }



}
