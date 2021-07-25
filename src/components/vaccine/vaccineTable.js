import React from 'react'
import moment from 'moment'
import history from '../../history'

import './vaccineTable.css'
import Loading from '../../components/Loading/loading'

const VaccineTable = ({ data }) => {

    const vaccineMap = data.map((data, index) => {
        return (
            <tr key={data.index} onClick={() => history.push(`/vaccine/${data.trimedCategory}/${data.trimedName}`)}>
                <td>{index + 1}</td>
                <td>{data.trimedName}</td>
                <td>{data.category}</td>
                <td>{data.phase}</td>
                <td>{data.FDAApproved === 'undefined' ? 'Not Approved Yet': 'Approved'}</td>
                <td>{data.description}</td>
                <td>{data.funder === 'undefined' ? 'No Data': data.funder}</td>
                <td>{moment(new Date(data.lastUpdated)).fromNow()}</td>
            </tr>
        )
    })

    if (data.length !== 0) {
        return (
            <table>
                <thead>
                    <tr>
                        <th>num</th>
                        <th>Company</th>
                        <th>Category</th>
                        <th>Phase</th>
                        <th>FDA Approved</th>
                        <th>Description</th>
                        <th>Funder</th>
                        <th>LastUpdated</th>
                    </tr>
                </thead>
                <tbody>
                    {vaccineMap}
                </tbody>
            </table>
        )
    }
    
    return <Loading/>
}

export default VaccineTable