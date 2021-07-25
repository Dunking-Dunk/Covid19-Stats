import React from 'react'
import {Route} from 'react-router-dom'

import ContinentScreen from '../screens/ContinentScreens/continent'
import AfricaScreen from '../screens/ContinentScreens/africa'
import EuropeScreen from '../screens/ContinentScreens/europe'
import NorthAmericaScreen from '../screens/ContinentScreens/namerica'
import SouthAmericaScreen from '../screens/ContinentScreens/samerica'
import AustraliaScreen from '../screens/ContinentScreens/australia'
import AboutCountry from '../screens/ContinentScreens/about_country'

const WorldRoute = () => {
    return (
        <>
            <Route component={ContinentScreen} path='/world' />
            <Route component={AfricaScreen} path='/world/africa' />
            <Route component={EuropeScreen} path='/world/europe' />
            <Route component={NorthAmericaScreen} path='/world/north-america' />
            <Route component={SouthAmericaScreen} path='/world/south-america' />
            <Route component={AustraliaScreen} path='/world/australia' />
            <Route component={AboutCountry} path='/world/:code/:name'/>
        </>
    )
}

export default WorldRoute