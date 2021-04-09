import React, { Component } from 'react';
import DefaultMenu from './DefaultMenu';

class Header_Menu extends Component {
    state = {  }
    render() { 
        return (
        <div class="menu-area">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 menus-header">
                        <DefaultMenu />
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default Header_Menu;