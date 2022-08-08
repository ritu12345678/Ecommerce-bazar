import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Api } from '../API/Api'
import { endPoints } from '../API/Endpoint'
import getCartAction from '../Store/Action/Get_Cart_Action'
import Checkoutitem from './Checkoutitem'
import UserAddressDetail from './UserAddressDetail'

const Checkout = () => {


    let getCartdata = useSelector(state => state.GetCartReducer?.cartItem) || {}
    let requireddetail = getCartdata.length ? getCartdata.map((item) => { return { ...item.productData[0], Quantity: item.Quantity, cartId: item._id } }) : null
    let useraddress = useSelector(state => state.GetUserAddressreducer?.useraddressdetail)
    console.log(useraddress)



    let sum = requireddetail ? requireddetail.reduce((accumulator, curValue) => accumulator + parseFloat(curValue.Price?.sell_price?.$numberDecimal) * curValue.Quantity, 0) : null
    const [userAddressFormOpen, setUserAddressFormOpen] = useState(false)
    // const [country, setCountry] = useState("")
    const formopen = () => {
        setUserAddressFormOpen(true)
        // Api.get(endPoints.ALL_COUNTRY_LIST).then((res) => setCountry(res.data.data[0].stateData))

    }


    let cost = 0
    requireddetail?.forEach(ele => {
        if (ele.shippingCost == "Free") {
            ele.shippingCost = 0
        }
        return cost = cost + ele.shippingCost

    })
    let finalamount = cost + sum



    const dispatch = useDispatch()

    // console.log(requireddetail)

    let sellPrice = requireddetail ? requireddetail.map((item) => { parseInt(item.Price?.sell_price?.$numberDecimal) }) : ""
    useEffect(() => {
        getCartAction(dispatch, {})
    }, [])

    // const gettotalAmountfromCheckoutitem = (amount) => {
    //     setTotalcost(amount)
    //     // console.log(totalcost)
    // }



    return (
        <>

            {userAddressFormOpen && <UserAddressDetail open={setUserAddressFormOpen} />}

            <div className="checkout-left">
                <div className="head-wrap checkout-wrap">
                    <span className="checkout-headings"> Shipping</span>
                </div>
                <div className="shipping-itemwrap shipping-remade">
                    {!userAddressFormOpen ?
                        <button className="shop-now address-btn"
                            onClick={formopen}
                        >Add new address</button> : null}
                </div>
                <div className="shipping-inner shipping-remade">
                    <div className="ship-radio">
                        <input type="radio" className="radio" value="626645141c870415c246e9cc" />
                        <div className="radio-circle">
                            <div className="radio-dot">
                            </div>
                        </div>
                    </div>
                    <div className="head-wrap ship-edit">
                        <span className="edit-link edit-btn">
                            <i className="fas fa-user-edit"></i>
                            <b>EDIT</b>
                        </span>
                    </div>
                    <div className="desc-txt">
                        <div>
                            <span className="ship-add-name">jack kumar</span>
                            <br></br>
                            <span>8826055628</span>
                        </div>
                        <div className="address-checkout">
                            <i className="fas fa-map-marker-alt">
                            </i><span className="ship-add">1234, </span>
                            <span className="ship-add">rajender chowk, </span>
                            <span className="ship-add">near GIDC, </span>
                            <span>121005, </span>
                            <span className="ship-add">Delhi, </span>
                            <span className="ship-add">Uttar Pradesh</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="checkout-right">
                <div className="summary-section">
                    <div>
                        <h4 className="summary-title">order summary</h4>
                        <div className="checkout-cardwrap">
                            <div className="">
                                <div className="cartmenu cart-itemlist cart-list-item">
                                    {requireddetail ? requireddetail.map((curr, index) => {

                                        return (
                                            <Checkoutitem key={index} item={curr}
                                            />

                                        )
                                    }) : null}
                                </div>
                            </div>
                        </div>
                        <div className="checkout-total">
                            <div><span>Total Amount</span><span>{sum}</span></div>
                            <div><span>Shipping</span><span>{cost}</span></div>
                            <div><span>Final Amount</span><span>{finalamount}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout