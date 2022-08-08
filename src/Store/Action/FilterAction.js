import { Api } from '../../API/Api'
import { endPoints } from '../../API/Endpoint'
import { GET_ALLFILTER_DATA } from '../ActionType'

const FilterAction = (dispatch, reqpayload) => {
    // console.log(reqpayload)
    Api.post(endPoints.GET_ALLFILTER_DATA, reqpayload).then((res) => {
        console.log("filteraction", res)
        dispatch({
            type: GET_ALLFILTER_DATA,
            payload: res.data


        })

    }).catch((err) => { console.log(err) })
}
export default FilterAction