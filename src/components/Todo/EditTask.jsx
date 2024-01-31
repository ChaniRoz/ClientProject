import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import RecipeReviewCard from './DrowSingleTask'

export default function EditTaskDialog(props) {
  const [open, setOpen] = React.useState(false);
  // //
  // const Tasks = useSelector((state) => state.TaskSlice.Task);
  // const [id, setId] = React.useState("");
  // const [name, setName] = React.useState("");
  // const [createDate, setCreateDate] = React.useState("");
  // const [checkbox, setCheckbox] = React.useState(false);
  // //

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    <RecipeReviewCard/>
    // debugger
    // alert(Tasks.name)

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
      <IconButton variant="outlined" aria-label="add task">
        <EditIcon />
      </IconButton>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="edit task"
            type="text"
            fullWidth
            variant="standard"
            // // 
            // onChange={(e) => {    
            //   setName(e.target.value)
            //   var today = new Date(),
            //     date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
            //   setCreateDate(date)
            // }}
            // // 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}