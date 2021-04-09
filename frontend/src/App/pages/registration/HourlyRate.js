import React from "react";
import "./HourlyRate.css";
import "../../../../src/common.css";
import img from "../../../img/HourlyRate.png";
import img2 from "../../../img/HourlyRate_F.png";
import { nameAction } from "../../../redux/actions/myaction";
import { connect } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

class HourlyRate extends React.Component{
  constructor(props) {
    super(props);
    this.alert = {
      open: false,
      severity: "",
      message: "",
      title: "",
    };
    this.proposalAmountValidate = {
      proposal_amount: false,
    };

    this.proposalAmountError = {
      proposal_amount: "proposal Amount is required",
    };

    this.state = {
      alert: this.alert,
      total_amount: 0,
      proposal_amount: "",
      value2: 85,
      remainder: "",
      proposalAmountValidate: this.proposalAmountValidate,
      proposalAmountError: this.proposalAmountError,
    };
  }

  handleClose() {
    this.setState({ alert: { open: false, severity: "", message: "" } });
  }

  proposalHandler = (e) => {
     let isSubmit = null
    let {
      proposal_amount,
      proposalAmountValidate,
      proposalAmountError,
    } = this.state;
    let newValue = e.target.value;
    const { name } = e.target;

    var percent = (newValue / 100) * 85;
    var remainder = newValue - percent;
    this.setState((state) => ({
      [name]: newValue,
    }));
    this.props.onStateChange(newValue)
    newValue !== "" ? (
      <div>
        {(proposalAmountError["proposal_amount"] = true)},
        {(proposalAmountError["proposal_amount"] = "")}
      </div>
    ) : (
      (proposalAmountError["proposal_amount"] = "proposal Amount is required")
    );
  
    this.setState({ total_amount: percent, remainder: remainder ,})
  };
  render() {
    let {
      proposalValid,
      proposalAmountError,
      alert: { open, severity, message, title },
    } = this.state;
    return (
      <div className="HourlyRate">
    
        {/*left section END*/}
        <Snackbar
          open={open}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={() => {
            this.handleClose();
          }}
        >
          <Alert
            onClose={() => {
              this.handleClose();
            }}
            severity={severity}
          >
            <AlertTitle>{title}</AlertTitle>
            <strong>{message}</strong>
          </Alert>
        </Snackbar>
        {/*Right section*/}
        <div className="hr_rightbox   bg2 b_line2 p-5">
          {/*Rc 1_inn*/}
          <div class="container">
            <div class="row pl-3">
              <div class="col-sm-12">
                <div
                  className="hr_icon"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <div>
                  <h4 className="hr_Head">Houtly Rate</h4>
                  <p className="hr_Para">
                    Creating your account in just a few steps away, Please Fill
                    your bank or card details here
                  </p>
                </div>
              </div>
            </div>

            {/*Rc 1_inn*/}
            <div className="firstTextField">
              <div className="Rb-1 col-md-8">
                <div
                  className={
                    proposalAmountError.proposal_amount !== ""
                      ? this.props.showError && "error"
                      : ""
                  }
                >
                  <label className="hr_Para3" for="usr">
                    Proposal Amount
                  </label>

                  <div className="form-group input-group mb-3 ">
                    <input
                      placeholder="Enter Value"
                      type="number"
                      min="0"
                      class="form-control form-controlBorderNone"
                      aria-label="Amount (to the nearest dollar)"
                      name="proposal_amount"
                      value={this.state.proposal_amount}
                      onChange={this.proposalHandler}
                    />
                    <div class="input-group-append">
                      <span class="input-group-text labelBoderRight hr_Para3">
                        SAR
                      </span>
                    </div>
                  </div>
                  {proposalAmountError.proposal_amount !== ""
                    ? this.props.showError === true && (
                        <div className="error-message">
                          {proposalAmountError.proposal_amount}
                        </div>
                      )
                    : null}
                </div>

                <div>
                  {" "}
                  <p className="hr_Para1 pt-3">15% service free</p>
                </div>
                <div class="row">
                  <div class="col-md-12 pb-3 pl-3 pr-4">
                    <div class=" hr_Para3">
                      <div class="remainder pull-left">
                        {this.state.remainder}
                      </div>
                      <div class="pull-right">SAR</div>
                    </div>
                  </div>
                </div>

                <label className="hr_Para3">Total amount you’ll recieve</label>
                <div class="form-group input-group mb-3">
                  <input
                    placeholder={this.state.total_amount}
                    type="text"
                    class="form-control form-controlBorderNone"
                    aria-label="Amount (to the nearest dollar)"
                    disabled
                  />
                  <div class="input-group-append">
                    <span
                      style={{ backgroundColor: "#e9ecef" }}
                      class="input-group-text labelBoderRight hr_Para3"
                    >
                      SAR
                    </span>
                  </div>
                </div>

                <div>
                  {" "}
                  <p className="hr_Para2 mt-4">
                    Tuwaiq Freelancer service fees can be charge as 15%
                  </p>
                </div>
              </div>
            </div>

            {/*Rc 1_inn*/}
          </div>
        </div>
        {/*Right section end*/}

        {/* <h1>redux state value:{props.name}</h1> 
<button onClick ={()=>{props.changeName()}}> changeName </button>*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.nameReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => {
      dispatch(nameAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HourlyRate);

export function HourlyRateFooter() {
  return (
    <div className="HourlyRate_footer_padding">
      <div
        className="hr_foot"
        style={{ backgroundImage: `url(${img2})` }}
      ></div>
    </div>
  );
}
