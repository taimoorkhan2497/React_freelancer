import React, { Component } from 'react'
import "./Help.css"
import  DefaultMenu from '../jobs/DefaultMenu'
import Navbar from '../../../components/Navbar'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';




export default class Help extends Component {
    state= {showForm:  false}

    showForm = (e) => {
        return (
          <div> 
 
     
            <h1> form</h1>

           </div>
          );
      }

    render() {
        return (
            <div className="Main">
             <div class="container-fluid">
               
             <div className=''>
              <Navbar text="" value="Post a Project" /> 
             <DefaultMenu />
             
             </div>
           
             </div>


            <div className="container-fluid dummy">
            
             <div className="test-class">
                <div className="row">
                <Button
                variant="contained"
                color="warning"
                onClick={() => { this.setState({showForm: true}) }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
           
                </div>

                {this.state.showForm ? this.showForm() : null}

             <p className="my-class">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             </p>
             </div>
            
             </div>

             <div>

             <button type="button" class="btn btn-success rounded-circle">Success</button>
         </div>
         
            </div>
          );
    }
}
