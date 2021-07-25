import React from 'react'

import './stateStats.css'

const StateStats = ({ data }) => {
    const stateStats = data.map((stat) => {
        return (
            <tr key={stat.province}>
                <td>{stat.province}</td>
                <td>{stat.active}  <i class="far fa-user"></i></td>
                <td>{stat.confirmed}  <i class="far fa-user"></i></td>
                <td>{stat.recovered}  <i class="far fa-user"></i></td>
                <td>{stat.deaths}  <i class="far fa-user"></i></td>
                <td>{stat.Recovery_Proporation}%</td>
                <td>{stat.Case_Fatality_Rate}%</td>
            </tr>
        )
    })
    return (
        <div className='country__stats-state'>
            <table> 
                <tr>
                    <th>State</th>
                    <th>Active Cases</th>
                    <th>Total Cases</th>
                    <th>Total Recovered</th>
                    <th>Total Deaths</th>
                    <th>Recovery Proporation</th>
                    <th>Case Fatality Rate</th>
                </tr>
                {stateStats}
            </table>
        </div>
    )
}

export default StateStats