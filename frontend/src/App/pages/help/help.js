import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import Header from '../../../components/header/Header';
import  "./help.css";

const Help=()=> {
    const [show, setShow] = useState(false)
    return (
        <div className="help">
            {/* top header */}
                <div>
          <Header/>
            {/* top header */}
            <div className="main-area">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-md-12 align-self-center bg-white pb-4">
                            <div class="pg-heading pt-5 pb-4 pl-3 pr-3">
                                <h3 class="font-weight-bold text-capitalize pull-left">Help</h3>
                                {/*<button onClick={()=>setShow(true)} class="btn btn-warning text-white text-uppercase font-weight-bold pull-right">
                                <i class="fa fa-plus"></i> New Query</button>*/}

                                <div class="btn btn-warning text-white btn-lg button-color pull-right"><a onClick={()=>setShow(true)} class="popup-with-form" href="#"><i class="fa fa-plus"></i>New Query</a></div>
                            </div>

                            <div class="q-list pt-4 pr-3 pl-3 ">
                                <h4>Get Started</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tincidunt diam. Pellentesque tincidunt velit quam. Proin venenatis eget nibh vel scelerisque. Donec vulputate, augue nec rutrum aliquet, diam odio rhoncus augue, ut sollicitudin nulla eros nec orci. Duis quis diam interdum neque fringilla porttitor blandit vitae eros. Duis luctus, ante sed dignissim pharetra, ante quam fermentum tellus, id vehicula magna nulla id magna. Fusce sit amet viverra tellus.</p>
                            </div>
                            <div class="q-list pt-4 pr-3 pl-3 ">
                                <h4>Build Your Profile</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tincidunt diam. Pellentesque tincidunt velit quam. Proin venenatis eget nibh vel scelerisque. Donec vulputate, augue nec rutrum aliquet, diam odio rhoncus augue, ut sollicitudin nulla eros nec orci. Duis quis diam interdum neque fringilla porttitor blandit vitae eros. Duis luctus, ante sed dignissim pharetra, ante quam fermentum tellus, id vehicula magna nulla id magna. Fusce sit amet viverra tellus.</p>
                            </div>
                            <div class="q-list pt-4 pr-3 pl-3 ">
                                <h4>Fine a Project</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tincidunt diam. Pellentesque tincidunt velit quam. Proin venenatis eget nibh vel scelerisque. Donec vulputate, augue nec rutrum aliquet, diam odio rhoncus augue, ut sollicitudin nulla eros nec orci. Duis quis diam interdum neque fringilla porttitor blandit vitae eros. Duis luctus, ante sed dignissim pharetra, ante quam fermentum tellus, id vehicula magna nulla id magna. Fusce sit amet viverra tellus.</p>
                            </div>
                            <div class="q-list pt-4 pr-3 pl-3 ">
                                <h4>Start Working</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tincidunt diam. Pellentesque tincidunt velit quam. Proin venenatis eget nibh vel scelerisque. Donec vulputate, augue nec rutrum aliquet, diam odio rhoncus augue, ut sollicitudin nulla eros nec orci. Duis quis diam interdum neque fringilla porttitor blandit vitae eros. Duis luctus, ante sed dignissim pharetra, ante quam fermentum tellus, id vehicula magna nulla id magna. Fusce sit amet viverra tellus.</p>
                            </div>
                            <div class="q-list pt-4 pr-3 pl-3 ">
                                <h4>Get Paid</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tincidunt diam. Pellentesque tincidunt velit quam. Proin venenatis eget nibh vel scelerisque. Donec vulputate, augue nec rutrum aliquet, diam odio rhoncus augue, ut sollicitudin nulla eros nec orci. Duis quis diam interdum neque fringilla porttitor blandit vitae eros. Duis luctus, ante sed dignissim pharetra, ante quam fermentum tellus, id vehicula magna nulla id magna. Fusce sit amet viverra tellus.</p>
                            </div>


                            <Modal show ={show}
                                dialogClassName="modal-90w"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered

                            >
                                <Modal.Header style={{borderBottom:"0"}}>
                                    <Modal.Title id="contained-modal-title-vcenter">Query</Modal.Title>
                                </Modal.Header>
                                <form>
                                <Modal.Body>

                                    <label style={{width:"100%",fontWeight:"500",fontSize: "12px"}}> Email</label>
                                    <input style={{width:"100%",padding:"5px",border:"1px solid rgba(107, 107, 106, 0.2)",borderRadius:"5px"}} type="text" name="name" placeholder="Enter your Email" />
                                    <label style={{width:"100%",fontWeight:"500",fontSize: "12px",marginTop:"25px"}}> Your Query</label>
                                    <textarea rows={10} style={{width:"100%",padding:"5px",border:"1px solid rgba(107, 107, 106, 0.2)",borderRadius:"5px"}} placeholder="Text Here" />



                                </Modal.Body>
                                <Modal.Footer style={{borderTop:"0",justifyContent: "center",paddingBottom: "30px"}}>
                                    <Button style={{background: "transparent",color: "#6B6B6A"}} onClick={()=>setShow(false)}>CANCEL</Button>
                                    <Button type="submit" value="Submit" style={{backgroundColor: "#EE9821"}} class="btn-warning text-white">SUBMIT</Button>

                                </Modal.Footer>
                                </form>
                            </Modal>



                        </div>{/*-------*/}

                </div>
            </div>
        </div>
    </div>
</div>

    )
}
export default  Help