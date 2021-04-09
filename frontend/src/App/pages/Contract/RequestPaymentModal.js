import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import GetImage from "../registration/GetImage";
import { post } from "../helper/api"; 
import  list from "../helper/api";
import { useHistory } from "react-router-dom";

function RequestPaymentModal(props) {
  
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("");
  // hook for  imageupload
  const [upload, setUpload] = useState({
    selectedFile: ''
});

  // hook for post  meassage
  const [data, setData] = useState({
    description: "",
    attachments: "" 
  });
 

  // for model pop
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  const handleBinaryImg = (binaryfile)=>{
 
    setSelect(binaryfile)

  }
  // function for image upload

  // function uploadFile(base64file) {
  //   setData({
  //     ...data,
  //     attachments: base64file,
  //   });
  //   console.log("user : ", data);
  // }

  // post API call
//   const onChangeHandler = event => {
//     setUpload({
//      selectedFile: event.target.files,
//     })
// }
// On file upload (click the upload button)

const onClickHandler = () => {
  
  console.log("fileuploader",data)
    post('api/v1/contract/',data)
   .then(res => { 
     console.log(res.statusText)
  })
  setSelect(data);
 }
  const { description } = data;
  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // get data for milestone
  const showData = async (e) => {
    list('api/v1/contract/').then((response) => {
      const data = response.data;
      console.log("response:", response.data);
      setSelect(data);
      console.log("response :", data);
    });
  };
  // UseEffect hook
  useEffect(() => {
    showData();
  }, []);

  return (
    <div className="submit-payment p-3">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Request For payment
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="xl"
        classes={{ paper: "myCustomDialog" }}
      >
        <DialogContent>
          <DialogContentText>
            <div className="modal-main">
              <div className="cont-submit-payment pb-4">
                <div className="proposal-heading text-left">
                  <h1 className="mb-0">Submit Work & Request For Payment</h1>
                  <p>Milestone 01: Wireframe</p>
                </div>
                <div className="m-price text-center pt-4">
                  <h4 className="pb-1">
                    <b>Amount</b>
                  </h4>
                  <div className="container">
                    <div className="modal-amount-inner pt-4 ml-5 mr-5 mb-1">
                      <div className="row amount-row">
                        <div className="col-md-5 text-left pl-4">
                          <p>SAR</p>
                        </div>
                        <div className="col-md-7 text-left pl-4">
                          <p className="digit">{select?.job?.budget}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-msg text-left pt-4">
                  <h3 className="pb-1">Message</h3>
                  <div className="modal-textarea">
                    <textarea
                      placeholder="Type your message to client..."
                      name="description"
                      value={description}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="modal-upload-img text-left">
                 <h3 className="pb-1">Upload Files</h3>
                 {/*   <GetImage
                    idVerf_DL_imgUpload={uploadFile}
                    value="idVerf_DL_imgUpload"
                  /> */}
                  {/* <UploadFile onChange={(e) => onInputChange(e)} /> */}
                  <GetImage
                          onUploadbinaryImg={handleBinaryImg}
                          value="RequestPayment"
                        />
                </div>
                <div className="bid-buttons d-flex justify-content-center pb-4 mt-5">
                  <button
                    class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary"
                    tabindex="0"
                    type="button"
                  >
                    <span class="MuiButton-label">Cancel</span>
                    <span class="MuiTouchRipple-root"></span>
                  </button>
                  <button
                    onClick={onClickHandler}
                    class="btn btn--yellow btn--medium"
                    autoFocus
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default RequestPaymentModal;
