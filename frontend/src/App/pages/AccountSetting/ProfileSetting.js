import React, { Component } from 'react'
import GroupRadioBtn from '../../../components/GroupRadioBtn'
import SettingDropdown from '../../../components/SettingDropdown'
import './ProfileSetting.css'

export default class ProfileSetting extends Component {
    render() {
        return (
            <div>
                        
                <div>
                </div>

                <div className="radiobtn_dropdown_Div">
                            <div className="settingRadioGroup">
                              <GroupRadioBtn/>

                            </div>
                            <div className="settingDropdown">
                             <SettingDropdown/>
                            </div>
                </div>

                <div>
                      <p className="PSdropheader">Experience Level</p>
                        <div>
                            <div className="EntryLevel">
                             <h6>Entry Level</h6>
                             <p> I am relatively new to this field.</p>
                            </div>

                            <div className="EntryLevel">
                             <h6>Intermediate</h6>
                             <p> I have substantial experience in this field</p>
                            </div>

                            <div className="EntryLevel">
                             <h6>Expert</h6>
                             <p> I have comprehensive and deep expertise in this field.</p>
                            </div>
                        </div>  
                </div>

               
              <div className="PS_nextButtonDiv">
          
                <button className="PS_tb_prevButton" onClick={() => this.setState({ selected: this.state.selected - 1 })}>
                Discard Changes
              </button>
                 

           
              <button className="PS_tb_nextButton" onClick={() => this.setState({ selected: this.state.selected + 1 })}>
             Save CHANGES
            </button>
     
            </div>


            </div>
        )
    }
}


