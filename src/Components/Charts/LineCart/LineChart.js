import React from 'react'
import './LineChart.css'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip

} from 'chart.js'
import { Paper } from '@mui/material'


ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

const LineChart = () => {

    const data = {
        labels: [0, 5, 15, 20, 30, 40, 50],
        datasets: [{
            label: 'Clients',
            data: [0, 5, 15, 20, 40, 75, 87, 100],
            backgroundColor: '#548CFF',
            borderColor: '#548CFF',
            borderWidth:1.5,
            // pointBorderColor: 'aqua',
            fill: false,
            tension: 0,
            pointStyle:'rectRot',
            pointLabel: {
                display: true, // Set to true to display data labels
                font: {
                    size: 12, // You can customize the font size here
                },
            },
        }],
    };
    
    const options = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 12, // Decrease the font size as needed
                    },
                },
            },
        },
    };
    
    


  return (
    <Paper elevation={2} className='lineChart w-100 d-flex justify-content-center align-items-center p-2 '>

    <div className=' chart-cnt d-flex justify-content-center'>
    <span className='clients'>Clients</span>
    <Line
    data={ data }
    options={ options }
    />
    <span className='days'>Days</span>
    </div>

    </Paper>
  )
}

export default LineChart