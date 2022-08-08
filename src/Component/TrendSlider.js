import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Api } from '../API/Api'
import { endPoints } from '../API/Endpoint'
import Slider from 'react-slick'


const TrendSlider = ({ data }) => {
    const [TrendSliderdata, SetTrendSliderdata] = useState()
    useEffect(() => {
        const requestpayload = {

            block_name: data.block_name,
            id: data.id,

        }
        // console.log(data.id)
        // console.log(requestpayload)
        Api.post(endPoints.GET_HOME_PAGE_DATA, requestpayload).then(res => {
            // console.log("tre", res.data.data)
            SetTrendSliderdata(res.data.data)

        })
    }, [data])
    const settings = {
        dots: false,
        fade: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    return (<>
        <div className="arrival-costumes">
            <div className="arrival-caption">
                <h2>Trend Alerts</h2>
                <a className="shop-now" href="/product-listing-page/block?block_name=selling-product&amp;id=6093bd0b1b8f957871fdc7d9">View All</a>
            </div>
            <div className="popular-costumes">
                <Slider{...settings}>
                    {TrendSliderdata ? TrendSliderdata.map((item, id) => {
                        return (
                            <ProductCard data={item} key={id} />

                        )
                    }) : null
                    }
                </Slider>


            </div>
        </div>

    </>)
}

export default TrendSlider