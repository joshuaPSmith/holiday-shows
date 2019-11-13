import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { theOfficeList } from './api/the-office';
import ShowList from './ShowList';
import { holidays } from './api/holidays';
import HolidaySwitches from './HolidaySwitches';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const initialEpisodeState = theOfficeList;

export default function App() {
  const [state, setState] = React.useState({
    switchState: {
      christmas: true,
      halloween: true,
      thanksgiving: true,
      valentinesDay: true,
      stPatricksDay: true,
    },
    episodes: initialEpisodeState
  });

  const handleSwitchChange = (checkedValue, name) => {
    // Filter the episode list based on the change
    const newSwitchState = { ...state.switchState, [name]: checkedValue }
    setState({
      ...state,
      switchState: newSwitchState,
      episodes: initialEpisodeState.filter(episode => {
        return episode.holidays.some(holiday => newSwitchState[holiday])
      })
    });
  };

  return (
    <Container maxWidth="md">
      <Box my={1}>
        <Typography variant="h4" component="h1" gutterBottom>
          Holiday Episode Lists
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          The Office
        </Typography>
        <HolidaySwitches switchChange={handleSwitchChange} switchState={state.switchState} holidays={holidays} />
        <ShowList episodes={state.episodes} />
        <Copyright />
      </Box>
    </Container>
  );
}
