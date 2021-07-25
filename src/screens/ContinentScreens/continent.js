import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import { getWorldAsiaData, getWorldAfricanData, getWorldAustraliaData, getWorldEuropianData, getWorldNorthAmericaData, getWorldSouthAmericaData } from '../../Storage/actions/index'
import WorldTable from '../../components/world/worldTable'
import './continent.css'

const ContinentScreen = () => {
    const dispatch = useDispatch()
    const asiadata = useSelector((state) => state.covid.covidAsiaData)

    useEffect(() => {
        dispatch(getWorldAsiaData())
        dispatch(getWorldAfricanData())
        dispatch(getWorldSouthAmericaData())
        dispatch(getWorldNorthAmericaData())
        dispatch(getWorldEuropianData())
        dispatch(getWorldAustraliaData())
    }, [dispatch])

    return (
        <div className='world'>
            <div className='world__container'>
                <h1 className='world__container-title'>World</h1>
                <div className='world__container-header'>
                    <div className='world__container-header-container'>
                        <Link className='world__container-header-container-item' to='/world' style={{backgroundColor: window.location.pathname === '/world'&& '#B5EAEA'}}>Asia</Link>
                        <Link className='world__container-header-container-item' to='/world/africa' style={{backgroundColor: window.location.pathname === '/world/africa'&& '#B5EAEA'}}>Africa</Link>
                        <Link className='world__container-header-container-item' to='/world/europe' style={{backgroundColor: window.location.pathname === '/world/europe'&& '#B5EAEA'}}>Europe</Link>
                        <Link className='world__container-header-container-item' to='/world/north-america' style={{backgroundColor: window.location.pathname === '/world/north-america'&& '#B5EAEA'}}>North America</Link>
                        <Link className='world__container-header-container-item' to='/world/south-america' style={{backgroundColor: window.location.pathname === '/world/south-america'&& '#B5EAEA'}}>South America</Link>
                        <Link className='world__container-header-container-item' to='/world/australia' style={{backgroundColor: window.location.pathname === '/world/australia'&& '#B5EAEA'}}>Australia</Link>
                    </div>
                </div>
                {window.location.pathname === '/world' && <WorldTable data={asiadata} title='Asia'/>}
            </div>
        </div>
    )
}

export default ContinentScreen