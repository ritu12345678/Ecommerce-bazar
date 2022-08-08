import React, { useEffect, useState } from 'react'
import mainmenuAction from '../Store/Action/MainmenuAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SellerForm from './SellerForm';


const HeaderMenu = () => {

    // const navigate = useNavigate()





    const dispatch = useDispatch()
    const MainMenuCategory = useSelector(state => state.MainMenuReducer.payload)
    // console.log(MainMenuCategory)
    useEffect(() => {
        dispatch(mainmenuAction)
    }, [dispatch])
    return (<>

        <div className='container'>
            <div className='main-menu'>
                <ul className='menu'>
                    {MainMenuCategory ? MainMenuCategory.map((item, ind) => {
                        return (<Link to={`/product-filter-page/${item.slug}/${item._id}`} key={ind}><li className='sublist-menu ' >{item.name}</li></Link>)
                    }) : null}

                </ul>
                {localStorage.getItem("logintoken") ?
                    <Link to="/sellerproduct"><div className="header-sell">

                        <span className=" sell-text">

                            <span className=" sell-text">Register as a seller</span>

                        </span>

                    </div></Link> :
                    <Link to="/sellerRegistration"><div className="header-sell">

                        <span className=" sell-text">

                            <span className=" sell-text">Register as a seller</span>

                        </span>

                    </div></Link>}


            </div>


        </div>
    </>
    )
}

export default HeaderMenu