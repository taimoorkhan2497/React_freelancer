
const ProfessionalProfileReducer = (state="", action)=>

{
    
    if(action.type === 'UPLOAD_IMAGE')
    {
        return action.payload
         
    }

    return  state;
}


export default ProfessionalProfileReducer;