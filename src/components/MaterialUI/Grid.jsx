import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    padding: 20,
    backgroundColor: '#333',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
          {["make","world","hello"].map((iterate, ind) => {
              return(
                <Grid key={ind} item xs={12} sm={4}>
                    <Paper className={classes.paper}>{iterate}</Paper>
                </Grid>
              )
          })}
      </Grid>
    </div>
  );
}
