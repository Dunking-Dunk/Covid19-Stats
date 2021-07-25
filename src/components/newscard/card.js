import React from 'react'

import './card.css'

const Card = ({ data }) => {
    return (
        <div className='card' style={{ backgroundImage: `url(${data.urlToImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={() =>
            window.open(data.link, '_blank') }>
            <div className='card__container'>
                <h1>{data.title}</h1>
                <h3>{data.content.replace(/(<([^>]+)>)/ig, '').slice(0, -15)}....</h3>
                <p>{data.reference}</p>
                <p>date: {data.imageFileName.slice(0,15)}</p>
            </div>
    </div>
    )
}

export default Card

