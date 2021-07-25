import React from 'react'
import history from '../../history'
import Loading from '../Loading/loading'

import './worldTable.css'

const WorldTable = ({ data, title }) => {

    const dataMap = data.map((data, index) => {
        return (
            <tr key={index} onClick={() => {
                history.push(`/world/${data.ThreeLetterSymbol.toUpperCase()}/${data.Country}`)
        }}>
            <td>{index + 1}</td>
                <td>{data.Country}</td>
                <td>{data.Population}<i class="far fa-user"></i></td>
                <td>{data.ActiveCases}<i class="far fa-user"></i></td>
                <td>{data.TotalCases}<i class="far fa-user"></i></td>
                <td>{data.TotalRecovered}<i class="far fa-user"></i></td>
                <td>{data.TotalDeaths}<i class="far fa-user"></i></td> 
                <td>{data.Recovery_Proporation}%</td>
                <td>{data.TotalTests}<i class="far fa-user"></i></td>
                <td>{data.rank}</td>
        </tr>
        )
        
    })

    if (data.length !== 0) {
        return (
            <div className='worldTable'>
                <div className='worldTable__container'>
                    <h1 className='worldTable__container-title'>{title}</h1>
                    <div className='worldTable__container-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>num</th>
                                    <th>Country</th>
                                    <th>Population<i class="far fa-user"></i></th>
                                    <th>Active Cases<i class="far fa-user"></i></th>
                                    <th>Total Cases<i class="far fa-user"></i></th>
                                    <th>Total Recovered<i class="far fa-user"></i></th>
                                    <th>Total Deaths<i class="far fa-user"></i></th>
                                    <th>Recovery_Proporation</th>
                                    <th>Total Tests<i class="far fa-user"></i></th>
                                    <th>World Ranking</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataMap}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    return <Loading/>
    
}

export default WorldTable