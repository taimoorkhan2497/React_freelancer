import React from 'react';
import './App.css';

import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
// signup pages
import SignupPage from './App/pages/signin/SignupPage'
import SignIn from './App/pages/signin/SignIn'
import VerifyEmail from './App/pages/signin/VerifyEmail'
// signup pages

// Registration Process
import Accounttype from "./App/pages/registration/AccountType"
// Sub Links
import TabbarRegistration from "./App/pages/registration/TabbarRegistration"
// Sub Links
// Registration Process

// Job Feed Page
import Jobs from "./App/pages/jobs/Jobs";
import JobDetail from "./App/pages/jobs/JobDetail";
import JobDetailTwo from "./App/pages/jobs/JobDetailTwo";
// Job Feed Page

// Personal Profile
import Profileview from './components/profileview/ProfileView'
import EditBio from './components/profileview/EditBio'
import PortfolioTab from './components/profileview/PortfolioTab'
// Personal Profile

// Account Setting
import AccountSettingMain from './App/pages/AccountSetting/AccountSettingMain'
// Account Setting

// Notification
import Notification from './App/pages/Notification/Notification'
// Notification

// Chat
import Chat from './App/pages/chat/chat'
// Chat

// Report
import Reports from './App/pages/AccountSetting/Reports'

// Report

// Withdrawing amt.
import PaymentWithdraw from './App/pages/AccountSetting/PaymentWithdraw'

// Withdrawing amt.

// My Projects

// My Projects

// View Project Pages -Contract
import ContractOne from './App/pages/Contract/ContractOne'

import ContractTwo from "./App/pages/Contract/ContractTwo"
import ContractThree from "./App/pages/Contract/ContractThree"
// View Project Pages -Contract

// Application Page
import ApplicationList from '../src/App/pages/application-pages/ApplicationList'
import ApplicationDetail from '../src/App/pages/application-pages/ApplicationDetail'
// Application Page

// FAQs & Help
import Faq from './App/pages/faq/faq'
import Help from './App/pages/help/help'
// FAQs & Help

// Not Found
import NotFound from "./App/pages/notFound/NotFound";
// Not Found

import Authenticated from './Authenticated'


import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import LinkedInPage from '../src/App/pages/signin/LinkedInPage';


function App() {
return (
<>
<Router>
<Switch>

<Route exact path="/linkedin" component={LinkedInPopUp} />

<Route exact path="/">

<Authenticated>
<Accounttype/>
</Authenticated> 


</Route>

<Route exact path="/jobs">

<Authenticated>
<Jobs/>
</Authenticated>

</Route>


       
      
      
    

<Route exact path="/login" >
<Authenticated nonAuthenticated={true}>
<SignIn/>
</Authenticated>
</Route>

<Route path='/signup' exact component={SignupPage}/>

<Route path='/verify-user/:user_id?' exact component={VerifyEmail}/>

<Route path='/registration-process' exact component={Accounttype}/>
<Route path='/tabbar-registration' exact component={TabbarRegistration}/>



{/* <Route path='/account-setting' exact component={AccountSettingMain}/>*/}



<Route path='/job/:id' exact component={JobDetail}/>
<Route path='/JobDetailTwo' exact component={JobDetailTwo}/>



<Route path='/profileview' exact component={Profileview}/>
<Route path='/EditBio/:id' exact component={EditBio}/>
<Route path='/portfoliotab' exact component={PortfolioTab}/>

<Route path='/account-setting' exact component={AccountSettingMain}/>

<Route path='/notification' exact component={Notification}/>



<Route path='/registration-process' exact component={Accounttype}/>


<Route path='/chat' exact component={Chat}/>

<Route path='/reports' exact component={Reports}/>

<Route path='/paymentWithdraw' exact component={PaymentWithdraw}/>


<Route path='/ContractOne' exact component={ContractOne}/>
<Route path='/ContractTwo' exact component={ContractTwo}/>
<Route path='/ContractThree' exact component={ContractThree}/>

<Route path='/ApplicationList' exact component={ApplicationList}/>
<Route path='/ApplicationDetail' exact component={ApplicationDetail}/>


<Route path='/faq' exact component={Faq}/>
<Route path='/help' exact component={Help}/>

<Route component={NotFound} />

</Switch>
</Router>
</>
);
}

export default App;

