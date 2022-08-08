import React, { useEffect, useState } from 'react'
import { Api } from '../API/Api'
import { endPoints } from '../API/Endpoint'
import Slider from 'react-slick'
import ReviewCard from './ReviewCard'

const ReviewCardSlider = ({ data }) => {
    const [ReviewCardSliderData, SetReviewCardSliderData] = useState()
    useEffect(() => {
        const requestpayload = {
            block_name: data.block_name,
            id: data.id
        }
        // console.log("requestpayload==>", requestpayload)
        Api.post(endPoints.GET_HOME_PAGE_DATA, requestpayload).then((res) => SetReviewCardSliderData(res.data.data))
            .catch((err) => console.log(err))

    }, [data])

    // console.log(ReviewCardSliderData)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    // console.log("ReviewCardSliderData===>", ReviewCardSliderData)
    return (<>
        <div className="arrival-costumes">
            <div className="arrival-caption">
                <h2>Recent reviews from buyers and sellers</h2>
            </div>

            {
                ReviewCardSliderData ? ReviewCardSliderData.map((item, id) => {
                    return (
                        <ReviewCard data={item} key={id} />

                    )
                }) : null
            }



        </div>
    </>)
}

export default ReviewCardSlider