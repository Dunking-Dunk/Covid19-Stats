import React from 'react'
import {useSelector } from 'react-redux'

import WorldTable from '../../components/world/worldTable'

const AfricaScreen = () => {
    const africaData = useSelector((state) => state.covid.covidAfricanData)

    return <WorldTable title='Africa' data={africaData}/>

}

export default AfricaScreen