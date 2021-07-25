import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './treatment.css'
import { getAllTreatment } from '../Storage/actions'

const TreatmentScreen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTreatment())
    },[dispatch])
    return (
        <h1 style={{marginTop: '80px'}}>treatment</h1>
    )
}

export default TreatmentScreen