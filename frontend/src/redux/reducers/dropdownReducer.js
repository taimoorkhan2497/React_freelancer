

const dropdownReducer = (state="", action)=>

{
    
    if(action.type === 'DROPDOWN_CHANGE')
    {
        return action.payload
                
    }

    return  state;
}


export default dropdownReducer;