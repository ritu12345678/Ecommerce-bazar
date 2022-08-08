import React, { useEffect } from 'react'
import sellerProfileAction from '../Store/Action/SellerProfileAction'
import { useDispatch, useSelector } from 'react-redux'

const SellerProfile = (props) => {
    // console.log(props.id)
    const dispatch = useDispatch()
    // const data = useSelector(state => state.ProductPageReducer?.ProductPageData)
    useEffect(() => {
        sellerProfileAction(dispatch, { sellerId: props.id })
    }, [dispatch])
    const SellerData = useSelector(state => state.SellerProfileReducer.SellerProfileData)
    // console.log(SellerData)


    return (
        <>


            <div>

                <h4>About The Seller</h4>

                <div className='costumes'>
                    <img src={SellerData.length > 0 && SellerData[0].data[0].sellerData[0].sellerImage} />
                </div>
                <p>Seller Name: {SellerData.length > 0 && SellerData[0].data[0].sellerData[0].sellerName}</p>
                <p>Followers: {SellerData.length > 0 && SellerData[0].data[0].sellerData[0].followers}</p>
                <p>Following: {SellerData.length > 0 && SellerData[0].data[0].sellerData[0].following}</p>
                <p>Rating: {SellerData.length > 0 && SellerData[0].data[0].avgRating[0].count}</p>
                <p>Review: {SellerData.length > 0 && SellerData[0].data[0].reviews[0].count}</p>

            </div>




        </>
    )
}

export default SellerProfile