import React from 'react'
import './Button.css'
// import {Link} from 'react-router-dom';


const STYLES = ['btn--primary','btn--yellow','btn--yellow1', 'btn--white','btn--Yellow','btn--project'];

const SIZES = ['btn--medium','btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    value
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0]

    return (
        // <Link to='/' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {value}
            </button>
        // </Link>
    )
};

export default Button