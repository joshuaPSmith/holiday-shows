import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Chip } from '@material-ui/core';
import { holidays } from './api/holidays';
import './css/main.css';

const cardStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    position: 'relative'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  chips: {
    color: 'white',
    fontFamily: "Montserrat', sans-serif"
  },
  imageOverlay: {
    position: 'absolute',
    top: '8px',
    color: '#7D7975',
    backgroundColor: '#F6F6F6',
    borderTopRightRadius: '15px',
    borderBottomRightRadius: '15px',
    paddingRight: '10px'
  }
}));

export default function ShowCard(props) {
  const classes = cardStyles();
  const color = props.show.color;
  return (
    <Card className={classes.card}>

      {<CardMedia
        className={classes.media}
        image={require(`${props.show.thumbnail}`)}
        title={props.show.title}
      />}
      <div id="imageOverlay" className={classes.imageOverlay}>
        {props.show.show}
      </div>
      <CardHeader
        className={classes.header}
        titleTypographyProps={{ variant: 'h6' }}
        title={props.show.title}
        subheader={'Season ' + props.show.season + ', Episode ' + props.show.episode}
      />
      <CardContent>
        {props.show.holidays.map((holiday, index) => {
          return <Chip className={classes.chips} style={{ background: color }} label={holidays[holiday]} key={index} />
        })}
      </CardContent>
    </Card>
  );
}