import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import getProductDetailData from '../Store/Action/GetProductDetailDataAction'
import SellerProfile from './SellerProfile'
import { endPoints } from '../API/Endpoint'
import { Api } from '../API/Api'
import { Link } from 'react-router-dom'
import { Route, useNavigate } from 'react-router-dom';
import { AddtocartAction, AddToCartLocal } from '../Store/Action/Add_To_Cart_Action'
import getCartAction from '../Store/Action/Get_Cart_Action'
import getproductidfromproductcard from '../Store/Action/getproductidfromproductcard'

const ProductDetail = (props) => {
    const [status, setStatus] = useState(false)
    // const { id } = useParams()
    const dispatch = useDispatch()
    const data = useSelector(state => state.ProductPageReducer?.ProductPageData)
    console.log(data)
    const userId = useSelector(state => state.MyProfileReducer?.userIdMyProfile)
    let getCartdata = useSelector(state => state.GetCartReducer?.cartItem)
    let id = useSelector(state => state.GetclickedproductidReducer?.clickedid)
    console.log(id)
    let requiredProductDetail = getCartdata ? getCartdata.map((item) => { return { ...item.productData[0], id: item._id } }) : null
    let ItemIdFromGetCartApiorlocal = requiredProductDetail ? requiredProductDetail.map((item) => { return item._id }) : null
    if (!localStorage.getItem("logintoken")) {
        let localstoragedata = JSON.parse(localStorage.getItem("cart"))
        ItemIdFromGetCartApiorlocal = localstoragedata ? localstoragedata.map((item) => { return item.id }) : null

    }
  
    var cartstatus = false
    if (ItemIdFromGetCartApiorlocal?.includes(id)) {
        cartstatus = true
    }
    console.log(cartstatus)

    const requiredDetailSetLocalStorage = {
        Title: data[0]?.Title,
        Price: data[0]?.Price,
        default_image: data[0]?.default_image,
        id: data[0]?._id,
        sellerId: data[0]?.userData[0]?._id,
        save_for_later: false

    }
    // console.log(requiredDetailSetLocalStorage)
    const navigate = useNavigate();
    useEffect(() => {
        getProductDetailData(dispatch, id)
    }, [dispatch])
    let reqpayload
    const myCart = (id, idseller, iduser) => {
        if (localStorage.getItem('logintoken')) {
            let reqpayload = {
                cart: [{
                    product_id: id,
                    save_for_later: false,
                    sellerId: idseller,
                    user_id: iduser
                }]
            }

            AddtocartAction(dispatch, reqpayload)
            getCartAction(dispatch, {})



        } else {

            AddToCartLocal(id, dispatch)
            let addedItem = JSON.parse(localStorage.getItem("cart"))

            if (!addedItem) {

                // localStorage.setItem("cart", JSON.stringify([data[0]]))
                localStorage.setItem("cart", JSON.stringify([requiredDetailSetLocalStorage]))


            }
            else {


                const existingId = addedItem.map((additem) => additem._id)
                if (!existingId.includes(data[0]._id)) {

                    // localStorage.setItem('cart', JSON.stringify([...addedItem, data[0]]))
                    localStorage.setItem('cart', JSON.stringify([...addedItem, requiredDetailSetLocalStorage]))


                }
            }


        }
        navigate('/my-cart')
    }


    console.log(ItemIdFromGetCartApiorlocal)

    return (
        <>

            {data.map((item, index) => {

                return (<div key={index}>

                    <div >


                        {item.brandData ? (<div className="brand-name">{item.brandData[0].name}</div>) : null}

                        <div className="product-name">{item.Title}</div>
                        <p><span className="buy-info">{item.Price.current_store_price.$numberDecimal}</span>
                            <span className="old-price">sell_price:{item.Price.sell_price.$numberDecimal}</span></p>
                        <span> {item.shippingCost ? item.shippingCost : "Free"} shipping</span>
                        <br></br>
                        <button className="complete-purchase" >Buy Now</button>

                        {cartstatus ? <button className="complete-purchase" >go to cart</button>
                            :
                            <button className="complete-purchase" onClick={() => myCart(item._id, item.userData[0]._id, userId)}>Add to cart</button>
                        }


                        <button className="complete-purchase make-offer" >Make an Offer</button>
                        <button className="complete-purchase msg-seller">Message seller</button>
                    </div>
                    <div key={index}>
                        <div > <img src={item.default_image} alt="Shop Now" /></div>
                        <div >
                            <h2>Item Detail</h2>
                            {item.brandData ? (<h4>Brand :{item.brandData[0].name}</h4>)
                                : null}

                            {item.Condition ? <h4>Condition:{item.Condition}</h4> : ""}
                            <h4>ShippingCost : {item.shippingCost ? item.shippingCost : "Free"}</h4>
                        </div>
                        {
                            item.Attrs.length > 0 ? item.Attrs.map((attrs, index) => {
                                return (
                                    <div key={index}>
                                        {attrs.name ? <h4>{attrs.name} : {attrs.value}</h4> : ""}
                                    </div>

                                )

                            })
                                : null}



                        <h6>Description : </h6>
                        <div
                            dangerouslySetInnerHTML={{ __html: item.Description }}
                        />

                        <h4>

                            {item.categoryData ? <span>Category :{item.categoryData[0].name}</span>
                                : null}
                            {item.subcategoryData ? <span> &nbsp; {item.subcategoryData[0].name}</span>
                                : null}

                        </h4>

                        {item.updatedAt ? <h4>Posting:{item.updatedAt.split('T')[0]}</h4> : null}
                        <SellerProfile id={item.userData[0]._id} />

                    </div>
                </div>)
            })







            }



        </>
    )
}

export default ProductDetail;



// AddToCartLocal is used to get the id not ued in to set the data in localstorage 