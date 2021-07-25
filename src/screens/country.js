import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { getCountry6MonthData, getCountryStatesData, getCountryData } from '../Storage/actions'
import './country.css'
import CountryStats from '../components/table_stats/countryStats'
import StateStats from '../components/table_stats/stateStats'
import Graph from '../components/table_stats/countryGraph'


const CountryScreen = () => {
    const dispatch = useDispatch()
    const country_data = useSelector((state) => state.covid.covidCountryData)
    const state_data = useSelector((state) => state.covid.covidCountryStateData)
    const month_stats = useSelector((state) => state.covid.covidCountryMonthData)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            axios.get('https://discover.search.hereapi.com/v1/revgeocode', {
                params: {
                    at: `${pos.coords.latitude},${pos.coords.longitude
                }`,
                    lang: 'en-US',
                    apikey: '93-ISCQkOQMIo2M2t-mc3qL-nSgYJjcA51XoKklZfiA'
                 }
            }).then(({data}) => {
                const countryName = data.items[0].address.countryName
                const countryCode = data.items[0].address.countryCode
                dispatch(getCountry6MonthData(countryCode))
                dispatch(getCountryStatesData(countryCode))
                dispatch(getCountryData(countryCode, countryName))
            })
        })
    }, [dispatch, axios])

    if (country_data && state_data && month_stats) {
        return (
            <div className='country'>
                <div className='country__container'>
                    <div style={{ display: 'flex', flex: 'row', justifyContent: 'center' , width: '100%', height: '100%', padding: '0px 10%'}}>
                        <h1 className='country__container-title'>{country_data.Country} 
                        </h1><h2 style={{ color: '#3E4149', fontWeight: 700 }}> Asia</h2>
                    </div>
                    <h2 style={{ textAlign: 'left', color: '#3E4149', fontWeight: 700}}>Covid Cases Ranking: {country_data.rank}</h2>
                    <h2 style={{ textAlign: 'left', color: '#3E4149', fontWeight: 700 }}>Total Population: {country_data?.Population?.slice(0, 3)} Billion</h2>
                    <div className='country__stats__container-graph'>
                        <Graph month_stats={month_stats} country_data={country_data.Country} />
                    </div>
                    <div className='country__stats__container'>
                        <CountryStats country_data={country_data}/>
                        <StateStats data={state_data}/>
                    </div>
                </div>
            </div>
        )
    }

    return '...Loading'
        
    
}

export default CountryScreen