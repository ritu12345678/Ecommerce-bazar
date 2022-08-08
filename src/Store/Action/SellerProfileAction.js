import { Api } from '../../API/Api'
import { endPoints } from '../../API/Endpoint'
import { GET_SELLERPROFILE_DATA } from '../ActionType'
const sellerProfileAction = (dispatch, reqpayload) => {
    // console.log(id)
    Api.post(endPoints.SELLER_PROFILE, reqpayload).then((res) => {

        // console.log("Searchdata===>", res.data)
        dispatch({
            type: GET_SELLERPROFILE_DATA,
            payload: res.data

        })


    }).catch((err) => console.log(err))
}
export default sellerProfileAction