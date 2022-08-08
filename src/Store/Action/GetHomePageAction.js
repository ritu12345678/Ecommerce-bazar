import { Api } from '../../API/Api'
import { endPoints } from '../../API/Endpoint'
import { GETHOMEPAGE } from '../ActionType'

export const getHomePageAction = (dispatch) => {
    Api.get(endPoints.GET_HOMEPAGE).then((res) => {
        // console.log(res.data.data)
        let payload = res.data.data.map((item) => {
            // console.log("item===>", item)
            return ({
                block_name: item.block_name,
                id: item._id,
                name: item.translation_data[0].name
            })
        })
        // console.log("res", res.data.data)
        dispatch({ type: GETHOMEPAGE, payload: payload })
    }).catch((err) => { console.log(err) })
}
