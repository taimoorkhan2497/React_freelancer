import React from 'react'
import './Card.css';
import cardimage from '../components/cardimage.png'
//import personalProfile from '../components/personalProfile.png'

function Card(props){
    
        return (
            <div className="cardd-container">
                <img src={cardimage} alt="Avatar"></img>
                <p className="type">{props.type}</p>
                <button><i class="far fa-arrow-alt-circle-right"></i></button>
            </div>
        )
    }


export default Card


