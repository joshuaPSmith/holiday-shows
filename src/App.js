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
import { showList } from './api/show-list';
import { friendsList } from './api/friends';
import { parksAndRecList } from './api/parks-and-rec';
import { psychList } from './api/psych';


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

const showLists = {
  theOffice: theOfficeList,
  friends: friendsList,
  parksAndRec: parksAndRecList,
  // howIMetYourMother: 'How I Met Your Mother',
  // community: 'Community',
  psych: psychList
};

const initialSwitchState = {
  christmas: true,
  halloween: false,
  thanksgiving: false,
  valentinesDay: false,
  stPatricksDay: false,
};

const initialShowState = Object.keys(showList).reduce((acc, curr) => {
  acc[curr] = curr === 'theOffice' ? true : false; // default to the office for now
  return acc;
}, {});

const getEpisodesFromShowState = (showState) => {
  let episodeList = [];
  for (const show in showState) {
    if (showState[show]) {
      episodeList = episodeList.concat(showLists[show]);
    }
  }

  return episodeList;
}
const initialEpisodeState = theOfficeList;

export default function App() {
  const [state, setState] = React.useState({
    switchState: initialSwitchState,
    episodes: filterEpisodeList(initialEpisodeState, initialSwitchState),
    showState: initialShowState
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

  const onSelectChange = (event) => {
    const newShowState = { ...state.showState, [event.itemData.value]: true }
    setState({
      ...state,
      showState: newShowState,
      episodes: filterEpisodeList(getEpisodesFromShowState(newShowState), state.switchState)
    });
  };
  const onShowRemoved = (event) => {
    const newShowState = { ...state.showState, [event.itemData.value]: false }
    setState({
      ...state,
      showState: newShowState,
      episodes: filterEpisodeList(getEpisodesFromShowState(newShowState), state.switchState)
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
        <HolidaySwitches
          switchChange={handleSwitchChange}
          switchState={state.switchState}
          holidays={holidays} />
        <MultiSelectComponent
          id="mtselement"
          mode="Box"
          dataSource={Object.keys(showList).map(key => { return { value: key, text: showList[key] } })}
          fields={{ text: 'text', value: 'value' }}
          value={['psych']}
          placeholder="Pick a show"
          select={onSelectChange}
          removed={onShowRemoved} />
        <ShowList episodes={state.episodes} />
        <Copyright />
      </Box>
    </Container>
  );
}
