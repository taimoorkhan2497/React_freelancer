import React, { useState,useEffect } from 'react'
import "./ContactInfo.css"
import "./ProfileSetting.css"
import Modal from "react-bootstrap/Modal";
import CloseIcon from '@material-ui/icons/Close';
import list from '../helper/api';
import { patch } from '../helper/api';

export default function ContactInfo(props) {
const [data, setData] = useState('');
const [save, setSave] = useState('');
const [save2, setSave2] = useState('');
const [id, setId] = useState(0);
const [data1, setData1] = useState({
profile : [{
street : '',
mobile_no: '',
}]

});
const [profile, setProfile] = useState({
street: '',
mobile_no: ''
});

const getData = () =>{
let getid = null
list('api/v1/accounts/profile/')
.then((response)=>{
const data = response.data;
getid = response.data.id
setData(data);
setId(getid);
})
}

const getData1 = () => {

list(`api/v1/user/${id}/`)
.then((response) => {
const data= response.data;
console.log("pubg idd:",data);
setProfile({street: data?.profile[0]?.street, mobile_no: data?.profile[0]?.mobile_no})
setData1(data);

})
}

const onInputChange = e =>
{
setData({...data ,
[e.target.name]: e.target.value
})
// setData1({...data1.profile ,
// [e.target.name]: e.target.value
// })
setProfile({
...profile,
[e.target.name]: e.target.value
});
}

// const onInputChange2 = e =>
// {
// setData1({...data1 ,
// [e.target.name]: e.target.value
// })
// }



const handleSave = (e) => {
e.preventDefault();
setShow(false)
patch("api/v1/accounts/profile/",data)
.then((response) => {
const data= response.data;
var id = JSON.parse(response.data.id);
})
setSave(data)
}

const handleSave2 = (e) => {
e.preventDefault();
setShow2(false)
let getid = null
patch(`api/v1/freelancer_profile/${data1?.profile[0]?.id}/`,profile)
.then((response) => {
const data1= response.data1;
var id = JSON.parse(response.data.id);
})
setSave2(data1)
setId(getid)
}

useEffect(() => {
getData();
}, [])

useEffect(() => {
if(id !== 0)
getData1();
}, [id])

const [show, setShow] = useState(false);
const [show2, setShow2] = useState(false);

const handleClose = () => setShow(false);
const handleClose2 = () => setShow2(false);


const handleShow = () => setShow(true);
const handleShow2 = () => setShow2(true);

// const [streeet, setStreeet] = useState('');
// const [numberr, setNumberr] = useState('');

// let data2 = data1?.profile[0];

return (


<div className="contact-information">

<div className="ci-heading">
Account
<span>
<button onClick={handleShow}>Edit</button>
</span>
</div>

<Modal show={show}>
<div className="container">
<form>
<div className="row pt-4 pb-3">
<div className="form-header col-md-6 ">
<p>Edit Account Details</p>
</div>
<div className="col-md-6">
<CloseIcon onClick={handleClose} className="float-right" />
</div>
</div>
<div className="form-row">
<div className="form-group col-md-12">
<label for="inputtext">Username</label>
<input
type="email"
className="form-control"
id="inputtext"
value={data.username}
name="username"
onChange={e => onInputChange(e)}
// placeholder="Username"
/>
</div>
</div>
<div className="form-row">
<div className="form-group col-md-12">
<label for="inputtext">First Name</label>
<input
type="email"
className="form-control"
id="inputtext"
name="first_name"
value={data.first_name}
onChange={e => onInputChange(e)}
/>
</div>
</div>
<div className="form-row">
<div className="form-group col-md-12">
<label for="inputtext">Last Name</label>
<input
type="email"
className="form-control"
id="inputtext"
name="last_name"
value={data.last_name}
onChange={e => onInputChange(e)}
/>
</div>
</div>
<div className="form-row">
<div className="form-group col-md-12">
<label for="inputtext">Email</label>
<input
type="email"
className="form-control"
id="inputtext"
name="email"
value={data.email}
onChange={e => onInputChange(e)}
placeholder="Email"
/>
</div>
</div>

<div className="form-row">
<div className="col-md-6 pb-5 pt-4 pull-left">
<a href="#" onClick={handleClose}>
Cancel
</a>
</div>
<div className="col-md-6 pb-5 pt-3">
<button type="button pull-right" className="form-btn btn btn-warning" onClick={handleSave}>
Save Changes
</button>
</div>
</div>
</form>
</div>
</Modal>

<div className="ci-account col-md-12">
<p>User ID<span>{data.username}</span></p>
<p>Name<span> {data.first_name} { data.last_name}</span></p>
<p>Email<span>{data.email}</span></p>
</div>

<div className="ci-heading">
Location
<span>
<button onClick={handleShow2}>Edit</button>
</span>
</div>

<Modal show={show2}>
<div className="container">
<form>
<div className="row pt-4 pb-3">
<div className="form-header col-md-12 ">
<p>Edit Location and Phone Details</p>


<CloseIcon onClick={handleClose2} className="float-right" />
</div>
</div>
<div className="form-row">
<div className="form-group col-md-12">
<label for="inputtext">Address</label>
<input
type="text"
className="form-control"
id="inputtext"
value={profile?.street}
name="street"
onChange={e => onInputChange(e)}
// placeholder="Username"
/>
</div>
</div>
<div className="form-row">
<div className="form-group col-md-12">
<label for="inputtext">Phone</label>
<input
type="text"
className="form-control"
id="inputtext"
name="mobile_no"
value={profile?.mobile_no}
onChange={e => onInputChange(e)}
/>
</div>
</div>
<div className="form-row">
<div className="col-md-6 pb-5 pt-4 pull-left">
<a href="#" onClick={handleClose2}>
Cancel
</a>
</div>
<div className="col-md-6 pb-5 pt-3">
<button type="button pull-right" className="form-btn btn btn-warning" onClick={handleSave2}>
Save Changes
</button>
</div>
</div>
</form>
</div>
</Modal>

<div className="ci-account col-md-12">
<p>Address<span>{data1?.profile[0]?.street}</span></p>
<p>Phone<span>{data1?.profile[0]?.mobile_no}</span></p>
</div>
<div className="my-profile-links col-md-12">
<a href="">discard changes</a>
<button>save changes</button>
</div>

</div>
)
}