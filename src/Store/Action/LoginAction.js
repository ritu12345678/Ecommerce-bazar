import { useNavigate } from 'react-router-dom'
import { Api } from '../../API/Api'
import { endPoints } from '../../API/Endpoint'
import { POST_LOGIN_CREDENTIAL, LOGOUT } from '../ActionType'


export const loginAction = (dispatch, reqpayload, navigate) => {

    console.log(reqpayload)
    Api.post(endPoints.LOGIN_CREDENTIAL, reqpayload).then((res) => {
        const data = localStorage.setItem("logintoken", res.data.token)
        console.log("Searchdata===>", res.data.token)
        dispatch({
            type: POST_LOGIN_CREDENTIAL,


        })
        navigate("/")
        window.location.reload(false)



    }).catch((err) => console.log(err.response))
}
export const logoutAction = (dispatch) => {
    localStorage.removeItem("logintoken")

    dispatch({
        type: LOGOUT


    })

    window.location.reload()
}







