import React from 'react'
import { useSelector } from 'react-redux'

import './vaccinephase3.css'
import VaccineHeroContainer from '../../components/vaccine/vaccine-heroContainer'
import VaccineTable from '../../components/vaccine/vaccineTable'

const VaccinePhase3 = () => {
    const phase3Vaccine = useSelector((state) => state.vaccine.phase3Vaccine)

    return (
        <div className='vaccineph3'>
            <VaccineHeroContainer title='Phase3-Vaccine' content="Vaccine is given to thousands of people and tested for efficacy and safety. Phase III studies are randomized controlled multicenter trials during which, the vaccine is given to a number of 300-3000 healthy people to investigate the definite efficacy and effectiveness. It is also called the 'pre-marketing phase' because it actually measures consumer response to the vaccine." />
            <div className="vaccineph3__container">
                <div style={{width:'100%',padding:'0 2%'}}>
                    <VaccineTable data={phase3Vaccine}/>
                </div>
            </div>
        </div> 

     )
}

export default VaccinePhase3