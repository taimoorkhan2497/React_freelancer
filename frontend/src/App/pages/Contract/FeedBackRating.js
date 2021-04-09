import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  0.5: 'hello',
  1: 'hello',
  1.5: 'hello',
  2: 'hello',
  2.5: 'hello',
  3: 'hello',
  3.5: 'hello',
  4: 'hello',
  4.5: 'hello',
  5: 'hello',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

export default function HoverRating(props) {
  const [value, setValue] = useState();
  const classes = useStyles();
  const onInputChange = (e) => {
    setValue({value, [e.target.name] : e.target.value})
    
  }
  return (
    <div className={classes.root}>
      <Rating
        size ='large'
        name="rate"
        value={props.value}
        precision={0.5}
        onChange ={(e) => onInputChange(e)}
      />
      {console.log(value)}
    </div>
  );
}