import { Api } from '../../API/Api'
import { endPoints } from '../../API/Endpoint'
import { GET_WISHLIST } from '../ActionType'


const Get_Wishlist_Action = (dispatch, reqpayload) => {
    Api.post(endPoints.GET_WISHLIST, reqpayload).then((res) => {
        console.log(res.data.data)

        dispatch({
            type: GET_WISHLIST,
            payload: res.data.data
        })
    }).catch((err) => console.log(err))
}

export default Get_Wishlist_Action