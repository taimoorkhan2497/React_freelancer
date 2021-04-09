import { combineReducers } from 'redux';

 import nameReducer  from './reducers/nameReducers';
 import dropdownReducer  from './reducers/dropdownReducer';
 import ProfessionalProfileReducer  from './reducers/ProfessionalProfileReducer';
 import RegistrationTabBarReducer from './reducers/RegistrationTabBarReducer'
// import colorReducer from 'reducers/colorReducer';
// 

export const rootReducer = combineReducers({

   RegistrationTabBarReducer:RegistrationTabBarReducer,
     nameReducer: nameReducer,
     dropdownReducer:dropdownReducer,
     ProfessionalProfileReducer:ProfessionalProfileReducer,
     
    
  });