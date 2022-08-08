import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
import SearchBarAction from '../Store/Action/SearchBarAction'
import { Link } from 'react-router-dom'
import Star from '../Assets/Image/Star.png'


const ProductView = () => {
    const dispatch = useDispatch()
    const { Title } = useParams();
    // console.log(Title)
    // SearchBarAction(dispatch, { searchValue: Title })
    const data = useSelector(state => state.SearchBarReducer.SearchBarData)
    // console.log("data===>", data)
    useEffect(() => {

        SearchBarAction(dispatch, { searchValue: Title })
    }, [Title, dispatch])





    // console.log(id)
    return (<>

        {data ? data.map((item, index) => {
            return (<>
                <Link to={`/product/${item._id}`}><div className="costume-box" key={index} >
                    <div className="costume-block">

                        <div className="diamond-tag">
                            <img src={Star} alt="img" />
                        </div>
                        <div className="product-pack" >
                            <div className="costumes">
                                <img src={item.default_image} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="costume-info my-list">
                            <div className="product-name">
                                <strong className="prod-name">{item.Title}</strong>
                                <div className="free-ship-wrap">
                                    <span className="free-ship">{item.delievery_charge === null ? 'free shipping' : ''}</span>
                                    <i className="fa fa-flag" aria-hidden="true"></i>
                                </div>
                            </div>
                            <span className="brand"> {item.brandData.name}</span>
                            <p>
                                <span className="costs-wrap">
                                    <span className="buy-info">{item.Price.sell_price.$numberDecimal}</span>
                                    <span className="old-price">({item.Price.current_store_price.$numberDecimal})</span>
                                </span>
                                <br />
                                <span className="discount">9% OFF</span>
                                <span className="h-24"></span>
                            </p>
                        </div>
                    </div>
                </div></Link>


            </>)
        }) : null}


    </>)
}

export default ProductView