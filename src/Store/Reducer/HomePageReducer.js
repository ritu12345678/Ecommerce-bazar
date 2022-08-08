import { GETHOMEPAGE } from "../ActionType"
const initialstate = {
  Homepagedata: []
}

export const homePageReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GETHOMEPAGE: return {
      Homepagedata: action.payload

    }



    default: return state;

  }
}

