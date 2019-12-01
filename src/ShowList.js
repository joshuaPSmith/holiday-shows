import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShowCard from './ShowCard';
import Grid from '@material-ui/core/Grid';
// import ShowDetails from './ShowDetails';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function ShowList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {props.episodes.map((value, index) => {
          return <Grid item xs={12} sm={6} md={4} key={index}><ShowCard show={value} /></Grid>
        })}
      </Grid>
    </div>
  );
  // TODO: Consider just letting the parent handle this
  // if(props.layout==='grid') {

  //   return (
  //     <div className={classes.root}>
  //       <Grid container spacing={2}>
  //         {props.episodes.map((value, index) => {
  //           return <Grid item xs={12} sm={6} md={4} key={index}><ShowCard show={value} /></Grid>
  //         })}
  //       </Grid>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className={classes.root}>
  //       <Grid container spacing={2}>
  //         <Grid item xs={12}><ShowDetails episodes={props.episodes} /></Grid>
  //       </Grid>
  //     </div>
  //   );
  // }

}