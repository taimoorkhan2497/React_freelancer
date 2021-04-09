
const RegistrationTabBarReducer = (state="", action)=>

{
    
    if(action.type === 'REGISTRATION_TAB_CHANGE')
    {
        console.log("reducer",action.payload)
        return action.payload
         
    }

    return  state;
}


export default RegistrationTabBarReducer;