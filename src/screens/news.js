import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {getCoronaVirusNews, getHealthNews, getVaccineNews, reset} from '../Storage/actions/index'
import './news.css'
import Card from '../components/newscard/card'
import Carousel from '../components/slider/slider';
import Loading from '../components/Loading/loading'

const NewsScreen = () => {
    const dispatch = useDispatch()
    const covidNews = useSelector((state) => state.news.coronaNews)
    const vaccineNews = useSelector((state) => state.news.vaccineNews)
    const healthNews = useSelector((state) => state.news.healthNews)
    
    useEffect(() => {
        dispatch(reset())
        dispatch(getCoronaVirusNews())
        dispatch(getVaccineNews())
        dispatch(getHealthNews())
    }, [dispatch])

    const TodayNewsMap = (data) => data.map((news) => news.data.map((data) => {if (parseInt(data.imageFileName.slice(8, 10)) === new Date().getDate()) {
        return <Card data={data} />
    }}))
    
    const YesterdayNewsMap = (data) => data.map((news) => news.data.map((data) => {if (parseInt(data.imageFileName.slice(8, 10)) !== new Date().getDate()) {
                return <Card data={data} />
    }
    }))
    

    const TodayCovidNews = TodayNewsMap(covidNews)
    const PreviousCovidNews = YesterdayNewsMap(covidNews)

    const TodayVaccineNews = TodayNewsMap(vaccineNews)
    const PreviousVaccineNews = YesterdayNewsMap(vaccineNews)

    const TodayHealthNews = TodayNewsMap(healthNews)
    const PreviousHealthNews = YesterdayNewsMap(healthNews)

 return (
        <div className='news'>
            <div className='news__container'>
             <h1 className='news__container-title'>News</h1>
             <div style={{marginBottom:'10px'}}>
                <h2 style={{fontSize:40, fontWeight:500, marginBottom: '10px'}}>Covid19 News</h2>
                <div className='news__container-corona'>
                    <h3 className='news__container-corona-title'>Today News</h3>
                    {TodayCovidNews.length !== 0 ? 
                    <div className='news__container-content'>
                        <Carousel data={TodayCovidNews}/>
                    </div>: <Loading/>}
                 </div>
                 <div className='news__container-corona'>
                     <h3 className='news__container-corona-title'>Previous News</h3>
                     {PreviousCovidNews.length !== 0 ? 
                    <div className='news__container-content'>
                        <Carousel data={PreviousCovidNews}/>
                    </div>: <Loading/>}
                </div>
                
             </div>
             <div style={{marginBottom:'10px'}}>
                <h2 style={{fontSize:40, fontWeight:500, marginBottom: '10px'}}>Vaccine News</h2>
                <div className='news__container-corona'>
                    <h3 className='news__container-corona-title'>Today News</h3>
                    {TodayVaccineNews.length !== 0 ? 
                    <div className='news__container-content'>
                        <Carousel data={TodayVaccineNews}/>
                    </div>: <Loading/>}
                </div>
                <div className='news__container-corona'>
                    <h3 className='news__container-corona-title'>Previous News</h3>
                    {PreviousVaccineNews.length !== 0 ? 
                    <div className='news__container-content'>
                        <Carousel data={PreviousVaccineNews}/>
                    </div>: <Loading/>}
                </div>
             </div>
             <div style={{marginBottom:'10px'}}>
                <h2 style={{fontSize:40, fontWeight:500, marginBottom: '10px'}}>Health News</h2>
                <div className='news__container-corona'>
                    <h3 className='news__container-corona-title'>Today News</h3>
                    {TodayHealthNews.length !== 0 ? 
                    <div className='news__container-content'>
                        <Carousel data={TodayHealthNews}/>
                    </div>: <Loading/>}
                </div>
                <div className='news__container-corona'>
                    <h3 className='news__container-corona-title'>Previous News</h3>
                    {PreviousHealthNews.length !== 0 ? 
                    <div className='news__container-content'>
                        <Carousel data={PreviousHealthNews}/>
                    </div>: <Loading/>}
                </div>
             </div>
             
            </div>
        </div>
    )
}

export default NewsScreen