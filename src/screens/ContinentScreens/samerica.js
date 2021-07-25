import React from 'react'
import { useSelector } from 'react-redux'

import WorldTable from '../../components/world/worldTable'

const SouthAmericaScreen = () => {
    const southAmericaData = useSelector((state) => state.covid.covidSAmericaData)

    return <WorldTable title='South America' data={southAmericaData}/>
}

export default SouthAmericaScreen