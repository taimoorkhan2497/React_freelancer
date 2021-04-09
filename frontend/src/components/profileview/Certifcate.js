import React, { useState } from "react";
import "./certificate.css";
import certificate from "../../assets/certificate.png";
import certificate2 from "../../assets/certificate2.png";
import Modal from "react-bootstrap/Modal";
import GetImage from "../../App/pages/registration/GetImage";
import CloseIcon from '@material-ui/icons/Close';


export function Certificate(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleSave = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="Certifies">
      <div className="container bg-white">
        <div className="row pt-4 pb-3 pl-3">
          <div className="col-md-6">
              <h>Certificates </h>
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
            <form>
              <div className="row pt-4 pb-3">
              <div className="form-header col-md-6 ">
                <p>Add Certificate</p>
                </div>
                <div className="col-md-6">
                <CloseIcon onClick={handleClose} className="float-right" />
                </div>
              </div>
              
              
              
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputtext">Certificate Title</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputtext"
                    placeholder="Title"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputtext">Publisher</label>
                  <select id="inputState" className="form-control">
                    <option selected>Select</option>
                    <option>......</option>
                    <option>......</option>
                    <option>......</option>
                    <option>......</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p classNameName="">Upload Images</p>
                  <GetImage />
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

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="img-wraper pt-3 pb-3">
                <img src={certificate} alt="/" />
              </div>
              <div className="img-des pb-3">
                <p> Ecomerce Project </p>
                <h>8 Artworks</h>
              </div>
            </div>
            <div className="col-md-9">
              <div className="img-wraper pt-3 pb-3">
                <img src={certificate2} alt="/" />
              </div>
              <div className="img-des pb-3">
                <p> Ecomerce Project </p>
                <h>8 Artworks</h>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Certificate;
