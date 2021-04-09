import React from 'react'
import './SiSoHero.css';
import bannerr from '../components/bannerr.svg';

function SiSoHero() {
    return (
        <div className='banner' style={{backgroundImage: `url(${bannerr})`}}>
            <button className="btnback"><i className="fas fa-long-arrow-alt-left"></i> Back</button>
        </div>
    )
}

export default SiSoHero

