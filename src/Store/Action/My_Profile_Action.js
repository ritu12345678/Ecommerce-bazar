import { Api } from "../../API/Api"
import { endPoints } from "../../API/Endpoint"
import { GET_MYPROFILE_RES } from '../ActionType'
const My_Profile_Action = (dispatch, reqpayload) => {
    Api.post(endPoints.GET_USER_ID_FROM_MYPROFILE).then((res) => {
        // console.log(res.data.userdata._id)
        dispatch({
            type: GET_MYPROFILE_RES,
            payload: res?.data.userdata._id,
            myprofileuserdetail: res.data?.userdata


        })
    })
}

export default My_Profile_Action