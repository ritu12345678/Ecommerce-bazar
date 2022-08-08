import React from 'react'
import { GET_CLICKED_PRODUCT_ID } from "../ActionType"

const getproductidfromproductcard = (dispatch, id) => {
    console.log(id)
    dispatch({
        type: GET_CLICKED_PRODUCT_ID,
        payload: id
    })
}

export default getproductidfromproductcard