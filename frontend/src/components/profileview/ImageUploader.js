import React, { Component } from "react";
import { Upload } from "react-bootstrap-icons";
import list ,{ patch } from "../../App/pages/helper/api";

import GetImage from "../../App/pages/registration/GetImage"
export default class Uploading extends Component {
constructor(props) {
super(props);
this.state = {
file: null,
Uploadimg:false,
getImageFromdatabase:null
};

// this.upload = this.upload.bind(this);
}

profilePicUploadHandler=(binaryfile)=>{
   console.log("profileimg",binaryfile)

   if (binaryfile) {
    let data = new FormData();
    data.append("avatar", binaryfile);
 var modelId = localStorage.getItem("registration_process_medel_id")
//  var modelId2 = localStorage.getItem("profile_id")
    
 console.log("modelid",modelId)

    patch(`api/v1/freelancer_profile/${modelId}/`, data)
        .then((response) => {
         
        })
}
}

getImage=()=>{
  var profile_id = localStorage.getItem("profile_id")
  list(`api/v1/user/${profile_id}/`)
  .then((response) => {
  const data= response.data;
this.setState({getImageFromdatabase:data})

  })
}
Uploadimg=()=>{
console.log("called");

this.setState({Uploadimg:true})

}

componentDidMount()
{
  this.getImage()
}

render() {
let imgPreview;
if (this.state.file) {
imgPreview = (
<img src={this.state.file} alt="" height="100" width="100" />
);
}
return (
<div className="container">
<div className="row">
<div className="col-md-12">
<form>

<div className="form-group">
<div
style={{
height: "100px",
width: "100px",
}}
>
 {this.state.Uploadimg  ?<GetImage  value="Profilepic" profilePicUpload={this.profilePicUploadHandler} /> : <div onClick={() => {
  this.Uploadimg()}}  className='avatar-user' style={{backgroundImage : `url(http://localhost:8000/static/media/uploads/${this.state.getImageFromdatabase?.profile[0]?.avatar})`}}>
                     
</div>
 }
</div>
</div>
</form>
</div>
</div>
</div>
);
}
}