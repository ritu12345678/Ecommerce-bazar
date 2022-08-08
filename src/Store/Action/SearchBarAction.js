import { Api } from '../../API/Api'
import { endPoints } from '../../API/Endpoint'
import { GET_SEARCHBAR_DATA, GET_FILTERDATA } from '../ActionType'

const SearchBarAction = (dispatch, reqpayload) => {
    // console.clear()
    // console.log(reqpayload)
    Api.post(endPoints.GET_SEARCHBAR_DATA, reqpayload).then((res) => {
        // console.log(res)
        dispatch({
            type: GET_SEARCHBAR_DATA,
            payload: res.data.data

        })

        dispatch({
            type: GET_FILTERDATA,
            payload: res.data.FilterData,


        })


    }).catch((err) => console.log(err))
}
export default SearchBarAction