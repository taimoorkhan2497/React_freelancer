import React, { useEffect, useState } from "react";
import "./Experience.css";
import Modal from "react-bootstrap/Modal";
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import { post, del } from "../../App/pages/helper/api";
import { useHistory } from "react-router-dom"

function Experience() {

    let history = useHistory ();


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => setShow(false);
  const [select, setSelect] = useState('id')
  const [data, setData] = useState({
    provide_service: '',
    checkbox : 'false'
  });
  function dropDownHandler(provideService2) {
    setData({ provideService: provideService2 })
    
  }

  const [user, setUser] = useState({
    name : "",
    City : "",
    Country : "",
    Month : "",
    Company :"",
    Year :"",
    role : "",
    descripion :""

  });
  function saveUser(){
    alert("form has been submitted")
    console.warn("saveUser")
  }
  
  function handleChange(e) {
    setData({provide_service: e.target.value});

    console.log("dropdown",e.target.value)
}

 const handleAllChecked = (e) => {
  setData({checkbox: e.target.value});
  console.log("checked ",e.target.value);
}

    const { City, Country, Month, Year, Company, role,descripion} = user;
  const onInputChange =e=>{
   
    setUser({user,[e.target.name] : e.target.value})

    console.log("user data",user)
  };
  const onSubmit = async e => {
      e.preventDefault()
       post('/api/v1/profile/')
      .then(response => {
        console.log(response)

        history.push('/ProfileView');
      })
     
      .catch(error => {
        console.log(error)
      })
     
    }
  
  const deleteUser = id =>{
    del ('/api/v1/profile/2/ ', user)
    .then(response => {
      console.log(response)
    })
  }
  useEffect(() => {
    deleteUser("vlaueadded");
  }, [])
  return (
    <div className="Experr">
      <div className="container">
        <div className="row pt-4 pb-3 pl-3 bg-white pb-4">
          <div className="col-md-6">
              <h>Experience </h>
          </div>
          <div className="col-md-6 pr-4">
            <button
              type="button"
              className="btn btn-primary btn-sm float-right"
              onClick={handleShow}
            >
              +ADD
            </button>
          </div>
        </div>

        <Modal show={show}>
          <div className="container">
            <form onSubmit={e => onSubmit(e)}>
            <div className="row pt-4 pb-3">
              <div className="form-header col-md-6 ">
                <p>Add Work Experience</p>
                </div>
                <div className="col-md-6">
                <CloseIcon onClick={handleClose} className="float-right" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputtext">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Company"
                    name="Company"
                    value={Company}
                    onChange={e => onInputChange(e)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputtext">Your Role</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Role"
                    value={role}
                    name="role"
                    onChange={e => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label  for="inputState">Location</label>
                  <select id="inputState" value={data.provide_service} onChange={e => handleChange(e)}  className="form-control">
                    <option value="City">Select</option>
                    <option value="islamabad">islamabad</option>
                    <option value="dubai">dubai</option>
                    <option value="qaira">qaira</option>
                    <option value="qatar">qatar</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputState">Country</label>
                  <select id="inputState" value={data.provide_service} onChange={e => handleChange(e)}  className="form-control">
                    <option selected>Select</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Iran">Iran</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputState">Period</label>
                  <select id="inputState" value={data.provide_service} onChange={e => handleChange(e)}  className="form-control">
                    <option selected>Month</option>
                    <option value="january">january</option>
                    <option value="february">february</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                  </select>
                </div>
                <div className="form-group col-md-6 pt-2">
                <label for="inputState"></label>
                <select id="inputState" value={data.provide_service} onChange={e => handleChange(e)}  className="form-control">
                    <option selected>Year</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputState">Through</label>
                  <select id="inputState" value={data.provide_service} onChange={e => handleChange (e) }className="form-control">
                    <option selected>Month</option>
                    <option value="january">january</option>
                    <option value="february">february</option>
                    <option value="March"> March</option>
                    <option value="April">April</option>
                  </select>
                </div>
                <div className="form-group col-md-6 pt-2">
                <label for="inputState"></label>
                <select id="inputState" value={data.provide_service} onChange={e => handleChange(e)}  className="form-control">
                    <option selected>Year</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6">
                  <label>
                    <input type="checkbox" onClick={handleAllChecked}  value="checked"/> Currently work here
                  </label>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-12 pt-4">
                  <div className="form-group">
                    <label for="description"> Description</label>
                    <textarea
                      className="form-control-text"
                      placeholder="Text"
                      name="descripion"
                      value={descripion}
                      onChange={e => onInputChange(e)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 pb-5 pt-4">
                  <a href="#" className="float-right" onClick={handleClose}>
                    Cancel
                  </a>
                  </div>
                  <div className="col-md-6 pb-5 pt-3">
                   
                  <button type="button" className="form-btn btn btn-warning" onClick={handleSave}>
                    Save
                  </button>
                   
                  </div>
              </div>
            </form>
          </div>
        </Modal>

      </div>
      <div className="container">
        <div className="row bg-white pl-3">
              <div className="col-md-8 pb-1">
                <h>Wordpress developer | Company pvt ltd</h>
              </div>
              <div className="col-md-4 pr-4">
              <a href="#" className="float-right">
                  <DeleteIcon  onClick={(user) => deleteUser(user.id)}/>
                </a>
              </div>
              <div className="col-md-7 pb-2">
                <h>20 Aug 2018 to 14 feb 2020</h>
              </div>
              <div className="col-md-12">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
                <br />
                has been the industry's standard .
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Experience;
