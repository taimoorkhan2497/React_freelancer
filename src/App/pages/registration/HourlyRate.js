import React from 'react'
import {InputField3} from '../../../../src/components/InputField';

import './HourlyRate.css'
import '../../../../src/common.css'

import img from '../../../img/HourlyRate.png'
import img2 from '../../../img/HourlyRate_F.png'



function HourlyRate() {
    return (

        <div className='HourlyRate'>
            
           
                
             
                     {/*left section END*/} 
                      
                     {/*Right section*/} 
                    <div className='hr_rightbox   bg2 b_line2 p-5' > 
                          {/*Rc 1_inn*/}
                        <div class="container"> 
                        <div class="row pl-3">
                          <div class="col-sm-12">
                          <div className='hr_icon' style={{backgroundImage: `url(${img})`}}></div> 
                          <div>
                            <h4 className="hr_Head">Houtly Rate</h4>
                            <p className="hr_Para">Creating your account in just a few steps away,
                            Please Fill your bank or card details here</p>
                          </div>
                          </div>
                        </div>

                         {/*Rc 1_inn*/}
                        <div className="firstTextField">
                            <div className="Rb-1 col-md-8">
                                <InputField3 heading="Proposal Amount" Placeholder=" 0 " type="number"/> 
                              
                                <div> <p className="hr_Para1 pt-3">15% service free</p></div>
                                <div class="row">
                                    <div class="col-md-12 pb-3">
                                   <div class=" hr_Para3">
                                   
                                   <div class="pull-left">0</div>
        <div class="pull-right">SAR</div>
                                   </div>  
                                  
                                   </div>
                                     
                                </div>
                            
                            </div>       
                        
                        </div>

                         {/*Rc 1_inn*/}
                        <div className="Rb-1 col-md-8">
                            <InputField3 heading="Total amount you’ll recieve" Placeholder=" 0 " type="number"/> 
                            <div className="hourly-text">
                            <p className="hr_Para2 mt2per p-4">Tuwaiq Freelancer service fees can be charge as 15%</p>
                            </div>
                            
                        </div>
                        
                     
                         {/*Rc 1_inn*/}
                     
                         </div> 
                    </div>
                    {/*Right section end*/} 


            
        </div>
    )
}

export default HourlyRate


export function HourlyRateFooter ()
{
  return(
     
        <div className="HourlyRate_footer_padding">
    
           <div className='hr_foot' style={{backgroundImage: `url(${img2})`}}></div>
      </div>
  )

}