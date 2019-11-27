import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Chip } from '@material-ui/core';
import { holidays } from './api/holidays';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));




export default function ShowCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.show.title}
        subheader={'Season ' + props.show.season + ', Episode ' + props.show.episode}
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography> */}
        {props.show.holidays.map((holiday, index) => {
          return <Chip label={holidays[holiday]} key={index} />
        })}
      </CardContent>
    </Card>
  );
}