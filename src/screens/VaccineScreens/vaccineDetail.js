import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import './vaccineDetail.css'
import { getVaccineData } from '../../Storage/actions/index'
import Loading from '../../components/Loading/loading'

const VaccineDetail = (props) => {
    const dispatch = useDispatch()
    const vaccine = useSelector((state) => state.vaccine.vaccine)[0]

    useEffect(() => {
        dispatch(getVaccineData(props.match.params.category, props.match.params.name))
    }, [dispatch])

    if (vaccine && vaccine.trimedName === props.match.params.name) {
        return (
            <div className='vaccine__detail'>
                <div className='vaccine__detail-container'>
                    <h1 className='vaccine__detail-title'>{vaccine.trimedName}</h1>
                    <h2 className='vaccine__detail-category'>{vaccine.category}</h2>
                    <div className='vaccine__detail-hero'>
                        <h3><span>Phase: </span>{vaccine.phase}</h3>
                        <h3><span>FDAApproved: </span>{vaccine.FDAApproved === undefined ? 'Not Yet Approved' : 'Approved'}</h3>
                        <h3><span>LastUpdated: </span>{moment(new Date(vaccine.lastUpdated)).fromNow()}</h3>
                    </div>
                    <div className='vaccine__detail-main'>
                        <h3><span>Description: </span>{vaccine.description}</h3>
                        <h3><span>Developers: </span>{vaccine.developerResearcher}</h3>
                        <h3><span>Next Steps: </span>{vaccine.nextSteps}</h3>
                    </div>
                    <h4>clinicalTrialsForCovid19: {vaccine.clinicalTrialsForCovid19}</h4>
                </div>
            </div>
        )
    }

    return <Loading/>
  
}  

export default VaccineDetail