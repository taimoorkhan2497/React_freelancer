import React from 'react'

import RadioGroup from './RadioGroup'

import Button from '../../../../src/components/Button';
import {InputField2} from '../../../../src/components/InputField';
import {RegNavbar} from '../../../../src/components/Navbar';

import './CompanyDetail.css'
import '../../../../src/common.css'

import img from '../../../img/IdVerfication.png'
import img2 from '../../../img/IdVerfication_F.png'



function CompanyDetail() {
    return (

        <div className='Pf-container'>
            
            <div className='d-Iflex'>
                
                <div className='w-33 bg1 b_line1'>
                
                <div className='Pf-leftbox'>
             
                <RegNavbar/>
                </div>
                <h1> hello</h1>
                <div className='personalprofile_foot' style={{backgroundImage: `url(${img2})`}}></div>
                </div>
                    
                    <div className=' w-66  bg2 b_line2' style={{display:"block",    height: "auto"}}> 
                       
                        <div>

            
                        <div className='personalprofileicon' style={{backgroundImage: `url(${img})`}}>
                      
                        </div> 
                        <div>
                          <h4 className="personalprofileHead">Company details</h4>
                          <p className="personalprofilePara"> Creating your account in just a few steps away,
                          Please upload your gov verified proofs</p>
                         
                        </div>
                        </div>

                        <div style={{display:"flex",marginTop:"50px"}}>
                        <div className="Rb-1 w46 ml">
                        <InputField2 heading="Name of your Company" Placeholder="Enter Name"/> 
                        <p className="CompanyDetail_p"> How may employees does have in your company?</p>
                        <div className="CompanyDetail_p"><RadioGroup/></div> 
                        </div>       
                        
                        </div>

                        <div>
                        
                        <div className="pf_prevButton">
                        <button class="">Previous Step</button>
                        </div>
                        <div className="pf_nextButton">
                        <Button buttonStyle='btn--yellow' value="NEXT"/>
                        </div>
                        </div>
                        
                    </div>

            </div>
            
        </div>
    )
}

export default CompanyDetail