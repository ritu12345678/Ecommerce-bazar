import { Api } from "../../API/Api";
import { endPoints } from "../../API/Endpoint";
import { DELETE_FROM_CART } from "../ActionType"

export const deleteFromCartAction = (dispatch, reqpayload) => {
    Api.post(endPoints.DELETE_FROM_CART, reqpayload).then((res) => {
        console.log("deleteaction", res)

        dispatch({
            type: DELETE_FROM_CART,
            payload: res


        })

    }).catch((err) => console.log(err))




}