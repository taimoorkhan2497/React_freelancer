import React, { Component } from 'react'
import GetImage from '../registration/GetImage'
import ResponsiveDialog from "./SubmitBidModal";

      

export default function Proposal () {
    
        return (
            <div className="proposal-details pb-4">
                <div className="proposal-heading">
                    <h1 className="pt-4 pl-3">Proposal Details</h1> 
                    <ul className="p-3">
                        <li className="pb-2">
                            <h3>Proposal Amount</h3>
                            <div class="input-group mb-3">
                                
                                <input type="text" class="form-control" placeholder="0"></input>
                                
                                <div class="input-group-append">
                                    <span class="input-group-text">SAR</span>
                                </div>
                            </div>
                        </li>
                        <li className="pb-2">
                            <h3>15% service free</h3>
                            <div class="input-group mb-3">
                                
                                <input type="text" class="form-control" placeholder="0"></input>
                                
                                <div class="input-group-append">
                                    <span class="input-group-text">SAR</span>
                                </div>
                            </div>
                        </li>
                        <li className="pb-2">
                            <h3>Total amount you’ll recieve</h3>
                            <div class="input-group mb-3">
                                
                                <input type="text" class="form-control" placeholder="0"></input>
                                
                                <div class="input-group-append">
                                    <span class="input-group-text">SAR</span>
                                </div>
                            </div>
                        </li>
                        <li className="pb-2">
                            <h3>Your Proposal</h3>
                            <textarea row="3" placeholder="Text"></textarea>
                        </li>
                        <li className="image-upload">
                            <h3>Attachment</h3>
                            <div className="upload-img">
                                <GetImage value={2}/>
                            </div>
                            
                        </li>
                    </ul>

                    <div className="text-center">
                        <button  class="btn btn--yellow btn--medium">Submit a Proposal</button>
                    </div>
                    
                </div>
                
            </div>
            
        )
    
}


