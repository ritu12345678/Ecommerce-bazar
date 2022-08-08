import { Api } from "../../API/Api"
import { endPoints } from "../../API/Endpoint"
import { ADD_TO_WISHLIST } from '../ActionType'
import { GET_WISHLIST } from '../ActionType'

const Add_To_Wishlist_Action = (dispatch, reqpayload) => {
    // console.clear()
    // console.log(reqpayload)
    Api.post(endPoints.ADD_TO_WISHLIST, reqpayload).then((res) => {
        Api.post(endPoints.GET_WISHLIST, reqpayload).then((res) => {
            console.log(res.data.data)

            dispatch({
                type: GET_WISHLIST,
                payload: res.data.data
            })
        }).catch((err) => console.log(err))




    }).catch((err) => console.log(err))


}

export default Add_To_Wishlist_Action

