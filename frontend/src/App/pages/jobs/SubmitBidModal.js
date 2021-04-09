import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import JobDetailPage from '../../../../src/JobDetailPage.png';


export default function ResponsiveDialog() {
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
      Submit a Proposal
      </Button>
      
     
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Submit Bid"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="modal-main">
            <div className="modal-img d-flex justify-content-center mt-4 mb-1">
            <div className='avatar-job-detail' style={{backgroundImage: `url(${JobDetailPage})`}}></div> 
            </div>
            <h2 className="d-flex justify-content-center pt-3 pb-4">Are you sure you want to retract your bid?</h2>
            
              <div className="bid-buttons d-flex justify-content-center pb-4">
                <button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary" tabindex="0" type="button"><span class="MuiButton-label">Cancel</span><span class="MuiTouchRipple-root"></span></button>
                <button onClick={handleClose} class="btn btn--yellow btn--medium" autoFocus> Submit</button>
                
              </div>
              
      
            </div>
            
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
