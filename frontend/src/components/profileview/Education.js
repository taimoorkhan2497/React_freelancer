import React, { useState } from "react";
import "./Education.css";
import Modal from "react-bootstrap/Modal";
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';


export function Education(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => setShow(false);

  return (
    <div className="EDUC">
      <div class="container bg-white">
        <div class="row pt-4 pb-3 pl-3 pb-5">
          <div class="col-md-6">



              <h> Education </h>

          </div>
          <div class="col-md-6 pr-4">
            <button
              type="button"
              class="btn btn-primary btn-sm float-right"
              onClick={handleShow}
            >
              +ADD
            </button>
          </div>
        </div>

        <Modal show={show}>
          <div class="container">
            <form>

            <div class="row pt-4 pb-3">
              <div class="form-header col-md-6 ">
                <p>Add Education Information</p>
                </div>
                <div class="col-md-6">
                <CloseIcon onClick={handleClose} className="float-right" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputState">Country</label>
                  <select id="inputState" class="form-control">
                    <option selected>Select Country</option>
                    <option>Doha</option>
                    <option>Manila</option>
                    <option>Doha</option>
                    <option>Manila</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputtext">University</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputtext"
                    placeholder="Enter university"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputState">Period</label>
                  <select id="inputState" class="form-control">
                    <option selected>Year from</option>
                    <option>january</option>
                    <option>february</option>
                    <option>March</option>
                    <option>April</option>
                  </select>
                </div>
                <div class="form-group col-md-6 pt-2">
                <label for="inputState"></label>
                  <select id="inputState" class="form-control">
                    <option selected>Year to</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputState">Degree</label>
                  <select id="inputState" class="form-control">
                    <option selected>e.g. Engineering</option>
                    <option>january</option>
                    <option>february</option>
                    <option>March</option>
                    <option>April</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 pb-5 pt-4">
                  <a href="#" class="float-right" onClick={handleClose}>
                    Cancel
                  </a>
                  </div>
                  <div class="col-md-6 pb-5 pt-3">
                  <button type="button" className="form-btn btn btn-warning"onClick={handleSave} >
                    Save
                  </button>
                  </div>
              </div>
            </form>
          </div>
        </Modal>

        <div>
          <div class="container">
            <div class="row pb-3">
            <div class="col-md-9">
                  <h>Engineering in science | Oxford Universal College</h>
                  </div>
                  <div class="col-md-3">
                  <a href="#" className="float-right">
                    <DeleteIcon/>
               
                  </a>
                  </div>

                  <div class="col-md-8">
                <h>20 Aug 2018 to 14 feb 2020</h>
              </div>

            </div>
            <div class="row pb-3">
              <div class="col-md-9">

                  <h>Engineering in science | Oxford Universal College</h>
                  </div>
                  <div class="col-md-3 pull-right
                  ">
                   <a href="#" className="float-right">
                  <DeleteIcon/>
                  </a>
                  </div>
                  <div class="col-md-8">
                  <h>20 Aug 2018 to 14 feb 2020</h>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
