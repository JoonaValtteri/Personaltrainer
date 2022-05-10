import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { format } from 'date-fns'

function Addtraining({ addTraining, params }) {
  const [open, setOpen] = React.useState(false);
  const [training, setTraining] = React.useState({
    date: '', 
    duration: '',
    activity: '',
    customer: ''
  })

  const handleClickOpen = () => {
    setOpen(true);
    setTraining({
      customer: params.data.links[0].href
    });
  };

  const handleClose = () => {
    setTraining({
      date: '', 
      duration: '',
      activity: ''
    })
    setOpen(false);
  };

  const handleSave = () => {
    addTraining(training);
    setTraining({
      date: '',
      duration: '',
      activity: ''
    })
    setOpen(false);
  }


  const inputChanged = (event) => {
    setTraining({ ...training, [event.target.name]: event.target.value });    
  }

  return (
    <div>
      <IconButton color="success" onClick={handleClickOpen}>
        <AddCircleRoundedIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New training</DialogTitle>
        <DialogContent>
          <TextField
            name="date"
            value={training.date}
            onChange={inputChanged}
            margin="dense"
            label="Date"
            fullWidth
            variant="standard" 
          />
          <TextField
            name="duration"
            value={training.duration}
            onChange={inputChanged}
            margin="dense"
            label="Duration"
            fullWidth
            variant="standard"
          />
          <TextField
            name="activity"
            onChange={inputChanged}
            value={training.activity}
            margin="dense"
            label="Activity"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Addtraining;