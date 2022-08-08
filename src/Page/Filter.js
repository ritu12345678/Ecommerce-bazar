import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SearchBarAction from '../Store/Action/SearchBarAction'
import ProductCard from "../Component/ProductCard"
import FilterPanel from '../Component/FilterPanel';

const Filter = () => {
    const dispatch = useDispatch()
    const { cat_name, cat_id } = useParams();
    // console.log("===>", Title)
    const data = useSelector(state => state.SearchBarReducer?.SearchBarData)
    // console.log(data)

    useEffect(() => {

        SearchBarAction(dispatch, { category: [cat_name] })

    }, [cat_name, dispatch])



    return (
        <>
            {
                data ? data.map((datainfo, index) => {
                    return (

                        <ProductCard data={datainfo} key={index} />
                    )
                })

                    : null}

            <FilterPanel catId={cat_id}
                catname={cat_name} />
        </>
    )
}

export default Filter