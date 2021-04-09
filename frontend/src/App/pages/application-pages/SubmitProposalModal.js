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




function SubmitProposalModal() {
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
      Withdraw Proposal
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
                    <h1 className="">Withdraw Proposal</h1>
                    <p>
                    We will politely notify the client that you are not interested. 
                    The client will be able to view the reason you've withdrawn your proposal.
                    </p> 
                    <ul className="p-3">
                   
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

export default SubmitProposalModal
