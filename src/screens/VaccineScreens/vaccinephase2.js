import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './vaccinephase2.css'
import VaccineHeroContainer from '../../components/vaccine/vaccine-heroContainer'
import VaccineTable from '../../components/vaccine/vaccineTable'

const VaccinePhase2 = () => {
    const phase2Vaccine = useSelector((state) => state.vaccine.phase2Vaccine)

    return (
        <div className='vaccineph2'>
            <VaccineHeroContainer title='Phase2-Vaccine' content="Vaccine is given to people who have characteristics (such as age and physical health) similar to those for whom the new vaccine is intended.In Phase II the goal is to test whether the drug has any biological activity or effect.About 50-300 volunteers are assigned to participate.This phase includes 2 steps; first determining clinical efficacy or biological activity('proof of concept' studies) and second determine the optimal dose at which the drug shows biological activity with minimal side- effects(‘definite dose - finding’ studies)" />
            <div className="vaccineph2__container">
                <div style={{width:'100%',padding:'0 2%'}}>
                    <VaccineTable data={phase2Vaccine}/>
                </div>
            </div>
        </div> 

     )
}

export default VaccinePhase2