import React, { useEffect, useState } from "react";
import "./card.css";
import Status from "../../assets/Status.png";
import download from "../../assets/download.png";
import Display from "../../assets/Display.png";
import Cooper from "../../assets/Cooper.png";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import StarRateIcon from "@material-ui/icons/StarRate";
import Uploading from "./ImageUploader";
import list from "../../App/pages/helper/api";
import { useParams } from "react-router-dom";

function Card() {
  // const {id} =useParams();
  // const currentDate = split({"T11", 1})

  const currentTime = new Date()
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();

  const currentDate = new Date()
    .toDateString([],
      { 
        month: "2-digit",
        year: "2-digit",
        year12: true 
      })
    .toLowerCase();


    //
    const [profiledata, setprofileData] = useState({
      email: "",
    });
    const [id, setId] = useState();
    const [profile, setProfile] = useState({
      street: "",
      mobile_no: "",
      description: 'enter you details here ',
    });

    const [createdDate , setcreatedDate] =  useState("")
    const [data, setData] = useState({
      profile: [
        {
          street: "",
          mobile_no: "",
          // description: profile?.description,
          id: "",
          proposal_amount: " ",
          created_at : ""
  
        },
      ],
    });
    //
  // const [id, setId] = useState();
  // const [profile, setProfile] = useState({
  //   proposal_amount: "",
  // });
  // const [dataprofile, setDataProfile] = useState({
  //   profile: [
  //     {
  //       street: "",
  //       mobile_no: "",
  //       id: "",
  //       proposal_amount: " ",
  //       created_at : ""
  //     },
  //   ],
  // });
  const [carddata, setcardData] = useState("");
  const [getCardData, setGetCardData] = useState({

    city: "",
    username: "",
    service: "",
    proposal_amount: "",
  });

// for username and id 
  function dataCollection() {
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
  // for getting  proposal_amount created date  

  const getCityData = () => {
    list(`api/v1/user/${id}/`)
    .then((response) => {
      const data = response.data;
      console.log("UserApi", data);
      setProfile({
        street: data?.profile[0]?.street,
        mobile_no: data?.profile[0]?.mobile_no,
      });
      console.log("faiza",response.data.profile[0].id)
      var profileId = response.data.profile[0].id
      setcreatedDate(data?.profile[0]?.created_at)
      localStorage.setItem("profileId",profileId)
      setData(data);
    });
  };
// for getting city and country 

  const cardData = () => {
var getProfileiD =  localStorage.getItem("profileId")

    list(`api/v1/freelancer_profile/${getProfileiD}/`)
      .then((response) => {

        const data = response.data;
        console.log("freelancerd:", response.data);
        setGetCardData(data);
        console.log("hourly rate :",data)
      });
  };

  useEffect(() => {
    dataCollection();
    cardData();
  }, []);

  useEffect(() => {
    if (id !== 0)
     getCityData();
  }, [id]);

  return (
    <div className="CarD ">
      <div className="container">
        <div className="row bg-white">
          <div className="col-md-12">
            <div className="pt-3 pb-2">
              <Uploading />
            </div>
            <div className="profile pt-3">
              <h5>
                <b>
                  {profiledata.first_name} {profiledata.last_name}
                </b>
              </h5>
              <h5>{getCardData.service}
              {console.log("hourly rate : ",getCardData.service)}</h5>
            </div>
            <div className="text-center pb-1">
              4.5 <StarRateIcon style={{ color: "orange" }} />
            </div>
            <div className="complete-profile pb-3">
              <h5>Completed Profile</h5>
              <span style={{ color: "#34c1ae" }}> 3/5 </span>Followups
            </div>
            <div className="Details-subtext">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Details</h5>
                  </div>
                </div>
                <address>
                  <div className="row">
                    <div className="col-md-2">
                      <LocalOfferIcon className="img_setting" />
                    </div>
                    <div className="col-md-10">
                      <a href="">
                        <p>SAR {data?.profile[0]?.id} Per/Hour</p>
                      </a>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src={download}
                        className="img_setting_Indore"
                        alt=" "
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="">
                        <p>{getCardData?.city?.name}</p>
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <WatchLaterIcon className="img_setting" />
                    </div>
                    <div className="col-md-10">
                      <a href="">
                        <p>It’s Currently {currentTime} here</p>
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src={Display}
                        className="img_setting_screen"
                        alt=""
                      />
                    </div>
                    <div className="col-md-10">
                    
                      <a href="">
                        <p>
                          Join {   createdDate.split("T11", 1)}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <FavoriteIcon className="img_setting" />
                    </div>
                    <div className="col-md-10">
                      <a href="10 Recommendation">
                        <p>10 Recommendation</p>
                      </a>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
