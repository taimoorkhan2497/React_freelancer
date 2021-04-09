import React from 'react'
import './SiSoHero.css';
import bannerr from '../components/bannerr.svg';

function AsHero() {
    return (
        <div className='banner' style={{backgroundImage: `url(${bannerr})`}}>
            <button class="change-cover-btn pull-right">
          <i class="fa fa-camera"><span><a class="popup-with-form" href="#">Change Cover</a></span></i>
      </button>
        </div>
    )
}

export default AsHero

