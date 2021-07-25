import React from 'react'
import { Router, Route } from 'react-router'

import history from './history'
import Header from './components/Header/header'
import CountryScreen from './screens/country'
import NewsScreen from './screens/news'
import VaccineRoute from './Routes/VaccineRoute'
import TreatmentScreen from './screens/treatment'
import Home from './screens/home'
import WorldRoute from './Routes/WorldRoute'
import Footer from './components/footer/footer'

const App = () => {
    return (
        <>
            <Router history={history}>
                <Header />
                <Route component={Home} path='/' exact />
                <WorldRoute/>
                <Route component={CountryScreen} path='/country' exact />
                <Route component={NewsScreen} path='/news' exact />
                <VaccineRoute /> 
                <Route component={TreatmentScreen} path='/treatment' exact />
                <Footer/>
            </Router>
        </>
    )
}

export default App