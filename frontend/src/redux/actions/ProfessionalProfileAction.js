
 export  const ProfessionalProfileAction = (data)=>
 {
     console.log("type",data.type)
    return {
        
        type:data.type ,
        payload:data.payload,

    } 
 
 }
 