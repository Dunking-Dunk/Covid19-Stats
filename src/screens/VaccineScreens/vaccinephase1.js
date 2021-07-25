import React from 'react'
import {useSelector } from 'react-redux'

import './vaccinephase1.css'
import VaccineHeroContainer from '../../components/vaccine/vaccine-heroContainer'
import VaccineTable from '../../components/vaccine/vaccineTable'

const VaccinePhase1 = () => {
    const phase1Vaccine = useSelector((state) => state.vaccine.phase1Vaccine)

    return (
        <div className='vaccineph1'>
            <VaccineHeroContainer title='Phase1-Vaccine' content="Small groups of healthy adult volunteers receive the vaccine to test for safety.The subject who receives the vaccine is observed until several half- lives of the vaccine have passed.During this phase, the researchers assess the safety(pharmacovigilance), tolerability, pharmacokinetics, and pharmacodynamics of a vaccine.In addition, Phase I clinical trials normally include dose - ranging, also called dose escalation studies, so that the best and safest dose can be found and the safety window of the vaccine can be estimated." />
            <div className="vaccineph1__container">
                <div style={{width:'100%',padding:'0 2%'}}>
                    <VaccineTable data={phase1Vaccine}/>
                </div>
            </div>
        </div> 

     )
}

export default VaccinePhase1