import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Proposal from '../jobs/Proposal'
import GetImage from '../registration/GetImage'


export default function EditProposal() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div className="submit-bid p-3">
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Proposal
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          {/* <DialogTitle id="responsive-dialog-title">{"Submit Bid"}</DialogTitle> */}
          <DialogContent>
            <DialogContentText>
              <div className="modal-main">
              <div className="proposal-details pb-4">
                  <div className="proposal-heading">
                      <h1 className="">Proposal Details</h1> 
                      <ul className="p-3">
                          <li className="pb-2">
                              <h3>Proposal Amount</h3>
                              <div class="input-group mb-3">
                                  
                                  <input type="text" class="form-control" placeholder="0"></input>
                                  
                                  <div class="input-group-append">
                                      <span class="input-group-text">SAR</span>
                                  </div>
                              </div>
                          </li>
                          <li className="pb-2">
                              <h3>15% service free</h3>
                              <div class="input-group mb-3">
                                  
                                  <input type="text" class="form-control" placeholder="0"></input>
                                  
                                  <div class="input-group-append">
                                      <span class="input-group-text">SAR</span>
                                  </div>
                              </div>
                          </li>
                          <li className="pb-2">
                              <h3>Total amount you’ll recieve</h3>
                              <div class="input-group mb-3">
                                  
                                  <input type="text" class="form-control" placeholder="0"></input>
                                  
                                  <div class="input-group-append">
                                      <span class="input-group-text">SAR</span>
                                  </div>
                              </div>
                          </li>
                          <li className="pb-2">
                              <h3>Your Proposal</h3>
                              <textarea row="3" placeholder="Text"></textarea>
                          </li>
                          <li className="image-upload">
                              <h3>Attachment</h3>
                              <div className="upload-img">
                                  <GetImage value={2}/>
                              </div>
                              
                          </li>
                      </ul>
                      <div className="bid-buttons d-flex justify-content-center pb-4">
              <button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary" tabindex="0" type="button"><span class="MuiButton-label">Cancel</span><span class="MuiTouchRipple-root"></span></button>
                <button onClick={handleClose} class="btn btn--yellow btn--medium" autoFocus> Submit</button>
              </div>
                      
                  </div>
                  
              </div>
        
              </div>
              
            </DialogContentText>
          </DialogContent>
          
        </Dialog>
      </div>
      )
  }
