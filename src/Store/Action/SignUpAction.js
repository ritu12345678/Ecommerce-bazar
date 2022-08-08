import { Api } from '../../API/Api'
import { endPoints } from '../../API/Endpoint'
import { POST_SIGNUP_DATA } from '../ActionType'
const signUpAction = (dispatch, reqpayload) => {
    console.log(reqpayload)
    Api.post(endPoints.SIGNUP_DATA, reqpayload).then((res) => {
        localStorage.setItem('token', res.data.token)
        console.log("Searchdata===>", res)
        dispatch({
            type: POST_SIGNUP_DATA,
            payload: res.data.token

        })


    }).catch((err) => console.log(err.response))
}
export default signUpAction