import React from 'react'

import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__container-left'>
                    <h1>Covid-19 Stats</h1>
                    <p>Copyright © 2021 Covid-19 Inc. All rights reserved</p>
                </div>
                <div className='footer__container-right'>
                    <a><i class="fab fa-instagram"></i> Instagram</a>
                    <a><i class="fab fa-facebook"></i> Facebook</a>
                    <a><i class="fab fa-github"></i> github</a>
                    <a><i class="fab fa-twitter"></i> twitter</a>
                </div >
            </div>
        </div>
    )
}

export default Footer