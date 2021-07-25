import React from 'react'
import { useSelector } from 'react-redux'

import './vaccinephase4.css'
import VaccineHeroContainer from '../../components/vaccine/vaccine-heroContainer'
import VaccineTable from '../../components/vaccine/vaccineTable'

const VaccinePhase4 = () => {
    const phase4Vaccine = useSelector((state) => state.vaccine.phase4Vaccine)
    
    return (
        <div className='vaccineph4'>
            <VaccineHeroContainer title='Phase4-Vaccine' content="This phase is also called post marketing surveillance. Ongoing studies after the vaccine is approved and licensed, to monitor adverse events and to study long-term effects of the vaccine in the population" />
            <div className="vaccineph4__container">
                <div style={{width:'100%',padding:'0 2%'}}>
                    <VaccineTable data={phase4Vaccine}/>
                </div>
            </div>
        </div> 
        
     )
}

export default VaccinePhase4