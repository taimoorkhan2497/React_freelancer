import React, { Component, Fragment } from "react";
import ReactDropzone from "react-dropzone";
import request from "superagent";
import img from "../../../img/ImageUpload.png";
import "./IdVerification.css";
import "../../../../src/common.css";
import "./getimage.css";

import { ProfessionalProfileAction } from "../../../redux/actions/ProfessionalProfileAction";
import { connect } from "react-redux";
import { post } from "../helper/api";

class GetImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filesBase64: "",
      certificate: "",
      Id_Card: "",
      Driving_License: "",
      profileBinarypic:"",
      fileBinary: null,
    };
  }

  //  handleChange=(event)=> {
  // this.setState({
  //   file: URL.createObjectURL(event.target.files[0]),
  //   currentFile: event.target.files[0],
  // })
  // let data = new FormData();
  // { file: event.target.files[0] ,
  //              model : "profile",
  //              model_id: 4,
  //              type: "certification",
  // }
  // data.append("file",event.target.files[0]);
  // data.append("model","profile");
  // data.append("model_id",4);
  // data.append("type","certification")
  // console.log("we are here");

  //      post('api/v1/attachment/',data)
  //      .then((response)=>{
  //             console.log("res",response)
  //         })
  //         .catch((error)=>console.log(error))
  // }

  componentDidMount() {
    var stored_Driving_License = JSON.parse(
      localStorage.getItem("driving_License")
    );
    this.setState({ Driving_License: stored_Driving_License });
    var stored_Id_Card = JSON.parse(localStorage.getItem("id_card"));
    this.setState({ Id_Card: stored_Id_Card });
    
    var stored_Certificate = JSON.parse(localStorage.getItem("certificate"));
    this.setState({ certificate: stored_Certificate});

  }

  onDrop = (files) => {
    //  POST to a test endpoint for demo purposes
    //  const req = request.post('https://httpbin.org/post');
    //

    files.forEach((file) => {
      // req.attach(file.name, file);

      this.setState({ filesBase64: "" });
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        var base64Image = btoa(
          new Uint8Array(binaryStr).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        this.setState({ filesBase64: base64Image });
        this.setState({ profileBinarypic: base64Image });

        // if(base64Image)
        // {

        //      if(this.props.value === "onUpload")
        //      {
        //       this.props.onUpload(base64Image);
        //      }

        //      else if(this.props.value === "idVerf_DL_imgUpload")
        //      {
        //       this.props.idVerf_DL_imgUpload(base64Image);
        //      }

        //      else if(this.props.value === "idVerf_IC_imgUpload")
        //      {
        //       this.props.idVerf_IC_imgUpload(base64Image);
        //      }

        // }
        if (this.props.value === "onUpload") {
          this.props.onUpload(files[0]);
          localStorage.setItem("certificate", JSON.stringify(base64Image));
          this.setState({ certificate: base64Image });
        } else if (this.props.value === "idVerf_DL_imgUpload") {
          this.props.idVerf_DL_imgUpload(files[0]);
          localStorage.setItem("driving_License", JSON.stringify(base64Image));
          this.setState({ Driving_License: base64Image });
        } else if (this.props.value === "idVerf_IC_imgUpload") {
          localStorage.setItem("id_card", JSON.stringify(base64Image));
          this.props.idVerf_IC_imgUpload(files[0]);
          this.setState({ Id_Card: base64Image });
        }
         else if (this.props.value === "RequestPayment") {
          this.props.onUploadbinaryImg(files[0]);
        }
         else if (this.props.value === "Profilepic") {
          this.props.profilePicUpload(files[0]);
        }
      };
      reader.readAsArrayBuffer(file);
    });
  }; // drop end;


  render() {
    let { Driving_License, Id_Card, certificate, filesBase64, profileBinarypic } = this.state;
    return (
      <div className="style">
        <div className="imgBack">
          {certificate != "" && this.props.value === "onUpload" ? (
            <div>
              <ReactDropzone
                className={this.props.value === 2 ? "dropzone2" : "dropzone"}
                accept="image/*"
                onDrop={this.onDrop}
              >
                <div className="imgcssclass">
                  <img
                    className="newimage"
                    src={`data:image/png;base64,` + certificate}
                  />
                </div>
              </ReactDropzone>
            </div>
          ) : Id_Card != "" && this.props.value === "idVerf_IC_imgUpload" ? (
            <div>
              <ReactDropzone
                className={this.props.value === 2 ? "dropzone2" : "dropzone"}
                accept="image/*"
                onDrop={this.onDrop}
              >
                <div className="imgcssclass">
                  <img
                    className="newimage"
                    src={`data:image/png;base64,` + Id_Card}
                  />
                </div>
              </ReactDropzone>
            </div>
          ) : Driving_License != "" &&
            this.props.value === "idVerf_DL_imgUpload" ? (
            <div>
              <ReactDropzone
                className={this.props.value === 2 ? "dropzone2" : "dropzone"}
                accept="image/*"
                onDrop={this.onDrop}
              >
                <div className="imgcssclass">
                  <img
                    className="newimage"
                    src={`data:image/png;base64,` + Driving_License}
                  />
                </div>
              </ReactDropzone>
            </div>
          )  : profileBinarypic != "" &&
            this.props.value === "Profilepic" ? (
            <div>
              <ReactDropzone
                className={this.props.value === "Profilepic" ? "profileViewPic" : "dropzone2"}
                accept="image/*"
                onDrop={this.onDrop}
              >
                <div className="imgcssclass">
                  <img
                    className="profileBinarypicnewimage"
                    src={`data:image/png;base64,` + profileBinarypic}
                  />
                </div>
              </ReactDropzone>
            </div>
          ) 
          : filesBase64 != "" &&
          this.props.value === "Profilepic" ? (
          <div>
            <ReactDropzone
              className={this.props.value === "RequestPayment" ? "dropzone" : "dropzone2"}
              accept="image/*"
              onDrop={this.onDrop}
            >
              <div className="imgcssclass">
                <img
                  className="profileBinarypicnewimage"
                  src={`data:image/png;base64,` + filesBase64}
                />
              </div>
            </ReactDropzone>
          </div>
        ) 
          
          
          : filesBase64 != "" ? (
            <div>
              <ReactDropzone
                className={this.props.value === 2 ? "dropzone2" : "dropzone"}
                accept="image/*"
                onDrop={this.onDrop}
              >
                <div className="imgcssclass">
                  <img
                    className="newimage"
                    src={`data:image/png;base64,` + Id_Card}
                  />
                </div>
              </ReactDropzone>
            </div>
          ) : (
            <ReactDropzone
              className={this.props.value === 2 ? "dropzone2" : "dropzone"}
              accept="image/*"
              onDrop={this.onDrop}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  className="iv_icon2"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <div>
                  <span style={{ cursor: "pointer" }}>
                    Drop your image here,
                  </span>
                  <span style={{ color: "#1da799", cursor: "pointer" }}>
                    {" "}
                    or browse{" "}
                  </span>
                </div>
              </div>
            </ReactDropzone>
          )}
        </div>
        {/*<h2>Image Previews</h2>
        {this.state.files.length > 0 &&
          <Fragment>
            <h3>Previews</h3>
            {this.state.files.map((file) => (
              <img
                alt="Preview"
                key={file.preview}
                src={file.preview}
                style={previewStyle}
              />
            ))}
          </Fragment>
        } */}
      </div>
    );
  }
}

export default GetImage;
