import React, { Component } from 'react'
import './AccountType.css'
import AccountTypelogo from '../../../img/accountTypelogo.png'
import AccounttypefooterIcon from '../../../img/AccounttypefooterIcon.png'
import cardimg1 from '../../../img/cardimg1.png'
import cardimg2 from '../../../img/cardimg2.png'
import { ArrowRight } from 'react-bootstrap-icons';

export default class AccountType extends Component {

    onNewPageLoad = () => {

            this.props.history.push('/registration-processpages/');
     }

    render() {
    
     
    
        return (
            <div className="main back_g">
                <div className="AccountType">
                  <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3  col-md-3 back_gr sidebarcolheight">
        
                            <div className="p-2">
                            <img className="accounttype_logo" src={AccountTypelogo} alt="Logo"></img>
                             </div>
                            
                            <div className="sidebarMiddleContent p-1">
                            <p className="para_style1">It is a long established fact that a reader will be distracted by the readable layout</p>
                            <p className="para_style2">Creating your account in just a few steps away,
                            Select your account detail type.</p>
                            </div>
                            
                            <div className="sidebarfooterimg ">
                            <img className="" src={AccounttypefooterIcon} alt="Logo"></img>
                            </div>
                            
                        </div>
                        <div className="offset-md-1 offset-sm-1 col-sm-8 col-md-8 right_con">
                        <div className="container">

                        <div className="w-100">
                        <p className="rightHeader">Choose the type of account</p>
                         <p className="rightPara">Creating your account in just a few steps away,<br/>
                         Select your account detail type.</p>
                        </div>


                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6  pt-3">
                                <div onClick={this.onNewPageLoad} className="p-4 card cardfocus">
                                <img className="card-img-top img-wh" src={cardimg1} alt="Logo"></img>
                                <h5 className="card-title">I want a job</h5>
                                <p className="card-text ">It is a long established fact that a reader will be distracted by the readable layout.</p>
                                <ArrowRight color="#1DA799" size={30} />
                             
                                </div>
                               
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 pt-3">
                                <div onClick={this.onNewPageLoad} className="p-4 card cardfocus">
                                <img className="card-img-top img-wh bodr" src={cardimg2} alt="Logo"></img>
                                <h5 className="card-title">I want to hire</h5>
                                <p className="card-text pb-5 ">It is a long established fact that a reader will be distracted by the readable layout.</p>
                                </div>
                            </div>
                        </div>


                            
                        </div>
                        </div>
                        </div>
                   
                    </div>
                </div>
            </div>
        )
    }
}



