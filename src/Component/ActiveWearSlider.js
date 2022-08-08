import React, { useEffect, useState } from 'react'
import { Api } from '../API/Api'
import { endPoints } from '../API/Endpoint'
import Slider from 'react-slick'
import ProductCard from './ProductCard'

const ActiveWearSlider = ({ data }) => {
    const [ActiveWearSliderData, SetActiveWearSliderData] = useState()
    useEffect(() => {
        const requestpayload = {
            block_name: data.block_name,
            id: data.id

        }
        Api.post(endPoints.GET_HOME_PAGE_DATA, requestpayload).then((res) => SetActiveWearSliderData(res.data.data))
            .catch((err) => console.log(err))


    }, [data])
    const settings = {
        dots: false,
        autoplay: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    return (<>
        <div className="arrival-costumes">
            <div className="arrival-caption">
                <h2>Activewear</h2>
                <a className="shop-now" href="/product-listing-page/block?block_name=subcategory-product&amp;id=60925c871e72134243c6d459">View All</a>
            </div>
            <div className="popular-costumes">
                <Slider{...settings}>
                    {
                        ActiveWearSliderData ? ActiveWearSliderData.map((item, id) => {
                            return (
                              <ProductCard data={item} key={id} />

                            )
                        }) : null
                    }
                </Slider>

            </div></div>
    </>)
}

export default ActiveWearSlider