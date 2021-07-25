import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCountry6MonthData, getCountryStatesData, getCountryData } from '../../Storage/actions'
import CountryStats from '../../components/table_stats/countryStats'
import StateStats from '../../components/table_stats/stateStats'
import Graph from '../../components/table_stats/countryGraph'
import Loading from '../../components/Loading/loading'


const CountryScreen = (props) => {
    const dispatch = useDispatch()
    const country_data = useSelector((state) => state.covid.covidCountryData)
    const state_data = useSelector((state) => state.covid.covidCountryStateData)
    const month_stats = useSelector((state) => state.covid.covidCountryMonthData)

    useEffect(() => {
            dispatch(getCountry6MonthData(props.match.params.code))
            dispatch(getCountryStatesData(props.match.params.code))
            dispatch(getCountryData(props.match.params.code,props.match.params.name))
    }, [dispatch])

    if (country_data && month_stats && country_data.Country === props.match.params.name) {
        return (
            <div className='country'>
                <div className='country__container'>
                    <div style={{ display: 'flex', flex: 'row', justifyContent: 'center' , width: '100%', height: '100%', padding: '0px 10%'}}>
                        <h1 className='country__container-title'>{country_data.Country} 
                        </h1><h2 style={{ color: '#3E4149', fontWeight: 700 }}> {country_data.Continent}</h2>
                    </div>
                    <h2 style={{ textAlign: 'left', color: '#3E4149', fontWeight: 700}}>Covid Cases Ranking: {country_data.rank}</h2>
                    <h2 style={{ textAlign: 'left', color: '#3E4149', fontWeight: 700 }}>Total Population: {country_data?.Population?.slice(0, -6)} Million</h2>
                    <div className='country__stats__container-graph'>
                        <Graph month_stats={month_stats} country_data={country_data.Country} />
                    </div>
                    <div className='country__stats__container'>
                        <CountryStats country_data={country_data} />
                        {state_data && <StateStats data={state_data}/>}
                        
                    </div>
                </div>
            </div>
        )
    }
    return <Loading/>
    
}

export default CountryScreen