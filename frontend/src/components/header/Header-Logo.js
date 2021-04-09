import React, { Component } from 'react';
import tuwaiqlogo from '../../components/tuwaiqlogo.svg'
import {Link} from 'react-router-dom';


class Header_Logo extends Component {
    state = {  }
    render() { 
        return (
            <div class="header-area">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-6 col-sm-6 col-md-6 pl-0">
                            <Link to='/' className="navbar-logo">
                                <img src={tuwaiqlogo} alt="Logo"></img>
                            </Link>
                        </div>
                        <div class="col-6 col-sm-6 col-md-6 pt-3 pr-0">
                            <div class="post-project float-right">
                                <div class="btn btn-warning text-white btn-lg button-color">
                                    <a class="popup-with-form" href="#">Post a Project</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> );
    }
}
 
export default Header_Logo;