import React, { Component } from 'react'
import './Reports.css';
import './PaymentWithdraw.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "../../../components/Dropdown";
import Modal from "react-bootstrap/Modal";
import CloseIcon from '@material-ui/icons/Close';



export default class PaymentWithdraw extends Component {
    
	constructor(props){
		super(props);

		this.state = {
			show:false,
		    RadioclassActive: 0, 
		}

    this.dropDownHandler = this.dropDownHandler.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleShow = this.handleShow.bind(this);
	}

    
   dropDownHandler (provideService2)
   {
	 this.setState({provideService:provideService2})
   }

   handleClose (event)
   {
	 this.setState({show:false})
   }

   handleSave (event){
	 this.setState({show:false})
   }

   handleShow (event){
	 this.setState({show:true})
   }

    render() { 
        return (	
        <div className="payment-withdraw">
			<div className="pw-heading">
                Payment Methods
				<span>
				<button onClick={this.handleShow}>Add Method</button>
				</span>
			</div>
			<Modal show={this.state.show}>
          <div className="container">
            <form>
              <div className="row pt-4 pb-3">
              <div className="form-header modal-properties col-md-8 ">
                <p>Bank Details</p>
				<t>Required to receive payments</t>
                </div>
                <div className="col-md-4">
                <CloseIcon onClick={this.handleClose} className="float-right" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="inputtext">Username</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputtext"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="inputtext">Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputtext"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="inputtext">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputtext"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-6 pb-5 pt-4 pull-left">
                  <a href="#"  onClick={this.handleClose}>
                    Cancel
                  </a>
                  </div>
                  <div className="col-md-6 pb-5 pt-3">
                  <button type="button pull-right" className="form-btn btn btn-warning" onClick={this.handleSave}>
                    Save Changes
                  </button>
                  </div>
              </div>
            </form>
          </div>
        </Modal>
		<div class="pw-methods col-md-12">
		<div className={"row pb-3 pt-3 "+ (this.state.RadioclassActive=== 1 ? 'RadioActiveborder': 'hidden')} onClick={() => this.setState({ RadioclassActive: 1 })}>
				<div class="col-md-10 col-lg-10 col-sm-12 ">
					<div class="pb-2 pt-2">
					<span ><FontAwesomeIcon icon={faLandmark} size="2x" color={"" +(this.state.RadioclassActive=== 1 ? '#1DA799' : '#a6a6a6')} onClick={() => this.setState({RadioclassActive: 1 })} /></span>
						<span> Riyad Bank</span>
					</div>
					<p class="font-weight-bold">Direct to local bank (INR) - Account ending in 086</p>
				</div>
				<div class="col-md-2 col-lg-2 col-sm-12 pull-right">
					<FontAwesomeIcon icon={faEdit} size="1x" color='#a6a6a6' cursor='pointer'/>
			   <br></br>
					<FontAwesomeIcon icon={faTrash} size="1x"color='#a6a6a6' cursor='pointer'/>
				</div>
			</div>
			
			<div className={"row pb-3 pt-3 "+ (this.state.RadioclassActive=== 2 ? 'RadioActiveborder': 'hidden')}  onClick={() => this.setState({ RadioclassActive: 2 })}>
				<div class="col-md-10 col-lg-10 col-sm-12">
					<div class="pb-2">
						<span ><FontAwesomeIcon icon={faLandmark} size="2x" color={"" +(this.state.RadioclassActive=== 2 ? '#1DA799' : '#a6a6a6')} onClick={() => this.setState({RadioclassActive: 2 })} /></span>
						<span class="font-weight-bold"> Al Rajhi Bank</span>
					</div>
					<p class="font-weight-bold">Direct to local bank (INR) - Account ending in 0676</p>
				</div>
				<div class="col-md-2 col-lg-2 col-sm-12 pull-right">
				<FontAwesomeIcon icon={faEdit}  color='#a6a6a6' cursor='pointer'/>
			   <br></br>
					<FontAwesomeIcon icon={faTrash} size="1x" color='#a6a6a6' cursor='pointer'/>
				</div>
			</div>
			</div>
            <div className="pw-schedule">
				<div className="pw-schedule-details">
				<p>Payment Details</p>
				<t>Weekly (next on 10/01/2021) to Direct to Riyad Bank. Account ending in 0086.</t>
				<button className="pw-schedule-button">Edit Scedule</button>
				</div>
			</div>
			<div className="my-profile-links col-md-12">
            <a href="">discard changes</a>
            <button>save changes</button>
            </div>
			</div>
		);
    }
}

