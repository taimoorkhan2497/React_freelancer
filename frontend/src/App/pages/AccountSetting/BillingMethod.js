import React, { Component } from 'react'
import  "./BillingMethod.css"
import YellowTick from "../../../assets/Yellow-Tick.png";
import GreenTick from "../../../assets/Green-Tick.png";


export default class BillingMethod extends Component {
    render() {
        return (
            <div className="billing-method">
                <div className="basic-plan y-h col-md-6">
                 <h2>SAR39<span className='bp-gray'>/month</span></h2>
                 <h3>Basic for designers</h3>
                 <p>Our government backed plan designed to keep your business legally and secures</p>
                 <hr></hr>
                 <ul>
                 <li className="listt"><img src={YellowTick} /><span>Secure your customer usage</span></li>
                 <li className="listt"><img src={YellowTick} /><span>View basic analytics</span></li>
                 <li className="listt"><img src={YellowTick} /><span>Up to 350 customer profiles</span></li>
                 <li className="listt"><img src={YellowTick} /><span>Custom network name</span></li>
                 </ul>
                 <button>Your current plan</button>
                </div>
                <div className="basic-plan g-h col-md-6">
                 <h2>SAR99<span className='bp-gray'>/month</span></h2>
                 <h3>Professional for designers</h3>
                 <p>Our government backed plan designed to keep your business legally and secures</p>
                 <hr></hr>
                 <ul>
                 <li className="listt"><img src={GreenTick} /><span>Collect marketing data</span></li>
                 <li className="listt"><img src={GreenTick} /><span>Design your emails</span></li>
                 <li className="listt"><img src={GreenTick} /><span>Email campaigns & interactions</span></li>
                 <li className="listt"><img src={GreenTick} /><span>View your customer's profiles</span></li>
                 </ul>
                 <button>Buy Plan</button>
                </div>
            </div>
                
            
        )
    }
}
