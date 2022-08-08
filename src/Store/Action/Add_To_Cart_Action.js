import { Api } from "../../API/Api";
import { endPoints } from "../../API/Endpoint";
import { ADD_ITEM_TO_CART, ADD_ITEM_TO_CART_LOCAL, ADD_LENGTH } from '../ActionType'

export const AddtocartAction = (dispatch, reqpayload) => {
    Api.post(endPoints.ADD_TO_CART, reqpayload).then((res) => {
        console.log(res)
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: res

        })


    }).catch((err) => { console.log(err) })


}

export const AddToCartLocal = (id, dispatch) => {
    dispatch({
        type: ADD_ITEM_TO_CART_LOCAL,
        payload: id
    })
}
