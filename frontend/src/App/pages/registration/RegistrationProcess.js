import React, { Component } from 'react'

import React, { Component } from 'react'
import './tabbar2.css'
import {RegNavbar} from '../../../../src/components/Navbar';
import PersonalProfile,{PersonalProfileTabFooter} from './PersonalProfile'
import IdVerification,{IdVerificationFooter} from './IdVerification'
import PaymentInformation,{PaymentInformationFooter} from './PaymentInformation'
import HourlyRate,{HourlyRateFooter} from './HourlyRate'
import Heading,{HeadingFooter} from './ProfessionalProfile'
import ProfessionalProfile2,{ProfessionalProfile2Footer} from './ProfessionalProfile2'


let selecvalue=0;
 export const  Root = () => (

  <div className="Main">
    <div class="container-fluid">
      <div class="row">
     
     
    <Tabs selected={ 0 }>
    <div class="col-md-3">
      <TabList>
      <RegNavbar/>
        <Tab>

        <div class=""><span class=" "><Button>1</Button></span> <span class="text2">Personal Profile</span></div> <div className="line"></div>
  
        </Tab>
        <Tab>
        <div class=""><span class=" "><Button>2</Button></span> <span class="text2">Professional Profile</span></div> <div className="line"></div>
        </Tab>
        <Tab>
        <div class=""><span class=" "><Button>3</Button></span> <span class="text2">ID Verification</span></div> <div className="line"></div>
        </Tab>
        <Tab>
        <div class=""><span class=" "><Button>4</Button></span> <span class="text2">Payment Information</span></div> <div className="line"></div>
        </Tab>
        <Tab>
        <div class=""><span class=" "><Button>5</Button></span> <span class="text2">Hourly Rate</span></div> 
        </Tab>
      </TabList>
      </div>

      <div class="col-md-9">

      <TabPanel>
         <PersonalProfile/>

      </TabPanel>
      <TabPanel>
         <ProfessionalProfile2/>

      </TabPanel>

      <TabPanel>
         <IdVerification/>
      </TabPanel>

      <TabPanel>
       <PaymentInformation/>
      </TabPanel>
      <TabPanel>
        <HourlyRate/>
    </TabPanel>
        </div>
    </Tabs>
        </div>
    </div> 
  </div>
)



export default class RegistrationProcess extends Component {
    render() {
        return (
            <div>
                 
                
            </div>
        )
    }
}
