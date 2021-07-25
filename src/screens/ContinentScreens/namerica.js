import React from 'react'
import { useSelector } from 'react-redux'

import WorldTable from '../../components/world/worldTable'

const NorthAmericaScreen = () => {
    const northAmericaData = useSelector((state) => state.covid.covidNAmericaData)


    return <WorldTable title='North America' data={northAmericaData}/>
}

export default NorthAmericaScreen