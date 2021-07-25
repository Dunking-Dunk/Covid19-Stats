import React from 'react'

import './vaccine-heroContainer.css'

const VaccineHeroContainer = ({title, content}) => {
    return (
        <div className='vaccine__hero-container'>
            <h1 className='vaccine__hero__container-title'>{title}</h1>
            <p className='vaccine__hero__container-description'>{content}</p>
        </div>
    )
}

export default VaccineHeroContainer