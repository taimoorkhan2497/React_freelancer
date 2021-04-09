import React, { Component } from 'react'
import { email_verification } from "../../../redux/auth/authCrud";
import { Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

export default class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        this.alert = {
            open: false,
            severity: "",
            message: "",
            title: "",
          };
        this.state={
            alert:this.alert

        }
   
    }    
    handleClose() {
        this.setState({ alert: { open: false, severity: "", message: "" } });
      }


    submitData=()=>{
      const query= new URLSearchParams(this.props.location.search)
        const { match, location, history } = this.props;
        
              let   user_id =  query.get("user_id")
              let   timestamp = query.get("timestamp")
              let  signature = query.get("signature")
            
         email_verification(user_id,timestamp,signature)
        .then((res) => {
            this.setState({
              alert: {
                open: true,
                severity: "success",
                title: "success",
                message: "you email verify Sucessfully",
              },
            });
            setTimeout(() => {
              this.props.history.push("/login");
            }, 2000);
          })
          .catch((error) => {
            this.setState({
              alert: {
                open: true,
                severity: "error",
                title: "Error",
                //  message:`${key+": "+error.response.data[key][0]}`
                message: "User not Created ",
              },
            });
          });
    }

    render() {
        const { match, location, history } = this.props;
        let {
         
            alert: { open, severity, message, title },
          
          } = this.state;
      
        return (
            <div>
            <Snackbar
          open={open}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={() => {
            this.handleClose();
          }}
        >
          <Alert

            onClose={() => {
              this.handleClose();
            }}
            severity={severity}
          >
            <AlertTitle>{title}</AlertTitle>
            <strong>{message}</strong>
          </Alert>
          
        </Snackbar>
            <h1> verify email</h1>
            <button onClick={()=>{this.submitData()}}> verify </button>
            </div>
        )
    }
}
