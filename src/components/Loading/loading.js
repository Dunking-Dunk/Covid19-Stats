import React from 'react'

import './loading.css'

import covid19 from '../../constants/Images/covid19.jpg'

const Loading = () => {
    return <div className='loadingContainer'>
        <img src={covid19} className='loading-img'/>
    </div>
}

export default Loading