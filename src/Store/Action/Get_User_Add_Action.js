import React from 'react'
import { Api } from '../../API/Api'
import { endPoints } from '../../API/Endpoint'
import { GET_USER_ADDRESS } from '../ActionType'

const get_User_Add_Action = (dispatch) => {
    Api.post(endPoints.GET_USER_ADDRESS).then((res) => {
        dispatch({
            type: GET_USER_ADDRESS,
            payload: res.data.data
        })
    }

    ).catch((err) => console.log(err))



}

export default get_User_Add_Action