import React, { useEffect } from 'react'
import BrandSlider from '../Component/BrandSlider'


import { getHomePageAction } from '../Store/Action/GetHomePageAction'
import { useDispatch, useSelector } from 'react-redux'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import SellingSlider from '../Component/SellingSlider'
import TrendSlider from '../Component/TrendSlider'
import SeasonalDecorslider from '../Component/SeasonalDecorslider'
import UpgradeWorkspaceSlider from '../Component/UpgradeWorkspaceSlider'
import KitchenDinningSlider from '../Component/KitchenDinningSlider'
import ActiveWearSlider from '../Component/ActiveWearSlider'
import CozyAtHomeSlider from '../Component/CozyAtHomeSlider'
import LuxeConnoisseurSlider from '../Component/LuxeConnoisseurSlider'
import ReviewCardSlider from '../Component/ReviewCardSlider'



const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHomePageAction)
    }, [dispatch]);

    const Homepagedata = useSelector(state => state.HomePageReducer?.Homepagedata)
    // console.log(Homepagedata)

    const homepagesection = (item, id) => {

        switch (item.name?.toLowerCase()) {
            case "see what's selling":
                return (
                    < SellingSlider data={item} key={id} />
                )
            case "trend alerts":
                return (
                    <TrendSlider data={item} key={id} />
                )
            case "seasonal decor":
                return (
                    <SeasonalDecorslider data={item} key={id} />
                )
            case "upgrade your workspace":
                return (
                    <UpgradeWorkspaceSlider data={item} key={id} />
                )
            case "kitchen & dining":
                return (
                    <KitchenDinningSlider data={item} key={id} />
                )

            case "cozy at home":
                return (
                    <CozyAtHomeSlider data={item} key={id} />
                )
            case "luxe connoisseur":
                return (
                    <LuxeConnoisseurSlider data={item} key={id} />
                )
            case "activewear":
                return (
                    <ActiveWearSlider data={item} key={id} />
                )
            case "recent reviews from buyers and sellers":
                return (
                    <ReviewCardSlider data={item} key={id} />
                )
            default: return;
        }
    }

    return <>


        <BrandSlider />
        {
            Homepagedata ? Homepagedata.map((item, id) => homepagesection(item, id)) : null
        }

    </>


}

export default HomePage