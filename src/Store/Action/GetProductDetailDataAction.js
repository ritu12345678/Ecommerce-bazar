import { Api } from '../../API/Api'
import { endPoints } from '../../API/Endpoint'
import { GET_PRODUCTDETAIL_DATA } from '../ActionType'
const getProductDetailData = (dispatch, id) => {
    // console.log(id)
    Api.post(endPoints.GET_PRODUCTDETAIL_DATA + '/' + `${id}`).then((res) => {

        // console.log("Searchdata===>", res.data.data)
        dispatch({
            type: GET_PRODUCTDETAIL_DATA,
            payload: res.data.data

        })


    }).catch((err) => console.log(err))
}
export default getProductDetailData