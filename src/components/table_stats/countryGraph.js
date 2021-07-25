import React from 'react'
import {Line} from 'react-chartjs-2'

const Graph = ({ month_stats, country_data }) => {
    const active_cases = month_stats.map((stat) => stat.new_cases).reverse()
    const total_cases = month_stats.map((stat) => stat.total_cases/50).reverse()
    const dates = month_stats.map((stat) => stat.date).reverse()
    const total_deaths = month_stats.map((stat) => stat.total_deaths).reverse()
    const chartData = {
        labels: dates,
        datasets: [
            {
                label: 'Number of Active cases',
                data: active_cases,
                backgroundColor: ['#fff'],
                borderWidth: 2,
                borderColor: ['#185ADB']
            }, {
                label: 'Number of Total cases per 50 cases',
                data: total_cases,
                backgroundColor: ['#fff'],
                borderWidth: 2,
                borderColor: ['#52006A']
            },
            {
                label: 'Number of Total Death',
                data: total_deaths,
                backgroundColor: ['#fff'],
                borderWidth: 2,
                borderColor: ['#CD113B']
            }
        ]
}
    const options = {
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: `${country_data} covid-19 cases`
        }
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Dates'
            }
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Total Covid-19 Active Cases'
            }
        }
    }
}

    return <Line data={chartData} options={options}/>
}

export default Graph