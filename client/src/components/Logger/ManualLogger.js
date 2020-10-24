import React from "react";
import { Typography, Button, DialogTitle, DialogActions, DialogContent, Slider } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  heading2: {
    marginBottom: "20px",
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const marks = [
  {
    value: 1,
    label: '1',
  }, 
  {
    value: 2,
    label: '2',
  }, 
  {
    value: 3,
    label: '3',
  }, 
  {
    value: 4,
    label: '4',
  }, 
  {
    value: 5,
    label: '5',
  }, 
]


const ManualLogger = (props) => {
  const classes = useStyles();

  const handleClose = () => {
    props.close();
  }

  const handleSave = () => {
    // save to database
    props.close();
    
  }

  return (
    <>
      <DialogTitle>
        <Typography variant='h6'>Log your mood manually</Typography>
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          How are you feeling right now on a scale of 1 to 5?
        </Typography>
        <Typography gutterBottom>
          (1 = worst, 5 = best)
        </Typography>
        <Slider
          defaultValue={3}
          valueLabelDisplay="auto"
          step={1}
          marks={marks}
          min={1}
          max={5}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleSave} color="primary">
          Save changes
        </Button>
      </DialogActions>
    </>
  );
};

export default ManualLogger;
