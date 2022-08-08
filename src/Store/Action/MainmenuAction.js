import { Api } from '../../API/Api'
import { endPoints } from '../../API/Endpoint'
import { MAINMENU } from '../ActionType'



const mainmenuAction = (dispatch) => {
    Api.get(endPoints.GET_MAINMENUBAR_CATEGORY).then((res) => {
        console.log(res.data.data)
        dispatch({
            type: MAINMENU,
            payload: res.data.data


        })


    }).catch((err) => console.log(err))
}

export default mainmenuAction