import React, { useEffect } from 'react'
import Get_Wishlist_Action from '../Store/Action/Get_Wishlist_Action'
import { useDispatch, useSelector } from 'react-redux'

const Wishlist = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        Get_Wishlist_Action(dispatch)
    }, [])

    let wishlistdata = useSelector(state => state.GetWishListReducer?.Product_Add_to_Wishlist)
    console.log(wishlistdata)

    return (<>
        <div className="wishlist-section">
            <h2>Wishlist</h2>
            {wishlistdata ? wishlistdata.map((curr, index) => {
                return <div className="plp-product-screen" key={index}>
                    <div className="costume-box">
                        <div className="costume-block">
                            <a target="_blank" className="product-pack" href="/product/Toys/6241c8aad670f974eedb549c/?cat=toys">
                                <div className="costumes">
                                    <img src={curr.productData?.default_image} alt="costume-img" />
                                </div>
                            </a>
                            <div className="wishlist-btns">
                                <div className="add-cart-wishlist">Add To Cart</div>
                                <div className="remove-wishlist">Remove</div>
                            </div>
                        </div>
                        <a target="_blank" href="/product/Toys/6241c8aad670f974eedb549c/?cat=toys"><div className="costume-info"><strong>{curr.productData?.Title}</strong></div></a>
                    </div>
                    <div>
                    </div>

                </div>
            }) : null}
        </div>

    </>)
}

export default Wishlist