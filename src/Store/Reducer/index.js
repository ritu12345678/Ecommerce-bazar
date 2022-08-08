
import { combineReducers } from 'redux'
import brandSliderReducer from '../Reducer/BrandSliderReducer'
import { homePageReducer } from './HomePageReducer'
import { searchBarReducer } from './SearchBar_Reducer'
import { productPageReducer } from './ProductPageReducer'
import { sellerProfileReducer } from './SellerProfileReducer'
import { signUpReducer } from './SignUpReducer'
import { loginReducer } from './LoginReducer'
import { mainMenuReducer } from './MainmenuReducer'
import { filterReducer } from './FilterReducer'
import { myprofilereducer } from './My_Profile_Reducer'
import { getCartReducer } from './Get_Cart_Reducer'
import { deletefromCartReducer } from './Delete_From_Cart_Reducer'
import { getWishListReducer } from './GetWishListReducer'
import { addWishListReducer } from './Add_To_WishList_Reducer'
import { getidAddRemoveWishlistReducer } from './GET_ID_ADD_REMOVE_WISHLIST_REDUCER'
import get_User_Address_reducer from './Get_User_Address_reducer'
import getclickedproductidReducer from './getclickedproductidReducer'

const Rootreducer = combineReducers({
    BrandSliderReducer: brandSliderReducer,
    HomePageReducer: homePageReducer,
    SearchBarReducer: searchBarReducer,
    ProductPageReducer: productPageReducer,
    SellerProfileReducer: sellerProfileReducer,
    SignUpReducer: signUpReducer,
    LoginReducer: loginReducer,
    MainMenuReducer: mainMenuReducer,
    FilterReducer: filterReducer,
    MyProfileReducer: myprofilereducer,
    GetCartReducer: getCartReducer,
    DeletefromCartReducer: deletefromCartReducer,
    GetWishListReducer: getWishListReducer,
    AddWishListReducer: addWishListReducer,
    GetidAddRemoveWishlistReducer: getidAddRemoveWishlistReducer,
    GetUserAddressreducer: get_User_Address_reducer,
    GetclickedproductidReducer: getclickedproductidReducer
})
export default Rootreducer;