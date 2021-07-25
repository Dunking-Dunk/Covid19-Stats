import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import VaccineHeroContainer from '../../components/vaccine/vaccine-heroContainer'
import {getAllVaccine, getPhase4Vaccine, getPhase3Vaccine, getPhase2Vaccine, getPhase1Vaccine, getApprovedVaccine} from '../../Storage/actions/index'
import './vaccine.css'
import VaccineTable from '../../components/vaccine/vaccineTable'
import vaccineimg from '../../constants/Images/vaccine.jpg'

const VaccineScreen = () => {
    const dispatch = useDispatch()
    const allVaccine = useSelector((state) => state.vaccine.allVaccine)

    useEffect(() => {
        dispatch(getAllVaccine())
        dispatch(getPhase4Vaccine())
        dispatch(getPhase3Vaccine())
        dispatch(getPhase2Vaccine())
        dispatch(getPhase1Vaccine())
        dispatch(getApprovedVaccine())
    }, [dispatch])

    return (
        <div className="vaccine">
            <div className='vaccine__container'>      
                <h1 className='vaccine__container-title'>Vaccines</h1>
                <div className='vaccine__container-header'>
                    <div className='vaccine__container__header-container'>
                        <Link className='vaccine__container__header-item' style={{backgroundColor: window.location.pathname === '/vaccine' && '#B5EAEA'}} to='/vaccine'>All Vaccine</Link>
                        <Link className='vaccine__container__header-item' to='/vaccine/FDA-vaccine' style={{backgroundColor: window.location.pathname === '/vaccine/FDA-vaccine' && '#B5EAEA'}}>FDA-Approved-Vaccine</Link>
                        <Link className='vaccine__container__header-item'style={{backgroundColor: window.location.pathname === '/vaccine/Phase4-vaccine' && '#B5EAEA'}} to='/vaccine/Phase4-vaccine'>Phase4 Vaccine</Link>
                        <Link className='vaccine__container__header-item' to='/vaccine/Phase3-vaccine' style={{backgroundColor: window.location.pathname === '/vaccine/Phase3-vaccine' && '#B5EAEA'}}>Phase3 Vaccine</Link>
                        <Link className='vaccine__container__header-item' to='/vaccine/Phase2-vaccine' style={{backgroundColor: window.location.pathname === '/vaccine/Phase2-vaccine' && '#B5EAEA'}}>Phase2 Vaccine</Link>
                        <Link className='vaccine__container__header-item' to='/vaccine/Phase1-vaccine' style={{backgroundColor: window.location.pathname === '/vaccine/Phase1-vaccine' && '#B5EAEA'}}>Phase1 Vaccine</Link>
                    </div>
                </div>
                {window.location.pathname === '/vaccine' && 
                    (
                    <div className='allvaccine'>
                        <VaccineHeroContainer title='All Vaccines' content="Here you can find all of the developing or approved vaccines in every phase. You can sort the table based on each columns or search for a unique vaccine name."/>
                        <div className='allvaccine-container'>
                            <div style={{ width: '100%', padding: '0 2%', overflowX: 'scroll'}}>
                                <VaccineTable data={allVaccine}/>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default VaccineScreen
