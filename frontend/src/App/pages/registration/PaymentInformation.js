import React from 'react'
import {InputField2} from '../../../../src/components/InputField';
import {InputField4} from '../../../../src/components/InputField';
import Date from './GetDate'

import './PaymentInformation.css'
import '../../../../src/common.css'
import img from '../../../img/PaymentInfo.png'
import img2 from '../../../img/PaymentInfo_F.png'


function PaymentInformation() {
    return (
  <div className="PaymentInformation">
        <div className='Pf-container'>
            
                        
                    <div className='pi_rightbox  bg2 b_line2 p-5' > 
                       <div className="container">
                        <div className="row Profile_info">

            
                        <div className='pi_icon' style={{backgroundImage: `url(${img})`}}>
                      
                        </div> 
                        <div className="Profile_info">
                          <h4 className="pi_Head">Payment Information</h4>
                          <p className="pi_Para"> Creating your account in just a few steps away,
                          Please Fill your bank or card details here</p>
                        </div>
                        </div>

                        <div class="row w-75">
                        <div className="Rb-1 col-md-12">
                        <div class="form-group">
                            <label className="headingStyle" for="usr">Card Holder Name</label>
                            <input type="text" class="form-control"  Placeholder=" Enter card holder name"/>
                        </div>
                        <div class="form-group">
                            <label className="headingStyle" for="usr">Mobile number</label>
                            <input type="text" class="form-control" Placeholder=" Enter number"/>
                        </div>
                        
                        </div>
                        </div>

                        <div class="row w-75">
                   
                  
                            <div class="col-md-12">
                                <Date/>
                            
                            </div>
                        
        
                        
                        </div>
                        
                     </div>

                    </div>

      
            
        </div>
        </div>
    )
}

export default PaymentInformation



export function PaymentInformationFooter()
{
    return(
        <div>

        <div className='bg1  Paymentinfo_footer_img_padding'>
       {/* <h1> hello</h1>*/}
         
           <div className='pi_foot' style={{backgroundImage: `url(${img2})`}}></div>

          </div>
       </div>

        
    )
}