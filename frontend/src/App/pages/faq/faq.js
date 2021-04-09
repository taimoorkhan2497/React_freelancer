import React from 'react'
/*import Navbar from './Navbar';*/
/*import DefaultMenu from './DefaultMenu';*/
//import Proposal from './Proposal';
/*import AvatarImage from '../../../../src/AvatarImage.png';*/
// import img from "../../../img/stars1.png"
import Header from '../../../components/header/Header';
import  "./faq.css";

export default function faq() {
    return (
        <div className="faq">
            {/* top header */}
            {/*<div className="top-area">
                <div className='si-container'>
                    <Navbar text="" value="Post a Project" /> 
                </div> 
                <div className='default-menu '>
                    <DefaultMenu />
                </div>
            </div>*/}
            <Header/>
            {/* top header */}
            <div className="main-area">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-md-12 align-self-center bg-white pb-4">
                            <div class="pg-heading pt-5 pb-4 pl-3"><h3 class="font-weight-bold text-uppercase">Faq's</h3></div>


                            <div class="accordion" id="accordionExample">
                                <div class="card border-0">
                                    <div class="card-header bg-white" id="headingOne">
                                        <h2 class="mb-0">
                                            <button type="button" class="btn btn-link font-weight-bold text-dark text-left w-100 pl-0 pr-0" data-toggle="collapse" data-target="#collapseOne"> How can we help you Lorem ipsum? <i class="fa fa-minus pull-right"></i></button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tincidunt diam. Pellentesque tincidunt velit quam. Proin venenatis eget nibh vel scelerisque. Donec vulputate, augue nec rutrum aliquet, diam odio rhoncus augue, ut sollicitudin nulla eros nec orci. Duis quis diam interdum neque fringilla porttitor blandit vitae eros. Duis luctus, ante sed dignissim pharetra, ante quam fermentum tellus, id vehicula magna nulla id magna. Fusce sit amet viverra tellus.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0">
                                    <div class="card-header bg-white" id="headingTwo">
                                        <h2 class="mb-0">
                                            <button type="button" class="btn btn-link font-weight-bold text-dark text-left w-100 pl-0 pr-0" data-toggle="collapse" data-target="#collapseTwo"> How can we help you Lorem ipsum? <i class="fa fa-plus pull-right"></i></button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tincidunt diam. Pellentesque tincidunt velit quam. Proin venenatis eget nibh vel scelerisque. Donec vulputate, augue nec rutrum aliquet, diam odio rhoncus augue, ut sollicitudin nulla eros nec orci. Duis quis diam interdum neque fringilla porttitor blandit vitae eros. Duis luctus, ante sed dignissim pharetra, ante quam fermentum tellus, id vehicula magna nulla id magna. Fusce sit amet viverra tellus.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0">
                                    <div class="card-header bg-white" id="headingThree">
                                        <h2 class="mb-0">
                                            <button type="button" class="btn btn-link font-weight-bold text-dark text-left w-100 pl-0 pr-0" data-toggle="collapse" data-target="#collapseThree"> How can we help you Lorem ipsum? <i class="fa fa-plus pull-right"></i></button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tincidunt diam. Pellentesque tincidunt velit quam. Proin venenatis eget nibh vel scelerisque. Donec vulputate, augue nec rutrum aliquet, diam odio rhoncus augue, ut sollicitudin nulla eros nec orci. Duis quis diam interdum neque fringilla porttitor blandit vitae eros. Duis luctus, ante sed dignissim pharetra, ante quam fermentum tellus, id vehicula magna nulla id magna. Fusce sit amet viverra tellus.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0">
                                    <div class="card-header bg-white" id="headingThree">
                                        <h2 class="mb-0">
                                            <button type="button" class="btn btn-link font-weight-bold text-dark text-left w-100 pl-0 pr-0" data-toggle="collapse" data-target="#collapseFour"> How can we help you Lorem ipsum? <i class="fa fa-plus pull-right"></i></button>
                                        </h2>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tincidunt diam. Pellentesque tincidunt velit quam. Proin venenatis eget nibh vel scelerisque. Donec vulputate, augue nec rutrum aliquet, diam odio rhoncus augue, ut sollicitudin nulla eros nec orci. Duis quis diam interdum neque fringilla porttitor blandit vitae eros. Duis luctus, ante sed dignissim pharetra, ante quam fermentum tellus, id vehicula magna nulla id magna. Fusce sit amet viverra tellus.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0">
                                    <div class="card-header bg-white" id="headingThree">
                                        <h2 class="mb-0">
                                            <button type="button" class="btn btn-link font-weight-bold text-dark text-left w-100 pl-0 pr-0" data-toggle="collapse" data-target="#collapseFive">How can we help you Lorem ipsum? <i class="fa fa-plus pull-right"></i></button>
                                        </h2>
                                    </div>
                                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tincidunt diam. Pellentesque tincidunt velit quam. Proin venenatis eget nibh vel scelerisque. Donec vulputate, augue nec rutrum aliquet, diam odio rhoncus augue, ut sollicitudin nulla eros nec orci. Duis quis diam interdum neque fringilla porttitor blandit vitae eros. Duis luctus, ante sed dignissim pharetra, ante quam fermentum tellus, id vehicula magna nulla id magna. Fusce sit amet viverra tellus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>{/*-------*/}

                </div>
            </div>
        </div>
    </div>

       
    )
}
