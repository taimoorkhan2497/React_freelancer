import React, { Component } from 'react'
import "../../../assets/css/custom.css";

import list from '../../pages/helper/api'


export default class ContractNav extends Component {
   constructor(props) {
       super(props)
       this.state = {
        
       }
    
   }
   componentDidMount() {
    // console.log("show response:");
    list('api/v1/contract/')
    .then((response)=>{
      console.log("show response:",response.data);
      const {...rest} = response.data;
      this.setState(rest);
       }) 
   }

    render() {
        return (
            <div className="contract-left">
                <ul className="c1">
                <li>
                    <p className="p-3">Budget <span className="budget">SAR {this.state?.job?.budget}</span></p>
                </li>
                <li>
                    <p className="p-3">Paid <span className="paid"> SAR {this.state?.job?.budget}</span></p>
                </li>
                <li>
                    <p className="p-3">Remaining <span> SAR {this.state?.job?.budget}</span></p>
                </li>
                <li>
                    <p className="p-3"><b>Total earning <span> SAR {this.state?.job?.budget}</span></b></p>
                </li>
                    
                </ul>
            </div>
        )
    }
}
