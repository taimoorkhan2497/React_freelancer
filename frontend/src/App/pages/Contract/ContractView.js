import React, { Component } from 'react'
import "../../../assets/css/custom.css";
import Button from '@material-ui/core/Button';

export default class ContractView extends Component {
    render() {
        return (
            <div className="contract-view">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="pt-3">Contract View</h2>
                    </div>
                    <div className="col-md-6">
                        <Button variant="contained">End Contract</Button>
                    </div>
                </div>
                
            </div>
        )
    }
}
