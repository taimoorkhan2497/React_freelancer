import React from 'react'

import Button from '../../../../src/components/Button';
import './PersonalProfile.css'
import img from '../../../img/personalProfile.png'
import img2 from '../../../img/personalProfile_F.png'


function PersonalProfile() {
    return (       
        <div className='PersonalProfile'>
            
          {/* <div className='d-Iflex'> */}
                
                
                    
                    <div className='personalProfile_bg Pf-rightbox  p-5'> 
                       
                        <div className="container">

                            <div className="pl-2">
                                <div className="row">

                                        <div className='personalprofileicon' style={{backgroundImage: `url(${img})`}}>
                                    
                                        </div>
                                    
                                        
                                        <div className="Profile_info">
                                            
                                        <h4 className="personalprofileHead">Personal Profile</h4>
                                        <p className="personalprofilePara"> Creating your account in just a few steps away,
                                        Fill your Personal detail type.</p>
                                        </div>
                                </div>
                            </div>

                            <div className="container">
                                    <div className="row pt-3">
                                            <div className=" col-sm-6 col-md-6">
                                                <div className="Rb-0">
                                                <div class="form-group">
                                                    <label  className="pp_inputHeading" for="usr">First Name</label>
                                                    <input type="text" class="form-control"  Placeholder=" Enter first name"/>
                                                </div>
                                                <div class="form-group">
                                                    <label  className="pp_inputHeading" for="usr">Mobile number</label>
                                                    <input type="text" class="form-control" Placeholder=" Enter number"/>
                                                </div>
                                                <div class="form-group">
                                                    <label  className="pp_inputHeading" for="usr">City:</label>
                                                    <input type="text" class="form-control"  Placeholder=" Enter city"/>
                                                </div>
                                                
                                                </div>
                                            </div>
                                            <div className=" col-sm-6 col-md-6">  
                                                <div className="Rb-0">
                                                <div class="form-group">
                                                    <label  className="pp_inputHeading" for="usr">LAST Name</label>
                                                    <input type="text" class="form-control" Placeholder=" Enter last name"/>
                                                </div>
                                                <div class="form-group">
                                                    <label  className="pp_inputHeading" for="usr">Address</label>
                                                    <input type="text" class="form-control" Placeholder=" Enter address"/>
                                                </div>
                                                <div class="form-group">
                                                    <label   className="pp_inputHeading"for="usr">Country</label>
                                                    <input type="text" class="form-control" Placeholder=" Enter country"/>
                                                </div>
                                                        
                                                </div> 
                                            </div>
                                    </div>
                            </div>

                        
                        
                    </div>

            </div>
            
         </div> 
    )
}

export default PersonalProfile

export function PersonalProfileTabFooter( ) 
{
    return (
            <div>

                 <div className='bg1  footer_img_padding'>
                {/* <h1> hello</h1>*/}
                    <div className='personalprofile_foot' style={{backgroundImage: `url(${img2})`}}></div>

                   </div>
                </div>
                );
              
}


export function PersonalProfileFooter2( ) 
{
    return (
        <div>

    <div>
                        
    <div className="pf_prevButton">
    <button class="">Previous Step</button>
    </div>
    <div className="pf_nextButton">
    <Button buttonStyle='btn--yellow' value="Next"/>
    </div>
    </div>

    </div>
  );

}