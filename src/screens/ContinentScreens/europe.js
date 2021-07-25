import React from 'react'
import {useSelector } from 'react-redux'

import WorldTable from '../../components/world/worldTable'

const EuropeScreen = () => {
    const europeData = useSelector((state) => state.covid.covidEuropeData)

    return <WorldTable title='Europe' data={europeData}/>
}

export default EuropeScreen