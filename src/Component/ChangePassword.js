import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Api } from "../API/Api";
import { endPoints } from "../API/Endpoint";
import My_Profile_Action from "../Store/Action/My_Profile_Action";
const ChangePassword = () => {
  const navigate = useNavigate();
  const changePasscode = (e) => {
    e.preventDefault();
    const reqpayload = {
      confirmPassword: e.target.confirmpassword.value,
      currentPassword: e.target.currpassword.value,
      newPassword: e.target.newpassword.value,
    };
    Api.post(endPoints.UPDATE_USER_DETAIL, reqpayload)
      .then((res) => {
        if (res.data) {
          navigate("/profile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div>
          <div>
            <form className="detail-from" onSubmit={changePasscode}>
              <h4 className="form-title">My profile</h4>
              <div className="group-wrap edit-profile">
                <div className="form-input">
                  <span>Current Password</span>
                  <input
                    type="password"
                    placeholder="Current Password"
                    required=""
                    name="currpassword"
                  />
                  <i className="toggle-password fa fa-fw   fa-eye-slash"> </i>
                </div>
                <div className="form-input">
                  <span>New Password</span>
                  <input
                    type="password"
                    required=""
                    placeholder="New Password"
                    minLength="6"
                    maxLength="15"
                    name="newpassword"
                  />
                  <i className="toggle-password fa fa-fw   fa-eye-slash"></i>
                </div>
                <div className="form-input">
                  <span>Confirm Password</span>
                  <input
                    type="password"
                    required=""
                    placeholder="Confirm Password"
                    minLength="6"
                    maxLength="15"
                    name="confirmpassword"
                  />
                  <i className="toggle-password fa fa-fw   fa-eye-slash"></i>
                </div>
              </div>
              <div className="flex-row">
                <button type="submit" className="header-sell">
                  Change Password
                </button>
                <Link to="/profile"> Back</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
