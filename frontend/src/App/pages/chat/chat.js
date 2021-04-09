import React, {useState} from 'react'
/*import Navbar from './Navbar';
import DefaultMenu from './DefaultMenu';
import AvatarImage from '../../../../src/AvatarImage.png';
import {Modal, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import tuwaiqlogo from '../../../../src/tuwaiqlogo.svg'*/
import  "./chat.css";
import Header from '../../../../src/components/header/Header'

export default function chat() {
    return (
<div className="chat">

<Header />

   <div id="snippetContent">
    <main class="content">
        <div class="chat">
            <div class="container p-0">
            <div class="card">
                <div class="row m-0 pl-4 border-bottom">
                    <div class="search-contacts">
                        <input type="text" class="form-control my-3" placeholder="Type to Search..." />
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-12 col-lg-5 col-xl-3 border-right pr-lg-0">
                        <h6 class="py-4 px-4 border-bottom d-none d-lg-block">All Conversations</h6>
                        <a href="#" class="list-group-item list-group-item-action border-0">
                            <div class="d-flex align-items-start">
                                <img src="static/chat-imges/avatar5.png" class="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40" />
                                <div class="flex-grow-1 ml-2">
                                    <h6 class="pull-left">Vanessa Tucker</h6>
                                    <div class="visibility-wrap">
                                     <div class="badge bg-count pull-left ml-1 mt-1">5</div>
                                      <div class="last-seen pull-right mt-1">4:01PM</div>
                                    </div>

                                    <div class="small">Congratulations, I knew that you’d be great for this role...</div>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action border-0">
                            <div class="d-flex align-items-start">
                                <img src="static/chat-imges/avatar2.png" class="rounded-circle mr-1" alt="William Harris" width="40" height="40" />
                                <div class="flex-grow-1 ml-2">
                                    <h6 class="pull-left mr-1">William Harris</h6>
                                    <div class="visibility-wrap">
                                     <div class="badge bg-count pull-left ml-1 mt-1">2</div>
                                      <div class="last-seen pull-right mt-1">6:01PM</div>
                                    </div>
                                    <div class="small">We are still waiting on more information from the client...</div>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action border-0 active">
                            <div class="d-flex align-items-start">
                                <img src="static/chat-imges/avatar3.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                <div class="flex-grow-1 ml-2">
                                    <h6 class="pull-left mr-1">Sharon Lessman</h6>
                                    <div class="small">Now that it’s a new year we have updated some goals. . .</div>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action border-0">
                            <div class="d-flex align-items-start">
                                <img src="static/chat-imges/avatar4.png" class="rounded-circle mr-1" alt="Christina Mason" width="40" height="40" />
                                <div class="flex-grow-1 ml-2">
                                    <h6 class="pull-left mr-1">Christina Mason</h6>
                                    <div class="small">Thanks for your kind words, I’m very excited to start on. . .</div>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action border-0">
                            <div class="d-flex align-items-start">
                                <img src="static/chat-imges/avatar5.png" class="rounded-circle mr-1" alt="Fiona Green" width="40" height="40" />
                                <div class="flex-grow-1 ml-2">
                                    <h6 class="pull-left mr-1">Fiona Green</h6>
                                    <div class="small">I’m just trying to get a better idea on the overall client. . .</div>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action border-0">
                            <div class="d-flex align-items-start">
                                <img src="static/chat-imges/avatar2.png" class="rounded-circle mr-1" alt="Doris Wilder" width="40" height="40" />
                                <div class="flex-grow-1 ml-2">
                                    <h6 class="pull-left mr-1">Doris Wilder</h6>
                                    <div class="small">I’d like to officially welcome you to our design team. . .</div>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action border-0">
                            <div class="d-flex align-items-start">
                                <img src="static/chat-imges/avatar4.png" class="rounded-circle mr-1" alt="Haley Kennedy" width="40" height="40" />
                                <div class="flex-grow-1 ml-2">
                                    <h6 class="pull-left mr-1">Haley Kennedy</h6>
                                    <div class="small">You should have access to all the documents now but...</div>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action border-0">
                            <div class="d-flex align-items-start">
                                <img src="static/chat-imges/avatar3.png" class="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                <div class="flex-grow-1 ml-2">
                                    <h6 class="pull-left mr-1">Jennifer Chang</h6>
                                    <div class="small"> You should have access to all the documents now but...</div>
                                </div>
                            </div>
                        </a>
                        <hr class="d-block d-lg-none mt-1 mb-0" />
                    </div>
                    <div class="col-12 col-lg-7 col-xl-9 chat-side">
                        <div class="py-2 px-4 border-bottom d-none d-lg-block">
                            <div class="d-flex align-items-center py-1">
                                <div class="position-relative">
                                </div>
                                <div class="flex-grow-1 pl-3">
                                    <div class="btn btn-primary btn-lg button-color"> <a class="popup-with-form" href="#">View Project</a> </div>
                                </div>
                                <div class="wrap-change">
                                    <button class="btn btn-primary btn-lg mr-1 px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone feather-lg">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                    </button>
                                    <button class="btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video feather-lg">
                                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                                        </svg>
                                    </button>
                                    <button class="btn btn-light border btn-lg px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal feather-lg">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="position-relative">
                            <div class="chat-messages p-4">
                                <div class="chat-message-right pb-4">
                                    <div class="py-2 px-3 mr-3 text-right w-100">

                                        <div class="text-muted small text-nowrap mt-2">2:33 am</div>
                                    </div>
                                    <div class="flex-shrink-1 bg-you rounded py-2 px-3 mr-3">

                                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                    </div>
                                </div>
                                <div class="chat-message-left pb-4">
                                    <div>
                                        <img src="static/chat-imges/avatar3.png" class="rounded-circle mr-3 pull-left" alt="Sharon Lessman" width="40" height="40" />
                                        <div class="font-weight-bold mb-1 pull-left mt-2">Sharon Lessman</div>
                                        <div class="text-muted small text-nowrap mt-3 pull-right">2:34 am</div>
                                    </div>
                                    <div class="flex-shrink-1 bg-other rounded py-2 px-3 ml-0 mt-3 text-white">
                                        Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                        Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                        Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.

                                    </div>
                                </div>
                                <div class="chat-message-right pb-4">
                                    <div class="py-2 px-3 mr-3 text-right w-100">

                                        <div class="text-muted small text-nowrap mt-2">2:33 am</div>
                                    </div>
                                    <div class="flex-shrink-1 bg-you rounded py-2 px-3 mr-3">
                                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                    </div>
                                </div>
                                <div class="chat-message-left pb-4">
                                    <div>
                                        <img src="static/chat-imges/avatar3.png" class="rounded-circle mr-3 pull-left" alt="Sharon Lessman" width="40" height="40" />
                                        <div class="font-weight-bold mb-1 pull-left mt-2">Sharon Lessman</div>
                                        <div class="text-muted small text-nowrap mt-3 pull-right">2:34 am</div>
                                    </div>
                                    <div class="flex-shrink-1 bg-other rounded py-2 px-3 ml-0 mt-3 text-white">
                                        Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                        Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                        Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.

                                    </div>
                                </div>
                                <div class="chat-message-right pb-4">
                                    <div class="py-2 px-3 mr-3 text-right w-100">
                                        <div class="text-muted small text-nowrap mt-2">2:33 am</div>
                                    </div>
                                    <div class="flex-shrink-1 bg-you rounded py-2 px-3 mr-3">

                                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="flex-grow-0 py-3 px-4 border-top">
                            <div class="input-group"> <input type="text" class="form-control" placeholder="Type your message" /> <button class="btn btn-primary">Send</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </main>
    </div>
</div>

        )
}
