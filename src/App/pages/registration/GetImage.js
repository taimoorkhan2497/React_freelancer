import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import ReactDropzone from "react-dropzone";
 import request from "superagent";
 import img from '../../../img/ImageUpload.png'
 
import './IdVerification.css'
import '../../../../src/common.css'

export default class GetImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  onDrop = (files) => {
    //  POST to a test endpoint for demo purposes
     const req = request.post('https://httpbin.org/post');

    files.forEach(file => {
      req.attach(file.name, file);
    });

    req.end();
  }

  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
    });
  }

  render() {
    const previewStyle = {
      display: 'inline',
      width: 100,
      height: 100,
    };
    console.log(this.state.files)
    return (

   
      <div style={{textAlign:"center"}}>
          <div className="imgBack">
            <ReactDropzone
            className="dropzone"
              accept="image/*"
              onDrop={this.onPreviewDrop}
              >
              <div  style={{textAlign:"center"}}> 
                <div className='iv_icon2' style={{backgroundImage: `url(${img})`}}></div> 
                <div><span>Drop your image here,</span><span style={{color:"#1da799"}} >  or browse </span></div>  
              </div>
            </ReactDropzone>
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
