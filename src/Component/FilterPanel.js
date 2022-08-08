import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import FilterAction from "../Store/Action/FilterAction";
import SearchBarAction from "../Store/Action/SearchBarAction";




const FilterPanel = ({ catId, catname }) => {
    console.log(catId)
    console.log(catname)
    const categoryId = catId

    const [checkedvalue, setCheckedvalue] = useState({

        brand: [],
        condition: [],
        delivery: [],
        category: [catname]


    })

    console.clear()
    console.log(checkedvalue?.category)
    const dispatch = useDispatch()
    const prouctlistFilterdata = useSelector(state => state.SearchBarReducer?.FilterData)


    const SidebarFilterData = useSelector(state => state.FilterReducer?.SidebarFilterdata)


    let reqpayload
    if (prouctlistFilterdata) {
        reqpayload = {
            categoryId: categoryId,
            FilterData: prouctlistFilterdata
        }
    }
    // console.log(reqpayload)
    useEffect(() => {
        const elements = document.querySelectorAll('.checkbox');
        console.clear();
        console.log(elements)
        elements.forEach(element => { element.checked = false }
        );
    }, [catname])
    useEffect(() => {

        if (reqpayload) {

            FilterAction(dispatch, reqpayload)
        }

    }, [prouctlistFilterdata])

    useEffect(() => {

        SearchBarAction(dispatch, checkedvalue)



    }, [checkedvalue])
    useEffect(() => {

        setCheckedvalue({

            brand: [],
            condition: [],
            delivery: [],
            category: [catname]


        })



    }, [catname])



    const changehandler = (e) => {
        // setIsChecked(e.target.checked)
        // console.log(isChecked)

        if (checkedvalue?.brand.includes(e.target.value) === false) {

            setCheckedvalue(prev => (
                {
                    ...prev,
                    brand: [...prev.brand, e.target.value],
                }

            ))
        }
        else {
            let copybrand = [...checkedvalue?.brand]
            copybrand.splice(copybrand.indexOf(e.target.value), 1)
            setCheckedvalue(prev => ({ ...prev, brand: copybrand }))


        } }

const conditionChangehandler = (e) => {

        if (checkedvalue?.condition.includes(e.target.value) === false) {

            setCheckedvalue(prev => (
                {
                    ...prev,
                    condition: [...prev.condition, e.target.value],
                }
            ))
        } else {
            let copycondition = [...checkedvalue?.condition]
            copycondition.splice(copycondition.indexOf(e.target.value), 1)
            setCheckedvalue(prev => ({ ...prev, condition: copycondition }))
        }

    }

    const deliveryChangehandler = (e) => {

        if (e.target.checked) {

            setCheckedvalue(prev => (
                {
                    ...prev,
                    delivery: [e.target.value],
                }
            ))
        }
    }




    console.log(checkedvalue)



    return <>


        <div className="plp-category"><i className="fa fa-times"></i>
            <div className="category-attr-block cat-box"><button
                className="accordian-header fal fa-angle-right active">Category</button>
                <div className="accordian-panel expanded">
                    <div className="category-head"><a href="">{SidebarFilterData ? SidebarFilterData.category?.CategoryName : null}</a>
                        <ul className="sub-cat-head">


                        </ul>
                    </div>
                </div>
            </div>
            <div className="brand-attr-block cat-box"><button className="accordian-header fal fa-angle-right active">brand</button>
                <div className="accordian-panel expanded">
                    <ul>
                        <div className="brand-input"><input type="text" placeholder="Search" className="brand-input" /></div>
                        {SidebarFilterData ? SidebarFilterData.brand?.map((curr, index) => {
                            return <li key={index} ><input type="checkbox" className="checkbox" value={curr._id} onChange={changehandler} name={curr.name} /><label>{curr.name}</label></li>

                        }) : null}
                    </ul>
                </div>
            </div>
            <div className="condition-attr-block cat-box"><button
                className="accordian-header fal fa-angle-right active">condition</button>
                <div className="accordian-panel expanded">
                    <ul>
                        {SidebarFilterData ? SidebarFilterData.condition?.map((curr, index) => {
                            return <li key={index} ><input type="checkbox" className="checkbox" value={curr.name} onChange={conditionChangehandler} /><label>{curr.name}</label></li>

                        }) : null}
                    </ul>
                </div>
            </div>
            <div className="-attr-block cat-box"><button className="accordian-header fal fa-angle-right active">delivery</button>
                {SidebarFilterData ? SidebarFilterData.delivery?.map((curr, index) => {
                    return <div className="accordian-panel expanded" key={index}><label className="price-lable"><span><input name="priceOptions"
                        type="radio" value={curr.name} onChange={deliveryChangehandler} /></span>
                        <div className="price-input">{curr.name}</div>
                    </label></div>

                }) : null}

            </div>
            <div className="price-sec"><button className="accordian-header fal fa-angle-right active">Price</button>
                <div className="accordian-panel expanded">
                    <div aria-disabled="false" className="input-range"><span
                        className="input-range__label input-range__label--min"><span
                            className="input-range__label-container">100</span></span>
                        <div className="input-range__track input-range__track--background">
                            <div className="input-range__track input-range__track--active" style={{ left: '0%', width: '100%', }}></div>
                            <span className="input-range__slider-container" style={{ position: "absolute", left: "0%" }}><span
                                className="input-range__label input-range__label--value"><span
                                    className="input-range__label-container">100</span></span>
                                <div aria-valuemax="4500" aria-valuemin="100" aria-valuenow="100" className="input-range__slider"
                                    draggable="false" role="slider" tabIndex="0"></div>
                            </span><span className="input-range__slider-container" style={{ position: "absolute", left: '100%' }}><span
                                className="input-range__label input-range__label--value"><span
                                    className="input-range__label-container">4500</span></span>
                                <div aria-valuemax="4500" aria-valuemin="100" aria-valuenow="4500" className="input-range__slider"
                                    draggable="false" role="slider" tabIndex="0"></div>
                            </span>
                        </div><span className="input-range__label input-range__label--max"><span
                            className="input-range__label-container">4500</span></span>
                    </div>
                </div>
            </div>
        </div>




    </>
}

export default FilterPanel;