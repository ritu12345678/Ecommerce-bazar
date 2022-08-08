import { ADD_LENGTH } from '../ActionType'

export const AddToCartarrlengthAction = (arrlength, dispatch) => {
    console.log("arraylength", arrlength)
    dispatch({
        type: ADD_LENGTH,
        payload: arrlength
    })
}