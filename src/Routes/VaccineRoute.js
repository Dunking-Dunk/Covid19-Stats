import React from 'react'
import { Route } from 'react-router'
import VaccineScreen from '../screens/VaccineScreens/vaccine'
import VaccineFda from '../screens/VaccineScreens/vaccineFda'
import VaccinePhase4 from '../screens/VaccineScreens/vaccinephase4'
import VaccinePhase3 from '../screens/VaccineScreens/vaccinephase3'
import VaccinePhase2 from '../screens/VaccineScreens/vaccinephase2'
import VaccinePhase1 from '../screens/VaccineScreens/vaccinephase1'
import VaccineDetail from '../screens/VaccineScreens/vaccineDetail'

export default () => {
    return (
        <>
                <Route component={VaccineScreen} path='/vaccine'/>
                <Route component={VaccineFda} path='/vaccine/FDA-vaccine' />
                <Route component={VaccinePhase4} path='/vaccine/Phase4-vaccine' />
                <Route component={VaccinePhase3} path='/vaccine/Phase3-vaccine' />
                <Route component={VaccinePhase2} path='/vaccine/Phase2-vaccine' />
                <Route component={VaccinePhase1} path='/vaccine/Phase1-vaccine' />
                <Route component={VaccineDetail} path='/vaccine/:category/:name'/>
        </>
    )
}