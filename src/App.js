import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { theOfficeList } from './api/the-office';
import ShowList from './ShowList';
import { holidays } from './api/holidays';
import HolidaySwitches from './HolidaySwitches';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';


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

const filterEpisodeList = (episodes, switchState) => {
  return episodes.filter(episode => {
    return episode.holidays.some(holiday => switchState[holiday])
  })
}

const initialSwitchState = {
  christmas: true,
  halloween: false,
  thanksgiving: false,
  valentinesDay: false,
  stPatricksDay: false,
};

const initialEpisodeState = theOfficeList;

export default function App() {
  const [state, setState] = React.useState({
    switchState: initialSwitchState,
    toggleAllOn: false,
    episodes: filterEpisodeList(initialEpisodeState, initialSwitchState)
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

  const handleToggleAllChange = (event) => {
    // either turn them all on or all off.
    console.log('Event', event);
  }

  return (
    <Container maxWidth="md">
      <Box my={1}>
        <Typography variant="h4" component="h1" gutterBottom>
          Holiday Episode Lists
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          The Office
        </Typography>
        {/* <HolidaySwitches
          switchChange={handleSwitchChange}
          toggleAllChange={handleToggleAllChange}
          toggleAllOn={state.toggleAllOn}
          switchState={state.switchState}
          holidays={holidays} /> */}
        <MultiSelectComponent id="mtselement" dataSource={Object.keys(holidays).map(key => holidays[key])} popupHeight="250px" popupWidth="250px" placeholder="Pick a show" />
        <ShowList episodes={state.episodes} />
        <Copyright />
      </Box>
    </Container>
  );
}
