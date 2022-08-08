import { Api } from '../API/Api'
import { useState, useEffect } from 'react'
import { endPoints } from '../API/Endpoint'
import { useDispatch } from 'react-redux'
import get_User_Add_Action from '../Store/Action/Get_User_Add_Action'

const UserAddressDetail = ({ open }) => {
    const [state, setState] = useState("")
    const dispatch = useDispatch()

    const formclose = (e) => {
        const reqpayload = {
            "first_name": e.target.first_name.value,

            "email": e.target.email.value,
            "phone": e.target.phone.value,
            "postcode": e.target.postcode.value,
            "street": e.target.street.value,
            "flat_no": e.target.flat_no.value,
            "landmark": e.target.landmark.value,
            "country": e.target.country.value,
            "state": e.target.state.value,
            "city": e.target.city.value
        }
        Api.post(endPoints.ADD_USER_ADDRESS, reqpayload).then((res) => { if (res.data.message) { get_User_Add_Action(dispatch) } }


        ).catch((err) => console.log(err))


        open(false)
    }
    useEffect(() => {
        Api.get(endPoints.ALL_COUNTRY_LIST).then((res) => setState(res.data.data[0].stateData))
        get_User_Add_Action(dispatch)

    }, [])
    console.log("ghnbghjhj", state)


    return (<>
        <div className="checkout-left">
            <div className="head-wrap checkout-wrap">
                <span className="checkout-headings"> Shipping</span>
            </div>
            <div className="shipping-itemwrap shipping-remade">
                <form id="addressForm" onSubmit={formclose}>
                    <div className="desc-txt-wrap">
                        <div className="desc-txt edit-address">
                            <div className="edit-wrapper">
                                <label className="edit-label">Name<span className="highlighted">*</span>
                                </label>
                                <input type="text" placeholder="Name" name="first_name" />
                            </div>
                            <div className="edit-wrapper">
                                <label className="edit-label">Email<span className="highlighted">*</span>
                                </label>
                                <input type="email" placeholder="Email Address" name="email" />
                            </div>
                            <div className="edit-wrapper">
                                <label className="edit-label">Mobile Number<span className="highlighted">*</span></label>
                                <input type="text" placeholder="Mobile Number" name="phone" />
                            </div>
                            <div className="edit-wrapper">
                                <label className="edit-label">Flat Number<span className="highlighted">*</span></label>
                                <input type="text" maxLength="10" placeholder="Flat Number" name="flat_no" />
                            </div>
                            <div className="edit-wrapper">
                                <label className="edit-label">Street<span className="highlighted">*</span></label>
                                <input type="text" placeholder="Street" maxLength="15" name="street" />
                            </div>
                            <div className="edit-wrapper">
                                <label className="edit-label">Landmark</label>
                                <input type="text" placeholder="Landmark" name="landmark" />
                            </div>
                            <div className="edit-wrapper">
                                <label className="edit-label">Post Code<span className="highlighted">*</span></label>
                                <input type="number" minLength="6" maxLength="6" placeholder="Post Code" name="postcode" />
                            </div>
                            <div className="edit-wrapper">
                                <label className="edit-label">Country<span className="highlighted">*</span></label>
                                <div className="select-state">
                                    <select name="country" >
                                        <option value="">Please select country</option>
                                        <option name="country" value="5ae8284db37516a75ac0aada">INDIA</option>
                                    </select>
                                </div>
                            </div>
                            <div className="edit-wrapper">
                                <label className="edit-label">City<span className="highlighted">*</span></label>
                                <input type="text" placeholder="City" name="city" />
                            </div>
                            <div className="edit-wrapper">
                                <label className="edit-label">State<span className="highlighted">*</span></label>
                                <div className="select-state">
                                    <select name="state"><option value="">Please select state</option>
                                        {state ? state.map((curr, index) => {
                                            return <option name="state" value={curr._id} key={index}>{curr.name}</option>
                                        }) : null}
                                    </select>
                                </div>
                            </div>
                            <div className="desc-txt edit-address">
                                <div className="btns-wrapping">
                                    <button className="complete-purchase">Cancel </button>
                                    <button className="complete-purchase" type="submit" >Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="shipping-itemwrap shipping-remade">
                <div className="head-wrap"><span className="checkout-headings"> Coupon</span></div>
                <div className="desc-txt coupon-block">
                    <input type="text" name="landmark" placeholder="Enter coupon code" value="" />
                    <button className="complete-purchase">Apply Coupon</button>
                </div>
                <span className="view-promo-code">View Available Coupon</span>
                <div className="applied-msg">
                </div>
            </div>
            <div className="shipping-itemwrap shipping-remade">
                <div className="payment-type">
                    <span className="checkout-headings">Payment Option</span>
                    <div className="payment-options">
                        <label className="payment-boxes">
                            <img src="/assets/images/razor-pay.png" />
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <button className="complete-purchase payment-submission">Proceed to payment</button>
                </div>
            </div>
        </div>
    </>)
}

export default UserAddressDetail