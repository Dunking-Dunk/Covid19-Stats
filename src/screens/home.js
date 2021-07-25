import React, { useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'

import { getWorldData, reset } from '../Storage/actions/index'
import './home.css'
import About_covid from '../components/About_Covid/about_covid'
import history from '../history'
import covid19 from '../constants/Images/covid19.jpg'


const Home = () => {
    const dispatch = useDispatch()
    const covidWorldStats = useSelector((state) => state.covid.covidWorldData[0])

    useEffect(() => {
        dispatch(reset())
        dispatch(getWorldData())
    }, [dispatch])

        return (
            <div className='home'>
                <div className='home__container'>
                    <div className='home__container__main'>
                        <div>
                            <h1>Covid-19 Stats</h1>
                            <p>This website is made for awareness of covid-19.<br />
                                you can view covid-19 stats and Latest news.<br />
                                covid stats are available for all country.<br />
                                You can also view all type of vaccines
                            </p>
                        </div>
                        <div>
                            <h3>View your country covid cases</h3>
                            <button onClick={() => history.push('/country')}>View Here</button>
                        </div>
                    </div>
                    {covidWorldStats &&  <div className='home__container-hero'>
                        <h1 className='home__container-hero-title'>World Covid Stats</h1>
                        <div className='home__hero-container-active'>
                            <h1 className='home__hero-container-active-title'>Active Cases</h1>
                            <h1 style={{ color: '#323232' }}>{covidWorldStats.ActiveCases} <i class="fas fa-users"></i></h1>
                        </div>
                        <div className='home__hero'>
                            <div className='home__hero-container'>
                                <h2>Total New Case</h2>
                                <h4>{covidWorldStats.NewCases} <i class="fas fa-users"></i></h4>
                            </div>
                            <div className='home__hero-container'>
                                <h2>Total New Deaths</h2>
                                <h4>{covidWorldStats.NewDeaths} <i class="fas fa-users"></i></h4>
                            </div>
                            <div className='home__hero-container'>
                                <h2>Total New Recovered</h2>
                                <h4>{covidWorldStats.NewRecovered} <i class="fas fa-users"></i></h4>
                            </div>
                        </div>

                        <div className='home__hero'>
                            <div className='home__hero-container'>
                                <h2>Total Cases</h2>
                                <h4>{covidWorldStats.TotalCases} <i class="fas fa-users"></i></h4>
                            </div>
                            <div className='home__hero-container'>
                                <h2>Total Deaths</h2>
                                <h4>{covidWorldStats.TotalDeaths} <i class="fas fa-users"></i></h4>
                            </div>
                            <div className='home__hero-container'>
                                <h2>Total Recovered</h2>
                                <h4>{covidWorldStats.TotalRecovered} <i class="fas fa-users"></i></h4>
                            </div>
                        </div>
                    </div>}
                    <div style={{width: '100%', height: '100%', margin: '30px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
                        <img src={covid19} className='home__container__main-img'/>
                    </div>
                    <About_covid/>
                </div>
            </div>
        )

}

export default Home