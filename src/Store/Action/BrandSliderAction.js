

import { GETBRANDSLIDERPRODUCT } from '../ActionType'
import { endPoints } from '../../API/Endpoint'
import { Api } from '../../API/Api'


export const brandslideraction = (dispatch) => {
    Api.get(endPoints.GET_ALL_BRANDS).then((res) => {

        // console.log(res.data.data)
        dispatch({
            type: GETBRANDSLIDERPRODUCT,
            payload: res.data.data
        })
    }).catch((err) => { console.log(err) })
}