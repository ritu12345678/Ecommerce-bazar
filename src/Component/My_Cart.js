import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCartAction from "../Store/Action/Get_Cart_Action";
import { Link } from "react-router-dom";
import { deleteFromCartAction } from "../Store/Action/Delete_From_Cart_Action";
import { AddToCartLocal } from "../Store/Action/Add_To_Cart_Action";
import { AddToCartarrlengthAction } from "../Store/Action/Add_Length_Action";

import Add_To_Wishlist_Action from "../Store/Action/Add_To_Wishlist_Action";
// import { ADD_ITEM_TO_CART } from '../Store/ActionType'

const My_Cart = () => {
  const [data, setData] = useState();
  // data is used to control page refresh issue after delete from localStorage
  let getCartdata = useSelector((state) => state.GetCartReducer?.cartItem);
  let totalitemcount = useSelector(
    (state) => state.GetCartReducer?.cartitemcount
  );
  // console.log("arraylength", totalitemcount)
  let deletefromcartapiresponse = useSelector(
    (state) => state.DeletefromCartReducer?.itemdeletefromcart
  );
  // deletefromcartapiresponse pass into useeffect dependencies to resolve page refresh issue after delete from cart if user is loggedin
  let requiredProductDetail = getCartdata
    ? getCartdata.map((item) => {
        return { ...item.productData[0], id: item._id };
      })
    : null;
  // console.log(getCartdata)
  console.log(requiredProductDetail);

  if (!localStorage.getItem("logintoken")) {
    requiredProductDetail = JSON.parse(localStorage.getItem("cart"));
  }
  const dispatch = useDispatch();
  const logintoken = localStorage.getItem("logintoken");
  useEffect(() => {
    if (logintoken) {
      getCartAction(dispatch, {});
    }
  }, [dispatch, deletefromcartapiresponse, data]);

  let arrlength = requiredProductDetail ? requiredProductDetail.length : 0;

  let sum = requiredProductDetail
    ? requiredProductDetail.reduce(
        (accumulator, curValue) =>
          accumulator + parseInt(curValue.Price?.sell_price?.$numberDecimal),
        0
      )
    : null;
  // console.log(typeof (getCartdata[0].Price?.sell_price?.$numberDecimal))
  // console.log(sum)
  // Delete from cart
  const movetowishlist = (wishid, cartid) => {
    const payload = {
      productId: wishid,
    };
    Add_To_Wishlist_Action(dispatch, payload);
    const reqpayload = { cartId: [cartid] };
    deleteFromCartAction(dispatch, reqpayload);
    getCartAction(dispatch, {});
  };

  const delete_from_cart = (id) => {
    console.log(id);
    if (localStorage.getItem("logintoken")) {
      if (window.confirm("are you sure  to delete this product")) {
        const reqpayload = { cartId: [id] };

        deleteFromCartAction(dispatch, reqpayload);
        getCartAction(dispatch, {});
        // window.location.reload();
      }
    } else {
      if (!localStorage.getItem("logintoken")) {
        if (window.confirm("are you sure  to delete this product")) {
          let copyLocalstorageItem = JSON.parse(localStorage.getItem("cart"));
          let index = copyLocalstorageItem.findIndex((item) => item.id == id);
          // console.log(index)
          copyLocalstorageItem.splice(index, 1);
          setData(id);
          localStorage.setItem("cart", JSON.stringify(copyLocalstorageItem));
          requiredProductDetail = JSON.parse(localStorage.getItem("cart"));
          AddToCartLocal(id + 1, dispatch);
        }
      }
    }
  };

  return (
    <>
      <div className="container ">
        <div className="cart-caption">
          <h2>{arrlength} item in your cart </h2>
          <h6>Taxes may apply for certain state </h6>
        </div>

        <div className="cartsection">
          <div>
            {requiredProductDetail
              ? requiredProductDetail.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div className="cartmenu cart-itemlist cart-list-item">
                        <div className="cart-product ">
                          <figure>
                            <img src={item?.default_image} alt="product" />
                          </figure>
                        </div>
                        <div className="cart-product-text">
                          <div className="cart-base">
                            <div className="cart-des">
                              <span className="brandName">{item?.Title}</span>
                              <Link to={`/product/${item.id}`}>
                                <span className="product-name">
                                  {item.Title}
                                </span>
                              </Link>
                              <span className="price">
                                <span>
                                  ₹{item?.Price?.sell_price?.$numberDecimal}
                                </span>
                                <span className="old-price">
                                  ₹
                                  {
                                    item?.Price?.current_store_price
                                      ?.$numberDecimal
                                  }
                                </span>
                              </span>
                              <div className="pay-wrap">
                                <button
                                  className="shop-now"
                                  onClick={() => {
                                    movetowishlist(item._id, item.id);
                                  }}
                                >
                                  Move to wishlist
                                </button>
                              </div>
                              <div className="pay-wrap">
                                <button
                                  className="shop-now"
                                  onClick={() => {
                                    delete_from_cart(item.id);
                                  }}
                                >
                                  Delete From Cart
                                </button>
                              </div>
                            </div>
                            {/*// <div className="delete-cart-product" >
                                            //     <span className="delete-product">
                                            //         <img src="/assets/images/delete-icon.png" alt="trash-icn" />
                                            //     </span>
                        // </div>*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}

            <div className="cart-bottom">
              <h6 className="cart-total">
                <span>Total</span> ₹ {sum}
              </h6>
              <Link to="/checkout">
                <button className="shop-now">Proceed to checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default My_Cart;
