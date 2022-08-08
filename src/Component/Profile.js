import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import My_Profile_Action from '../Store/Action/My_Profile_Action'

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userdata = useSelector(state => state.MyProfileReducer?.userDetail) || {}
 
  const clicked = () => {
    navigate("/edit")
  }
  useEffect(() => {


    if (localStorage.getItem("logintoken")) {

      My_Profile_Action(dispatch)
    }
  }, [])

  return (
    <>
      <div className="container">
        <div >
          <div className="detail-from">
            <div className="user-detail-edit">
              <h4 className="form-title">My Profile</h4>

              <button className="header-sell" onClick={clicked} >
                <i className="fas fa-user-edit"></i>Edit</button>

            </div>
            <div className="group-wrap">
              <div className="form-input">
                <span>First Name</span>
                <input type="text" name="firstname" value={userdata.first_name} readOnly />
              </div>
              <div className="form-input">
                <span>Last Name</span>
                <input type="text" disabled="" name="lastname" value={userdata.last_name} />
              </div>
              <div className="form-input">
                <span>Email Address</span>
                <input type="email" disabled="" name="email" value={userdata.email} />
              </div>
              <div className="form-input">
                <span>Mobile Number</span>
                <input type="text" disabled="" name="phone" value={userdata.mobile} />
              </div>
              <div className="form-input">
                <span>Date of Birth</span>
                <div className="react-datepicker-wrapper">
                  <div className="react-datepicker__input-container">
                    <input type="text" id="dob" placeholder="Enter your date of birth" className="" value={userdata.dob} />
                  </div>
                </div>
              </div>
            </div>
            <div className="group-wrap">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile