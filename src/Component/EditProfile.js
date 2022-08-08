import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Api } from '../API/Api'
import { endPoints } from '../API/Endpoint'
import My_Profile_Action from '../Store/Action/My_Profile_Action'

const EditProfile = () => {
    const dispatch = useDispatch()
    const userdata = useSelector(state => state.MyProfileReducer?.userDetail) || {}



    useEffect(() => {

        if (localStorage.getItem("logintoken")) {

            My_Profile_Action(dispatch)
        }
    }, [])


    const submit = (e) => {
        e.preventDefault()
        const reqpayload = {
            date_of_birth: e.target.dob.value,
            first_name: e.target.fname.value,

            last_name: e.target.lname.value,
            mobile: e.target.mobile.value
        }
     
        Api.post(endPoints.UPDATE_USER_DETAIL, reqpayload).then((res) => { console.log(res) }).catch((err) => { console.log(err) })



    }


    return (
        <>

            <div className="container">
                <div >
                    <div >
                        <form autoComplete="off" className="detail-from" onSubmit={submit}>
                            <h4 className="form-title">My profile</h4>
                            <div className="group-wrap edit-profile">
                                <div className="form-input">
                                    <span>First Name</span>
                                    <input type="text" required="" minLength="3" maxLength="50" placeholder="Name*" name="fname" defaultValue={userdata.first_name} />
                                </div>
                                <div className="form-input">
                                    <span>Last Name</span>
                                    <input type="text" required="" minLength="3" maxLength="50" placeholder="Name*" name="lname" defaultValue={userdata.last_name} />
                                </div>
                                <div className="form-input">
                                    <span>Email Address</span>
                                    <input type="email" required="" placeholder="Email Address*" disabled="" value="test1521@gmail.com" />
                                </div>
                                <div className="form-input edit-form-input">
                                    <span>Mobile Number</span>
                                    <input type="text" minLength="10" maxLength="10" placeholder="Mobile Number" name="mobile" defaultValue={userdata.mobile} />
                                    <span className="correct-text" >Verified</span>
                                </div>
                                <div className="form-input">
                                    <span>Date of Birth</span>
                                    <div className="react-datepicker-wrapper">
                                        <div className="react-datepicker__input-container">
                                            <input type="text" id="dob" placeholder="Enter your date of birth" className="" name="dob" defaultValue={userdata.dob} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-input"></div>
                            </div>
                            <div className="flex-row">
                                <button type="submit" className="header-sell">save details</button>
                                <a className="header-sell" href="/profile">Back</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}

export default EditProfile