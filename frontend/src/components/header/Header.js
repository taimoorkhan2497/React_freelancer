import React, { Component } from 'react';
import Header_Logo from './Header-Logo'
import './Header.css'
import Header_Menu from './Header-Menu'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
             <header>
            <Header_Logo/>
            <Header_Menu/>
        </header>);
    }
}
 
export default Header;