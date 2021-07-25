import React from 'react'

import './countryStats.css'

const countryStats = ({country_data}) => {
    return (
        <div className='country__stats-country'>
                            <table>
                                <tr>
                                    <th>Active Cases</th>
                                    <th>{country_data.ActiveCases} <i class="far fa-user"></i></th>
                                </tr>
                                <tr>
                                    <td>Total Tests</td>
                                    <td>{country_data.TotalTests}<i class="far fa-user"></i></td>
                                </tr>
                                <tr>
                                    <td>Test %</td>
                                    <td>{country_data.Test_Percentage}%</td>
                                </tr>
                                <tr>
                                    <td>Current Cases</td>
                                    <td>{country_data.NewCases}<i class="far fa-user"></i></td>
                                </tr>
                                <tr>
                                    <td>Current Deaths</td>
                                    <td>{country_data.NewDeaths}<i class="far fa-user"></i></td>
                                </tr>
                                <tr>
                                    <td>Current Recovered</td>
                                    <td>{country_data.NewRecovered}<i class="far fa-user"></i></td>
                                </tr>
                                <tr>
                                    <td>Critical Cases</td>
                                    <td>{country_data.Serious_Critical }<i class="far fa-user"></i></td>
                                </tr>
                                <tr>
                                    <td>Total Cases</td>
                                    <td>{country_data.TotalCases}<i class="far fa-user"></i></td>
                                </tr>
                                <tr>
                                    <td>Total Deaths</td>
                                    <td>{country_data.TotalDeaths}<i class="far fa-user"></i></td>
                                </tr>
                                <tr>
                                    <td>Total Recovered</td>
                                    <td>{country_data.TotalRecovered}<i class="far fa-user"></i></td>
                                </tr>
                                
                                <tr>
                                    <td>Recovery %</td>
                                    <td>{country_data.Recovery_Proporation}%</td>
                                </tr>
                                <tr>
                                    <td>Infection Risk</td>
                                    <td>{country_data.Infection_Risk}%</td>
                                </tr>
                                <tr>
                                    <td>CaseFatality Rate</td>
                                    <td>{country_data.Case_Fatality_Rate}%</td>
                                </tr>
                            </table>    
        </div>
    )
}

export default countryStats