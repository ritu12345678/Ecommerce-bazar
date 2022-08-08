import React from 'react'
import { useEffect } from 'react'
import { brandslideraction } from '../Store/Action/BrandSliderAction'
import { useDispatch, useSelector } from 'react-redux'
import Slider from "react-slick"
import { Link } from 'react-router-dom'


const BrandSlider = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(brandslideraction)
    }, [dispatch]);
    const data = useSelector(state => state.BrandSliderReducer?.sliderproduct)
    // console.log("d", data)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <>
            <div>
                <div className="trends">
                    <div className="container">
                        <div className="trends-caption">
                            <h2>Shop brands you know and love</h2>
                            <h3>Greate stuff New and used items added every day</h3>
                        </div>
                        <div className="trends-wrap">
                            <div className="trends-list">
                                <Slider {...settings}>
                                    {data.map((item, index) => {
                                        return (
                                            <div className="trend-gallery" key={index}>

                                                {/* <a className="trend-img" href="/product-listing-page/Oppo?tagId=609137699ffe051facbda2b7">


                                        <img src={item.brandlogo} alt="trend-img" />  </a>*/}



                                                <Link to={`/product-listing-pages/${item.name}`}><img src={item.brandlogo} alt="trend-img" />  </Link>
                                                <strong>{item.name}</strong>

                                            </div>
                                        )
                                    })}</Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandSlider