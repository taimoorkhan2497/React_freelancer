import axios from "axios";

export const LOGIN_URL = "api/v1/accounts/login/";

export const SIGNUP_URL = "api/v1/accounts/register/";

export const  Linkedin_redirect_urI  = "&redirect_uri=http://localhost:3000"

export const  Linkedin_LOGIN_URL  = "api/v1/rest-auth/linkedin/"

export const  Verify_Email  = "api/v1/accounts/verify-registration/"


export function login(login, password) {
    // return axios.post(LOGIN_URL, { email, password })
    return axios.post(process.env.REACT_APP_API_URL + LOGIN_URL, { login, password})
  }


export function email_verification (user_id,timestamp,signature)
 {
     console.log({user_id,timestamp,signature})
    return axios.post(process.env.REACT_APP_API_URL + Verify_Email, {user_id,timestamp,signature})
  }

export function sign_up(data) {

  let config ={

    headers : {
                  'Content-Type': 'application/json',
                 
              }
          }

    // return axios.post(LOGIN_URL, { email, password })
    return axios.post(process.env.REACT_APP_API_URL + SIGNUP_URL,data,config)
  }


  export function GettingLinkedinAccessToken (code)
  {
    let config = {
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return axios.post(process.env.REACT_APP_LINKEDIN_API_URL+code+Linkedin_redirect_urI)

  }


  export function Linkedinlogin(data) {
   
    let config ={

      headers : {
                     'Content-Type': 'application/json',
                      'Content-Length': data.length,
                }
            }
   
    return axios.post(process.env.REACT_APP_API_URL + Linkedin_LOGIN_URL,data,config)

  }
