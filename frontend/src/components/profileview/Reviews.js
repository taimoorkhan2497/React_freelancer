import React, { useEffect, useState } from "react";
import "./Reviews.css";
import Stanton from "../../assets/Stanton.png";
import Cooper from "../../assets/Cooper.png";
import Button from "../Button";
import CustomizedRatings from "../../App/pages/jobs/Rating";
import list from "../../App/pages/helper/api";


function createData(id, user, title, description) {
  return { id,title, user, description};
}

export function Reviews() {
  const [reviews, setReviews] = useState();
  const [visible, setVisible] = useState(2)

  function Review() {
    list("api/v1/profile/").then((response) => {
      let Reviewdata = [];
      console.log("response :", response);
      response.data.map((review) => {
        Reviewdata.push(
          createData(review.id, review.user, review.title, review.description)
        );
      });

      setReviews(Reviewdata);
    });
  }
  const loadMore = () =>{
    setVisible((prevValue) => prevValue +5);
  
    
  };
  useEffect(() => {
    Review();
  }, []);

 
  return (
    <div className="Reviews">
      <div class="container bg-white">
        <div class="review-row pt-4 pb-3">
          <div class="col-md-12">
            <div class="font-weight-bold">
              <h className="reviews-header">Reviews & Rating</h>
            </div>
          </div>
        </div>

        <div class="container">
          
          {reviews?.slice(0, visible).map((review) => (
            <div class="row pb-3">
              <div class="col-md-6 pb-3 pt-3">
                <img src={Stanton} alt="/" />
                {/* <h class="pl-3"> {review?.user?.username} </h> */}
                <h class="pl-3"> Ann Stanton </h>
              </div>
              <div class="col-md-6 pt-3">
                <div className="float-right">
                  <CustomizedRatings />
                  <p className="rate-start float-right pl-3 pr-3">4.5</p>
                </div>
              </div>
              <div class="col-md-12">
                {/* <p>{review.description}</p> */}
                
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 It has survived not only five centuries, </p>

              </div>
            </div>
          ))}
         
          <div class="row pb-4"> 
            <div class="col-md-12 offset-md-4">
              <div className="btn-load">
                <Button buttonStyle="btn--load" value="LOAD MORE" onClick={loadMore}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reviews;
