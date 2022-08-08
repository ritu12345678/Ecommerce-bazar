
import { GETBRANDSLIDERPRODUCT } from '../ActionType'

const initialstate = {
    sliderproduct: []
}

const brandSliderReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GETBRANDSLIDERPRODUCT: return {
            ...state,
            sliderproduct: action.payload

        }



        default:
            return state;
    }
}

export default brandSliderReducer