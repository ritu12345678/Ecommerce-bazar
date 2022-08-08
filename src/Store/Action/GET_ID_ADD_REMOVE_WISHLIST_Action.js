import { GET_ID_ADDREMOVE_WISHLIST } from "../ActionType"

const getproductIdAction = (dispatch, Id) => {
    console.log(Id)
    dispatch({
        type: GET_ID_ADDREMOVE_WISHLIST,
        payload: Id
    })



}
export default getproductIdAction