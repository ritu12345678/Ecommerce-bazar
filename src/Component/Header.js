import React, { useEffect, useState, useRef } from "react";
import logo from "../Assets/Image/logo.png";
import Login from "./Login";
import { Link, useParams, Outlet } from "react-router-dom";

// import AutoLogout from './useAutoLogout'
import SignUp from "./SignUp";
import { useDispatch, useSelector } from "react-redux";
import AutosuggestComp from "../Component/AutoSuggest";
import { logoutAction } from "../Store/Action/LoginAction";
import HeaderMenu from "./HeaderMenu";
import Get_Wishlist_Action from "../Store/Action/Get_Wishlist_Action";
import My_Profile_Action from "../Store/Action/My_Profile_Action";
import { AddtocartAction } from "../Store/Action/Add_To_Cart_Action";
import getCartAction from "../Store/Action/Get_Cart_Action";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [totalItemIncart, setTotalItemIncart] = useState();
  const logoutTimerIdRef = useRef(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [raw, setRaw] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("logintoken");
  const setModalIsOpenTotrue = () => {
    setShowModal(true);
  };

  const setLoginModalIsOpenTotrue = () => {
    setShowLoginModal(true);
  };
  const MainMenuCategory = useSelector(
    (state) => state.MainMenuReducer.payload
  );
  const userId = useSelector(
    (state) => state.MyProfileReducer?.userIdMyProfile
  );
  let getCartdata = useSelector((state) => state.GetCartReducer?.cartItem);
  let countcartitem = useSelector(
    (state) => state.GetCartReducer?.cartItemcount
  );
  let cartLocal = useSelector((state) => state.GetCartReducer?.cartLocal);
  let product_Id = useSelector(
    (state) => state.GetidAddRemoveWishlistReducer?.product_id
  );
  let totalproductaddtowishlist = useSelector(
    (state) => state.GetWishListReducer?.Product_Add_to_Wishlist
  );
  console.log(totalproductaddtowishlist);
  let totalproductaddtowishlistlength = useSelector(
    (state) => state.GetWishListReducer?.Count_Product_Add_To_Wishlist
  );
  totalproductaddtowishlist = totalproductaddtowishlist?.length;
  // console.log(totalproductaddtowishlist)

  // let totalitem;
  // if (localStorage.getItem("logintoken")) {
  //     totalitem = getCartdata ? getCartdata.length : " "
  //     console.log(totalitem)
  // } else {

  //     if (!localStorage.getItem("logintoken")) {

  //         let localstoragedata = JSON.parse(localStorage.getItem("cart"))
  //         totalitem = localstoragedata ? localstoragedata.length : ""
  //         console.log(totalitem)
  //     }
  // }
  // console.log(totalItemIncart)
  // console.log("gvghvhg", countcartitem)
  let id;
  if (localStorage.getItem("logintoken")) {
    id = product_Id;
  }

  useEffect(() => {
    if (localStorage.getItem("logintoken")) {
      if (countcartitem) {
        setTotalItemIncart(countcartitem);
      } else {
        setTotalItemIncart();
      }
    } else {
      if (!localStorage.getItem("logintoken")) {
        if (localStorage.getItem("cart")) {
          let localStoragedata = JSON.parse(localStorage.getItem("cart"));
          countcartitem = localStoragedata
            ? localStoragedata.length
            : "no item";
          // console.log(countcartitem)
          setTotalItemIncart(countcartitem);
        }
      }
    }
  }, [token, cartLocal, countcartitem]);

  useEffect(() => {
    const autoLogout = () => {
      if (document.visibilityState === "hidden") {
        const timeOutId = window.setTimeout(logoutAction, 10 * 60 * 1000);
        logoutTimerIdRef.current = timeOutId;
      } else {
        window.clearTimeout(logoutTimerIdRef.current);
      }
    };

    document.addEventListener("visibilitychange", autoLogout);

    return () => {
      document.removeEventListener("visibilitychange", autoLogout);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("logintoken")) {
      const reqpayload = { headers: { Authorization: "Bearer " + token } };
      My_Profile_Action(dispatch, reqpayload);
      getCartAction(dispatch, {});
    }
  }, []);

  // useEffect(() => {
  //     // console.log("click")
  //     if (localStorage.getItem("logintoken")) {

  //         const reqpayload = { headers: { Authorization: 'Bearer ' + token } }
  //         Get_Wishlist_Action(dispatch, reqpayload)

  //     }

  // }, [id])

  // useEffect(() => {
  //     if (localStorage.getItem("logintoken") && localStorage.getItem("cart")) { }
  // }, [])
  useEffect(() => {
    if (token) {
      if (localStorage.getItem("cart")) {
        const localStorageCartData = JSON.parse(localStorage.getItem("cart"));
        const requiredlocalstorageCartItemDetail = localStorageCartData?.map(
          (item) => {
            return {
              product_id: item.id,
              save_for_later: false,
              // sellerId: item.userData[0]._id,
              sellerId: item.sellerId,
            };
          }
        );
        console.log(requiredlocalstorageCartItemDetail);
        const reqpayload = {
          // spread operator is used to copy the value of array
          cart: [...requiredlocalstorageCartItemDetail],
        };
        console.log(reqpayload);

        reqpayload.cart.forEach((element) => {
          AddtocartAction(dispatch, { cart: [element] });
          window.location.reload();
        });

        localStorage.removeItem("cart");
      }
    }
  }, [token]);

  return (
    <>
      {showModal && <SignUp onClose={setShowModal} />}
      {showLoginModal && <Login onClose={setShowLoginModal} />}
      <div className="header-login">
        <div className="container">
          <div className="login">
            <div>
              <Link to="/" className="logo-class">
                <img src={logo} alt="Bazaar" />
              </Link>
            </div>
            <div className="search-brand">
              <form>
                <div>
                  <AutosuggestComp />
                  {/*<input type="text" autoComplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" className="react-autosuggest__input" placeholder="Search for anything" value={Input} onChange={changeHandler} />*/}
                  <div className="Listitem">
                    {/*  { <ul>

                                            {(filterdata) ? filterdata.map((item, index) => {
                                                return (

                                                    <Link to={`/products/${item._id}`} key={index} >
                                                        {item.Title}
                                                    </Link>

                                                )
                                            }) : <div></div>}
                                        </ul>}*/}
                  </div>
                </div>
              </form>
              <i className="icon-search"></i>
            </div>
            <div className="header-address">
              <div className="product-location-wraps">
                <div className="product-location">
                  <div className="location-mark">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="location-text">
                      <div className="deliver-text">Deliver to</div>
                      <div className="wrap-delivery">
                        <div className="delivery-text">Select location</div>
                        <div className="deliver-zip"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="signup-register">
              <div style={{ display: "flex" }}>
                <div className="signin-register">
                  <span className="header-text" onClick={setModalIsOpenTotrue}>
                    Sign Up
                  </span>
                </div>

                {localStorage.getItem("logintoken") ? (
                  <div
                    className="signin-register"
                    style={{ paddingRight: "20px" }}
                  >
                    <span
                      className="header-text"
                      onClick={() => dispatch(logoutAction)}
                    >
                      Sign out
                    </span>
                  </div>
                ) : (
                  <div
                    className="signin-register"
                    style={{ paddingRight: "20px" }}
                  >
                    <span
                      className="header-text"
                      onClick={setLoginModalIsOpenTotrue}
                    >
                      Signin
                    </span>
                  </div>
                )}
              </div>

              <div className="cart-wrap">
                <a className="wish-list msg-number" href="/my-cart">
                  <div className="tooltip">Cart</div>
                  <p>{totalItemIncart}</p>
                  <i className="fas fa-shopping-bag"></i>
                </a>
              </div>
              {token ? (
                <div className="download-app">
                  <Link to="/profile/wishList">
                    <span className="header-text">
                      <span className="unread-wishlist">
                        {totalproductaddtowishlistlength}{" "}
                      </span>
                      <i className="fas fa-heart"></i>
                    </span>
                  </Link>
                </div>
              ) : null}
              {token ? (
                <div>
                  <ul> Profile</ul>
                  <Link to="profile">
                    <li>MyAccount</li>
                  </Link>
                  <Link to="password">
                    <li>Change password</li>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <HeaderMenu />
    </>
  );
};

export default Header;
