import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './header.css'

const Header = () => {
    const [country, setCountry] = useState('')
    const header = useRef()
    const headerContainer = useRef()

    const mobileMenuClick = () => {
        header.current.classList.toggle('is-active')
        headerContainer.current.classList.toggle('active')
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            axios.get('https://discover.search.hereapi.com/v1/revgeocode', {
                params: {
                    at: `${pos.coords.latitude},${pos.coords.longitude
                        }`,
                    lang: 'en-US',
                    apikey: '93-ISCQkOQMIo2M2t-mc3qL-nSgYJjcA51XoKklZfiA'
                }
            }).then(({ data }) => {
                const countryName = data.items[0].address.countryName
                setCountry(countryName)
            })
        })
    }, [axios])
    
    return (
        <div className='header ' ref={header}>
            <div className='header__container'>
                <div className='header__container-left'>
                    <div className='header__logo'>
                        <h1>COVID-19</h1>
                    </div>
                </div>
                <div className='header__container-right' ref={headerContainer}>
                    <div className='header__list'>
                        <Link className='header__item' to='/'>Home</Link>
                        <Link className='header__item' to='/world'>World</Link>
                        <Link className='header__item' to='/country'>{country ? country: 'Your Country'}</Link>
                        <Link className='header__item' to='/news'>news</Link>
                        <Link className='header__item' to='/vaccine'>vaccine</Link>
                    </div>
                </div>
            </div>
            <div className='mobileApp' onClick={mobileMenuClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Header