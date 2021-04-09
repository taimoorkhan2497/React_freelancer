import React, { Component } from "react";
import { withRouter } from "react-router";

import {
  Linkedinlogin,
  GettingLinkedinAccessToken,
} from "../../../redux/auth/authCrud";
import _ from "lodash";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

class LinkedInPage extends Component {
  constructor(props) {
    super(props);

    this.winUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=r_liteprofile&state=123456&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

    this.state = {
      authorizationCode: "",
      errorMessage: "",
      access_token: "",

      isAuthorized: false,
      firstName: null,
      lastName: null,
      profileURL: null,
      pictureURL: null,
    };
    this.linkedinRequest = this.linkedinRequest.bind(this);
    this.getParameterByName = this.getParameterByName.bind(this);
  }

  handleSuccess = () => {
    if (this.state.authorizationCode) {
      GettingLinkedinAccessToken(this.state.authorizationCode)
        .then((response) => {
          this.setState({ access_token: response.data.access_token });
          if (this.state.access_token) {
            const data = JSON.stringify({
              access_token: this.state.access_token,
              code: this.state.authorizationCode,
            });

            Linkedinlogin(data)
              .then(({ data: { token } }) => {
                localStorage.setItem("token", token);

                if (localStorage.getItem("token")) {
                  this.props.history.push("/");
                }
              })
              .catch(() => {
                // disableLoading();
              });
          } else {
          }
        })
        .catch(() => {
          // disableLoading();
        });
    }
  };

  getParameterByName(name, search) {
    const match = RegExp("[?&]" + name + "=([^&]*)").exec(search);
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  }

  linkedinRequest() {
   
    /* Creates a new Window */
    const newWindow = window.open(this.winUrl, "_blank", true, 500, 600);

    if (window.focus) {
      newWindow.focus();
    }

    const intr = setInterval(() => {
      // if the window gets closed for any reason then clear the interval to prevent this from running for ever
      if (newWindow.closed) {
        clearInterval(intr);
      }

      // if we are able to read the location.search, then its back to the correct domain
      // if not, then it's on api or the provider domain and we can't read the location
      let search;
      try {
        search = newWindow.location.search;
      } catch (e) {
        // we are ignoring this because the error is going to be CORS related
      }

      if (search) {
        // grab the token and error from the location of the popup window
        const authCode = this.getParameterByName("code", search);
        const error = this.getParameterByName("error", search);

        /* This is used to stoken the authorization code */
        const linkedInAuthCode = authCode;

         this.setState({ authorizationCode: linkedInAuthCode });

        /* LinkedIn Base url */

        if (this.state.authorizationCode) {
          this.handleSuccess();
        }
        /* Sending Request object to server js file where the actual request is going to get fire for access token */

        /* This will close the window popup automatically once all the above requests are completed */
        newWindow.close();
      }
    }, 100);
  }

  render() {
    const { code, errorMessage, access_token } = this.state;
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary btn-block "
          onClick={this.linkedinRequest}
        >
          Signup with
          <span className="pl-2">
            Linked <LinkedInIcon />
          </span>
        </button>

        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default withRouter(LinkedInPage);
