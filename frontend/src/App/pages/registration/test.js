import React, { Component } from 'react'
import {Root} from  './tabbar2'

export default class test extends Component {
    render() {
        return (
            <div className="container-fluid">
                
            <div className="row">
                <div className="col-md-3">
                    <Root/>
                </div>
                <div className="col-md-3"></div>
            </div>
            </div>
        )
    }
}
