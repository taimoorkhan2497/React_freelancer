import React from "react";
import './addportfolio.css'



  function AddPortfolio () { 
  return (
    <div className="add-portfolio">
      <div className="addportfolio-box">
      <div className="container">
        <div className="row bg-white">
          <div className="col-md-12">
            <form action="required">
              <h5 className="">Add project</h5>
              <div className="row pt-3">
                <div className="form-group col-md-6 ">
                  <label for="inputtext">Project Title</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputtext"
                    placeholder="Enter title brief"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputtext">Specialized In</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputtext"
                    placeholder="Developing"
                  />
                </div>
              </div>
              <div className="row pt-3">
                <div className="form-group col-md-6">
                  <label for="inputtext">Start Date</label>
                  <input
                    type="digit"
                    className="form-control"
                    id="inputnumber"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputtext">Completion date</label>
                  <input
                    type="digit"
                    className="form-control"
                    id="inputnumber"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
              </div>
              <div className="row pt-5">
               <div className="col-md-12 pt-5 pb-5"> 
               </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
 }
 export default AddPortfolio;