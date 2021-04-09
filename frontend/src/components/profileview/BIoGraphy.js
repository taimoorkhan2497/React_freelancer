import React, { useEffect, useState } from "react";
import "./BioGraphy.css";
import { Link } from "react-router-dom";
import list, { patch, put } from "../../App/pages/helper/api";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "@material-ui/icons/Close";

function BioGraphy() {
  const [profiledata, setprofileData] = useState({
    email: "",
  });
  const [id, setId] = useState();
  const [profile, setProfile] = useState({
    street: "",
    mobile_no: "",
    description: 'enter you details here ',
  });
  const [data, setData] = useState({
    profile: [
      {
        street: "",
        mobile_no: "",
        description: profile?.description,
        id: "",
        
      },
    ],
  });
  const [skills, setSkills] = useState();
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //onclick event
  const onInputChange = (e) => {
    console.log("on change" ,e.target.value);
    setprofileData({
      ...profiledata,
      [e.target.name]: e.target.value,
    });

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  // apply 2 function to get data from two diffrent Api
  const getDataId = () => {
    list("api/v1/accounts/profile/")
    .then((response) => {
      let getid = null;
      const data = response.data;
      getid = response.data.id;
      console.log("freelancerd:", response.data.id);
      setprofileData(data);
      setId(getid);
    });
  }
  const getDataSet = () => {
    list(`api/v1/user/${id}/`)
    .then((response) => {
      const data = response.data;
      console.log("UserApi", data);
      setProfile({
        street: data?.profile[0]?.street,
        mobile_no: data?.profile[0]?.mobile_no,
      });
      setData(data);
    });
  }

  //get skills
  const getdata = () => {

       var getProfileid = localStorage.getItem("profileId")
      list(`api/v1/freelancer_profile/${getProfileid}/`)
      .then((response) => {

      const data = response.data;
      console.log("get skill data:", response.data);
      setprofileData(data);
      let user_skills;
      user_skills = data.skills.map((skills, index) => {
        return (
          <li>
            <a href="#" class="pl-3 pr-3 pt-1 pb-1">
              {skills.name}
            </a>
          </li>
        );
      });
      setSkills(user_skills);
      console.log("skils ",user_skills)
    });
  }

  // get data for edit

  const handleChange = () => {
    setShow(false);
    patch('api/v1/accounts/profile/', profiledata)
    .then((response) => {
      const data = response.data;
      var id = JSON.parse(response.data);
      console.log("raja", response.data);
    });
    setUser(profiledata);

    patch(`api/v1/freelancer_profile/${data?.profile[0]?.id}/`, profile)
    .then((response) => {
      const data = response.data;
      var id = JSON.parse(response.data.id);
    });
    setUser(profile);
    console.log("raja", data);
  };

  useEffect(() => {
    getdata();
    getDataId();
    handleChange();
  }, []);

  useEffect(() => {
    if(id !== 0 )
    getDataSet();
    }, [id])

  return (
    <div className="ui-comments">
      <div class="container bg-white">
        <div class="row pt-4 pb-3">
          <div className="btn-edit col-md-6 pl-4">
            <h>Personal Profile</h>
          </div>
          <div class="col-md-6 pr-4">
            {/* <Link to={`EditBio/${setGetId.id}`}> */}
            <button
              type="button"
              class="btn btn-primary btn-sm float-right"
              onClick={handleShow}
            >
              EDIT
            </button>
            {/* </Link> */}
          </div>

          <Modal show={show}>
            <div className="container">
              <form>
                <div className="row pt-4 pb-3">
                  <div className="form-header col-md-6 ">
                    <p>Edit personal profile Details</p>
                  </div>

                  <div className="col-md-6">
                    <CloseIcon onClick={handleClose} className="float-right" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="inputtext">description</label>
                    <textarea
                      type="text"
                      className="form-control"
                      value={profile?.description}
                      name="description"
                      onChange={(e) => onInputChange(e)}
                    ></textarea>
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
                      value={profiledata.email}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="inputtext">Mobile No</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputtext"
                      name="mobile_no"
                      value={profile?.mobile_no}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="inputtext">Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputtext"
                      name="street"
                      value={profile?.street}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 pb-5 pt-4 col-offset-3">
                    <a href="#" onClick={handleClose}>
                      Cancel
                    </a>
                  </div>
                  <div className="col-md-6 pb-5 pt-3">
                    <button
                      type="button pull-right"
                      className="form-btn btn btn-warning"
                      onClick={(e) => handleChange(e)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Modal>
          <address>
            <div className="tst">
              <div className="container">
                <div className="contact-info row pt-3">
                  <div className="col-md-3 pl-4">
                    <p>BIO</p>
                  </div>
                  <div className="col-md-9">
                    <p>
                      {data?.profile[0]?.description}
                      {/* {data && data.description
                        ? data.description
                        : ""} */}
                    </p>
                  </div>
                </div>
                <div className="contact-info row">
                  <div className="col-md-3 pl-4">
                    <p>Email</p>
                  </div>
                  <div className="col-md-9">
                    {profiledata.email}
                    {/* {data.email} */}
                  </div>
                </div>

                <div className="contact-info row">
                  <div className="col-md-3 pl-4">
                    <p>Mobile Number</p>
                  </div>
                  <div className="col-md-9">
                    <a href="">
                      {data?.profile[0]?.mobile_no}
                      {/* {data && data.mobile_no
                        ? data.mobile_no
                        : ""} */}
                    </a>
                  </div>
                </div>
                <div className="contact-info row">
                  <div className="col-md-3 pl-4">
                    <p>Address</p>
                  </div>
                  <div className="col-md-9">
                    <a href="">
                      {data?.profile[0]?.street}
                      {/* {data && data.street
                        ? data.street
                        : ""} */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </address>
          <div class="container">
            <div class="row">
              <div class="col-md-12 pl-4">
                <p> Skills</p>
                {console.log("loop", skills)}
              </div>
            </div>
            {skills && (
              <div class="container">
                <div class="row">
                  <ul className="lanuage-tag">{skills}</ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default BioGraphy;
