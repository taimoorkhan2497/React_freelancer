import React, { Component } from "react";
import "./tabbar2.css";
import { RegNavbar } from "../../../../src/components/Navbar";
import PersonalProfile, { PersonalProfileTabFooter } from "./PersonalProfile";
import IdVerification, { IdVerificationFooter } from "./IdVerification";
import PaymentInformation, {
  PaymentInformationFooter,
} from "./PaymentInformation";
import HourlyRate, { HourlyRateFooter } from "./HourlyRate";
import ProfessionalProfile2 from "./ProfessionalProfile2";
import ProfessionalProfile2Footer from "./ProfFooter";

export default class tabbar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabindex: 1,
    };
  }
 handler = () => {
    this.setState({
       tabindex: this.state.tabindex + 1,
    });
  };

  handler2 = () => {
    this.setState({
       tabindex: this.state.tabindex - 1,
    });
  };
  render() {
    return (
      <div className="tabbar  tabbarMain_bg">
        <div className="container-fluid">
          <div className="row">
            <div className="tabbar_min_height col-xs-6 col-sm-4 col-md-3  p-0 tabbar_sidebar_bg">
              <div>
                <RegNavbar />
              </div>

              <div className="tabbar_tabarlist pt-4 pb-5 Changepadding ml-3 ">
                  <div className="container">
                <div class="Tab">
                  <span
                    class=" "
                    onClick={() => this.setState({ tabindex: 1 })}
                  >
                    <button className={"Buttoncls " + (this.state.tabindex=== 1 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 1 })}>
                        1
                  </button>
                   
                  </span>{" "}
                  <span class="text2">Personal Profile</span>
                </div>{" "}
                <div className= {"line " + (this.state.tabindex=== 1 ? 'lineActive' : 'hidden')}> </div>


                <div class="Tab">
                  <span
                    class=" "
                    onClick={() => this.setState({ tabindex: 2 })}
                  >
                    <button className={"Buttoncls " + (this.state.tabindex=== 2 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 2 })}>
                        2
                  </button>
                   
                  </span>{" "}
                  <span class="text2">Professional Profile</span>
                </div>{" "}
                <div className= {"line " + (this.state.tabindex=== 2 ? 'lineActive' : 'hidden')}> </div>


                  <div class="Tab">
                  <span
                    class=" "
                    onClick={() => this.setState({ tabindex: 3 })}
                  >
                    <button className={"Buttoncls " + (this.state.tabindex=== 3 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 3 })}>
                        3
                  </button>
                   
                  </span>{" "}
                  <span class="text2">ID Verification</span>
                </div>{" "}
                <div className= {"line " + (this.state.tabindex=== 3 ? 'lineActive' : 'hidden')}> </div>

                  <div class="Tab">
                  <span
                    class=" "
                    onClick={() => this.setState({ tabindex: 4 })}
                  >
                    <button className={"Buttoncls " + (this.state.tabindex=== 4 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 4 })}>
                        4
                  </button>
                   
                  </span>{" "}
                  <span class="text2">Payment Information</span>
                </div>{" "}
                <div className= {"line " + (this.state.tabindex=== 4 ? 'lineActive' : 'hidden')}> </div>


                  <div class="Tab">
                  <span
                    class=" "
                    onClick={() => this.setState({ tabindex: 5 })}
                  >
                    <button className={"Buttoncls " + (this.state.tabindex=== 5 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 5 })}>
                        5
                  </button>
                   
                  </span>{" "}
                  <span class="text2">Hourly Rate</span>
                </div>
                </div>
            </div>
     

              {this.state.tabindex === 1 && <PersonalProfileTabFooter />}
              {this.state.tabindex === 2 && <ProfessionalProfile2Footer />}
              {this.state.tabindex === 3 && <IdVerificationFooter />}
              {this.state.tabindex === 4 && <PaymentInformationFooter />}
              {this.state.tabindex === 5 && <HourlyRateFooter />}
            </div>


            <div className="tabbar_min_height col-xs-6 col-sm-8 col-md-9  p-5 tabbar_panel_background">
              {this.state.tabindex === 1 && <PersonalProfile />}
              {this.state.tabindex === 2 && <ProfessionalProfile2 />}
              {this.state.tabindex === 3 && <IdVerification />}
              {this.state.tabindex === 4 && <PaymentInformation />}
              {this.state.tabindex === 5 && <HourlyRate />}

              <div className="container tabbar_next_pre_btn_background pt-4 pb-5">
        {this.state.tabindex > 1 && (
          <>
            <button
              type="button"
              className="btn rounded-pill "
            onClick={() => this.setState({ tabindex:this.state.tabindex - 1 })}
            >
              {" "}
              Previous Step
            </button>
          </>
        )}

        {this.state.tabindex < 5 && (
          <>
            <button
              type="button"
              className="btn tb_nextButton"
              onClick={() => this.setState({ tabindex:this.state.tabindex + 1 })}
            >
              {" "}
              Next
            </button>
          </>
        )}
      </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
