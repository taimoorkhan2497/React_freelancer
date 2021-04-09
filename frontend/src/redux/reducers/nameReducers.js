

const nameReducer = (state="taimoor", action)=>

{
    if(action.type === 'CHANGE_NAME')
    {
        return action.payload
                
    }

    return  state;
}


export default nameReducer;