import { Api } from '../../API/Api'
import { endPoints } from '../../API/Endpoint'
import { GET_ITEM_ADD_TO_CART } from '../ActionType'

const getCartAction = (dispatch, reqpayload) => {
    // console.log(reqpayload)
    Api.post(endPoints.GET_CART_DATA, reqpayload).then((res) => {
        console.log(res.data.data)

        dispatch({
            type: GET_ITEM_ADD_TO_CART,
            payload: res.data.data


        })

    }).catch((err) => { console.log(err) })
}
export default getCartAction