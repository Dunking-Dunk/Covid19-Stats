import React from 'react'
import { useSelector } from 'react-redux'

import './vaccineFda.css'
import VaccineHeroContainer from '../../components/vaccine/vaccine-heroContainer'
import VaccineTable from '../../components/vaccine/vaccineTable'

const VaccineFda = () => {
    const approvedVaccine = useSelector((state) => state.vaccine.approvedVaccine)

    return (
        <div className='vaccinefda'>
            <VaccineHeroContainer title='FDA-Approved-Vaccine' content="it means that the U.S. Food and Drug Administration has determined that the benefits of the product outweigh the known risks for the intended use." />
            <div className="vaccinefda__container">
                <div style={{width:'100%',padding:'0 2%'}}>
                    <VaccineTable data={approvedVaccine}/>
                </div>
            </div>
        </div> 

     )
    
}

export default VaccineFda