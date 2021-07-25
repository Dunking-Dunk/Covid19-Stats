import React from 'react'
import { useSelector } from 'react-redux'

import WorldTable from '../../components/world/worldTable'

const AustraliaScreen = () => {
    const australiaData = useSelector((state) => state.covid.covidAustraliaData)

    return <WorldTable title='Australia' data={australiaData}/>
}

export default AustraliaScreen