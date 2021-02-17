import React,{Component} from 'react'


import GetImage from './GetImage'
import Dropdown from "../../../components/Dropdown";
import SelectSkill from "../../../components/SelectSkill";

import './ProfessionalProfile2.css'
import '../../../../src/common.css'


import img from '../../../assets/Group 3539.png'
import img2 from '../../../img/profess_F.png';
import img3 from '../../../img/WorkPlatform.png';


class  ProfessionalProfile2 extends Component{
 
    constructor(){
        super();
        this.state = {
            hobbies:[] ,
            brand: [] ,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        
        if(target.checked){
            this.state.hobbies[value] = value;   
        }else{
            this.state.hobbies.splice(value, 1);
        }
        
    }
    submit(){
         
        console.log(this.state.hobbies)
    }


render(){

return (
          <div className="ProfessionalProfile">
        <div className='Pf-container proff-prof'>

          <div className='container Pf-rightbox   bg2 b_line2 p-5'> 
           
          <div class="container-fluid">
            
             <div>   
                 <div class="row pl-3">
                    <div className="Per_img-wrap">
                    <div className="pp_icon" style={{backgroundImage: `url(${img})`}}></div> 
                    </div>
                    
                    <div className="personalProfile_info">
                    <h4 className="pp_Head">Professional Profile</h4>
                    <p className="pp_Para">  Creating your account in just a few steps away, Fill your professional
                    details</p>
                    </div>
                </div>

                <div className="inner-parts">
                  <div className="dropdown">
                  
                     <Dropdown/>

                     </div>
                <div className="multiselect">
                <div>
       
                <h3>Add your skills</h3> 
                          <select
                                //  value={this.state.selectValue}
                                //  onChange={this.handleChange}

                                onChange={(e) => {
                                  this.setState((prevState) => ({
                                    brand: [...prevState.brand, e.target.value],
                                  }));
                                }}
                                className="form-control"
                                id="exampleFormControlSelect1">
                                <ul>
                                <li className="test">a</li>
                                <li className="test">b</li>
                                <li className="test">c</li>
                                <li className="test">d</li>
                                </ul>
                                <option  value="Php">Php</option>
                                <option value="Bootstrap">Bootstrap</option>
                                <option value="Azura">Azura</option>
                                <option value="Java">Java</option>
                                <option value="Python">Python</option>
                                <option value="javascript">javascript</option>
                                <option value="c#">c#</option>
                              </select>
                          

                              <div className="test">
                                {this.state.brand.map((item, index) => (
                                  <div
                                    className="option"
                                    style={{
                                      background: "#61C1B8",
                                      color: "white",
                                      padding: "0px 8px",
                                      margin: "7px ",
                                      borderRadius: "4px",
                                      width: "113px",
                                    }}
                                  >
                                    <h5 className="Addskillh5item">{item} </h5>
                                    <span
                                      className="float AddSkill_pl"
                                      onClick={() => {
                                        console.log(index);
                                        const a = this.state.brand;
                                        a.splice(index, 1);
                                        this.setState({ brand: a });
                                      }}
                                      style={{ cursor: "pointer" }}
                                    >
                                      x
                                    </span>
                                  </div>
                                ))}
                              </div>
                     </div>
                </div>
             </div>

              <div className="checkboxesMain">
              <h3>Choose Category</h3>
              <div className="container_Checkboxes">
                <div className="first_3col">
                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh1" value="Animation" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">Animation</span>
                    </label>
                    
                    </div>

                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh2" value="Interior Design" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">Interior Design</span>
                    </label>
                    
                    </div>
                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh3" value="Graphic Design" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">Graphic Design</span>
                    </label>
                    
                    </div>
                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh4" value="UI Design" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">UI Design</span>
                    </label>
                    
                    </div>
                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh5" value="Wordpress" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">Wordpress</span>
                    </label>
                    
                    </div>

            </div> {/* End of first_3col*/}
      
            <div className="second_3col">
                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh6" value="QA & Testing" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">QA & Testing</span>
                    </label>
                    
                    </div>

                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh7" value="Video Editing" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">Video Editing</span>
                    </label>
                    
                    </div>
                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh8" value="Content Writing" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">Content Writing</span>
                    </label>
                    
                    </div>
                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh9" value="SEO" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">SEO</span>
                    </label>
                    
                    </div>
                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh10" value="Marketing" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">Marketing</span>
                    </label>
                    
                    </div>

                  
            </div> {/* End of 2nd_3col*/}

            <div className="third_3col">
                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh11" value="Accounting" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">Accounting</span>
                    </label>
                    
                    </div>

                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh12" value="Translation" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">Translation</span>
                    </label>
                    
                    </div>
                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh13" value="Website Design" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">Website Design</span>
                    </label>
                    
                    </div>
                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh14" value="Software" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">Software </span>
                    </label>
                    
                    </div>
                    <div className="example">
                    <label className="checkbox-button">
                        <input type="checkbox" className="checkbox-button__input"  name="hobbies" id="inlineCheckboxh15" value="Data Entry" onChange={this.handleInputChange}/>
                        <span className="checkbox-button__control"></span>
                        <span className="checkbox-button__label">Data Entry</span>
                    </label>
                    
                    </div>

                   

            </div> {/* End of third_3col*/}


            </div>
            </div>
           {/*   <div class="form-row">
             <div class="col-md-12 text-center">
                <button type="submit" class="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
             </div>
             </div> */}{/* End of Submit button*/}

           {/* End of multiple checkbox*/}
           <div className="prof-cer">
           <div className="certificates">
                        <div className="mh1">
                            <p className="certificate">Certficate</p>
                        </div>
                        
                        <div >
                                <div className="getimage">
                                <GetImage/>
                                </div>
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
}

export default ProfessionalProfile2

