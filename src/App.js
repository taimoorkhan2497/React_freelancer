import React from 'react';
import './App.css';

import signuppage from './App/pages/signin/signuppage'
import SignIn from './App/pages/signin/SignIn'
import tabbar2 from './App/pages/registration/tabbar2'
import NotFound from "./App/pages/notFound/NotFound";
import Jobs from "./App/pages/jobs/Jobs";
import { AccountSettingMain } from './App/pages/AccountSetting/AccountSettingMain';
import Help  from './App/pages/FaqsAndHelp/Help';
import Accounttype from "./App/pages/registration/AccountType"

import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
function App() {
return (
    <>
    <Router>
      
    <Switch>
         <Route path='/' exact component={SignIn}/>
         <Route path='/SignIn' exact component={SignIn}/>
        <Route path='/signup' exact component={signuppage}/>
        <Route path='/registration-process' exact component={Accounttype}/>
        <Route path='/registration-processpages' exact component={tabbar2}/>
        <Route path='/account-setting' exact component={AccountSettingMain}/>
        <Route path='/help' exact component={Help}/>
        <Route path='/Jobs' exact component={Jobs}/>
        <Redirect from='/Accounttype/' to="/registration-process/" />
        <Route component={NotFound} />
      </Switch>
      </Router>
    </>    
  );
}

export default App;
