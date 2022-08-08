import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getCartAction from "../Store/Action/Get_Cart_Action";
import { Api } from "../API/Api";
import { endPoints } from "../API/Endpoint";

const Checkoutitem = ({ item }) => {
  const curr = item;

  const dispatch = useDispatch();

  let getCartdata =
    useSelector((state) => state.GetCartReducer?.cartItem) || {};
  let initialquant = curr.Quantity;
  let reqpayload;

  const [quant, setQuant] = useState(initialquant);

  const increment = (id) => {
    setQuant(quant + 1);

    reqpayload = { cartId: id, quantity: quant + 1 };
    Api.post(endPoints.CHANGE_CART_QUANTITY, reqpayload).then((res) => {
      if (res.data.message) {
        getCartAction(dispatch, {});
      }
    });
  };

  const decrement = (id) => {
    if (quant === 1) {
      return;
    } else {
      setQuant(quant - 1);

      let reqpayload = { cartId: id, quantity: quant - 1 };
      Api.post(endPoints.CHANGE_CART_QUANTITY, reqpayload).then((res) => {
        if (res.data.message) {
          getCartAction(dispatch, {});
        }
      });
    }
  };

  return (
    <>
      <div>
        <div className="cart-product ">
          <figure>
            <img src={curr?.default_image} alt="product" />
          </figure>
        </div>
        <div
          className="cart-product-text"
          style={{ display: "flex", flexDirection: "column", width: "80%" }}
        >
          <div className="cart-base" style={{ display: "flex" }}>
            <div className="cart-des">
              <a href="/product/Electronics/621de8c67136d1226d30b5e5/?cat=electronics">
                <span className="product-name">{curr.Title}</span>
              </a>
              <span className="price">
                <span>{curr?.Price?.sell_price?.$numberDecimal}</span>
                <span className="old-price">
                  {curr?.Price?.current_store_price?.$numberDecimal}
                </span>
              </span>
            </div>
            <div className="delete-cart-product" style={{ width: " 20%" }}>
              <div className="qty-input">
                <button
                  className="qty-decrement qty-decrement-active"
                  type="button"
                  onClick={() => {
                    decrement(curr.cartId);
                  }}
                >
                  <i className="fal fa-minus"></i>
                </button>
                <input id="quantity" type="number" value={quant} />
                <button
                  className="qty-increment"
                  type="button"
                  onClick={() => {
                    increment(curr.cartId);
                  }}
                >
                  <i className="fal fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkoutitem;
