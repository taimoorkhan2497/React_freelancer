import React from 'react'
import './SiSoHero.css';
import bannerr from '../components/bannerr.svg';

function SiSoHero() {
    return (
        <div className='banner' style={{backgroundImage: `url(${bannerr})`}}>
            <button class="btnback"><i class="fas fa-long-arrow-alt-left"></i> Back</button>
        </div>
    )
}

export default SiSoHero

