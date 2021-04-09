import React from 'react'
import './addwork.css'
import Button from '../../Button'
import {InputField5} from '../../../../src/components/InputField'
const AddWork = (props) => {
    return (props.trigger) ? (
        
           <div className="work-conatiner body">
               <div className="header"> 
                    <p>Add Work Experience</p>
                 <i class="fas fa-times"  onClick={() => props.setTrigger(false)}></i>
                 </div>
                 <div className="fields">
                        <InputField5 heading="Company" Placeholder=" Enter Company"/> 
                        <InputField5 heading="Your Role" Placeholder=" Enter Role"/>
                 </div>

                    
                 <div className="footer">
                 <Button buttonStyle="btn--cancel" value="Cancel"  onClick={() => props.setTrigger(false)} />
                 <Button buttonStyle="btn--ADD" value="save"/>
                 </div>

            {props.children}
        </div>
    ): "";
    
}

export default AddWork

