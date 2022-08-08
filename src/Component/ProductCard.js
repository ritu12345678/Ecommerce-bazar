import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Star from '../Assets/Image/Star.png'
import { useSelector, useDispatch } from 'react-redux'
import Login from './Login'
import Remove_To_Wishlist_Action from '../Store/Action/Remove_To_Wishlist_Action'

import Add_To_Wishlist_Action from '../Store/Action/Add_To_Wishlist_Action'
import getproductidfromproductcard from '../Store/Action/getproductidfromproductcard'



const ProductCard = ({ data }) => {
    // console.log(data)

    const [loggedinstatus, setLoggedinstatus] = useState()
    const [WishlistStatus, setWishlistStatus] = useState(data.wishlist)
    const [showLoginModal, setShowLoginModal] = useState(false)

    const dispatch = useDispatch()
    const id = data._id

    let token = localStorage.getItem('logintoken')
    useEffect(() => {
        if (token) {
            setLoggedinstatus(true)
        } else {
            setLoggedinstatus(false)

        }

    }, [token])


    const wishlist = () => {
        if (loggedinstatus) {


            if (!WishlistStatus) {

                const reqpayload = {
                    "productId": id
                }
                Add_To_Wishlist_Action(dispatch, reqpayload)
                setWishlistStatus(true)





            }
            else {
                const reqpayload = {
                    "productId": id
                }

                Remove_To_Wishlist_Action(dispatch, reqpayload)

                setWishlistStatus(false)





            }

        }
        else { setShowLoginModal(true) }

    }

    // useEffect(() => {
    //     if (localStorage.getItem("logintoken")) {
    //         const reqpayload = { headers: { Authorization: 'Bearer ' + token } }
    //         Get_Wishlist_Action(dispatch, reqpayload)
    //     }
    // }, [id])
    const clicked = (id) => {
        getproductidfromproductcard(dispatch, id)
    }



    return (
        <>
            {showLoginModal && <Login onClose={setShowLoginModal} />}
            <div style={{ position: "relative" }}>
                <div className="costume-action">
                    <span className="wish"><i className={WishlistStatus ? "icon-wishlist red-heart" : "icon-wishlist "} onClick={() => wishlist()}></i></span>
                </div>
                <Link to={`/product/${data.Title}`}><div className="costume-box" onClick={() => { clicked(data._id) }}>
                    <div className="costume-block">

                        <div className="diamond-tag">
                            <img src={Star} alt="img" />
                        </div>


                        <div className="costumes">
                            <img src={data.default_image} alt="img" />
                        </div>

                    </div>

                    <div className="costume-info my-list">
                        <div className="product-name">
                            <strong className="prod-name">{data.Title}</strong>
                            <div className="free-ship-wrap">
                                <span className="free-ship">{data.delievery_charge === null ? 'free shipping' : ''}</span>
                                <i className="fa fa-flag" aria-hidden="true"></i>
                            </div>
                        </div>
                        <span className="brand"> {data.brandData.name}</span>
                        <p>
                            <span className="costs-wrap">
                                <span className="buy-info">{data.Price.sell_price.$numberDecimal}</span>
                                <span className="old-price">({data.Price.current_store_price.$numberDecimal})</span>
                            </span>
                            <br />
                            <span className="discount">9% OFF</span>
                            <span className="h-24"></span>
                        </p>
                    </div>

                </div></Link>

            </div>

        </>
    )
}

export default ProductCard