import React, { useEffect, useState} from "react";
import "./Editbio.css";

import list  from '../../App/pages/helper/api';
import {put,patch}  from '../../App/pages/helper/api';
import { useHistory , useParams } from 'react-router-dom';


function EditUser() {
        let history = useHistory();
        const {id} =useParams();
        const [skills, setSkills] = useState ('');       
  const [user, setUser] = useState({
          description :'',
          user : '',
          mobile_no : " ",
          street : " "
    })
  let alldata = {
          description : user.description,
          mobile_no : user.mobile_no,
          street :  user.street,
          user : user.email,
  }
  function loadUser() {
    console.log("show response:");
    list("api/v1/user/25/").then((response) => {
    const data = response.data;
    console.log("freelance id:", data.id);

    setUser(data);

  // const loadUser = () => {
  //         list(`api/v1/profile/${id}/`,alldata)
  //         .then((response) => {
  //         const  {...data} = response.data;
  //         console.log("get data :" ,response.data)
  //         setUser(data);
    //       let skills =['python' , 'Java' , 'HTML' , 'Wordpress' , 'logo ','website design' ,'React'] ;
    //       const user_skills = data.skills.map((skill, index) =>{
          
    //         return(
    //         <li>
    //           <a href="#" class="pl-3 pr-3 pt-1 pb-1"   onChange={e => onInputChange(e)} value={user?.skills?.name} name="skills">{skill.name}</a>
    //         </li>)
    //       })
    // setSkills(user_skills,skills);
          
    })
    
  }

  const onInputChange = e =>
    {
          setUser({...user ,
          [e.target.name]: e.target.value
        })

    }

  const handleChange = async e => {
          e.preventDefault();
  const users = {  
          description : user.description,  
          mobile_no : user.mobile_no,  
          street : user.street,  
          user : user.user ,
          // skills : user.skills.name,
    
      }; 
          put(`api/v1/profile/${id}/`,users)
          .then((response) => {
          console.log("update :" ,user)
          history.push(`/ProfileView`);
          // alert("data has been sucessfully updated")
    })
    }
    useEffect(() => {
      loadUser();
    },[]);
  
  return (
        <div className="ui-comments">
          <div class="container bg-white">
            <div class="row pt-5">
              <div className="btn-edit col-md-6 pl-4">
                <h>Personal Profile</h>
              </div>
              <div class="col-md-6 pr-4">
                <button type="button" class="btn btn-primary btn-sm float-right" onClick={handleChange}>
            Update
                </button>
              </div>
              <address>
                  <div className="container">
                    <div className="contact-info row pt-3">
                      <div className="col-md-3 pl-4">
                        <p>BIO</p> 
                  </div>
                      <div className="col-md-9 pb-3">
                        <p>
                        {
                        <div className="Editbiotext pt-2"> 
                      <textarea
                        type="text"
                        className="form-control"
                        value={user.description}
                        name="description"
                        onChange={e => onInputChange(e)}
                      >
                         </textarea>
                    </div>
                        }
                        </p>
                      </div>
                    </div>
                    <div className="contact-info row">
                      <div className="col-md-3 pl-4">
                        <p>Email</p>
                      </div>
                      <div className="col-md-9">
                      <input 
                        class="form-control"
                        type="text"
                        name="user"
                        value= {user?.user?.email}
                        onChange={e => onInputChange(e)}
                        />
                        
                      </div>
                    </div>
                    <div className="contact-info row">
                      <div className="col-md-3 pl-4">
                        <p>Mobile Number</p>
                      </div>
                      <div className="col-md-9">
                  
                        <input 
                       class="form-control"
                       type="text"
                        name="mobile_no"
                        value={user.mobile_no}
                        onChange={e => onInputChange(e)}
                        />
                        
                      </div>  
                      </div>
                      <div className="contact-info row">
                        <div className="col-md-3 pl-4">
                          <p>Address</p>
                        </div>
                        <div className="col-md-9">
                        <input 
                        class="form-control"
                        type="text"
                        name="street"
                        value={user.street}
                        onChange={e => onInputChange(e)}
                        />
                        </div>
                      </div>
                    </div>
              </address>
              {/* <div class="container">
            <div class="row">
              <div class="col-md-12 pl-4">
              <p> Skills</p>
              {console.log("loop",skills)}
              </div>
            </div>        
            {skills && 
              <div class="container">
                <div class="row">
                    <ul className="lanuage-tag">
                     { 
                      skills  
                    }
                    </ul>
                    </div>
                </div>
            }
          </div> */}
            </div>
          </div>
        </div>
  );
}
export default EditUser;
