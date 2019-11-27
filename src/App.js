import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { theOfficeList } from './api/the-office';
import ShowList from './ShowList';
import { holidays } from './api/holidays';
import HolidaySwitches from './HolidaySwitches';
import { Multiselect } from 'multiselect-react-dropdown';
import { showList } from './api/show-list';
import { friendsList } from './api/friends';
import { parksAndRecList } from './api/parks-and-rec';
import { psychList } from './api/psych';
import ReactGA from 'react-ga';



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
  ReactGA.initialize('UA-153509644-1');

  const [state, setState] = React.useState({
    switchState: initialSwitchState,
    episodes: filterEpisodeList(initialEpisodeState, initialSwitchState),
    fullEpisodeList: initialEpisodeState,
    showState: initialShowState
  });

  const handleSwitchChange = (checkedValue, name) => {
    // Filter the episode list based on the change
    const newSwitchState = { ...state.switchState, [name]: checkedValue }
    setState({
      ...state,
      switchState: newSwitchState,
      episodes: state.fullEpisodeList.filter(episode => {
        return episode.holidays.some(holiday => newSwitchState[holiday])
      })
    });
  };

  const onSelectChange = (optionsList, selectedItem) => {
    const newShowState = { ...state.showState, [selectedItem.id]: true }
    setShowState(newShowState);
  };
  const onShowRemoved = (optionsList, selectedItem) => {
    const newShowState = { ...state.showState, [selectedItem.id]: false }
    setShowState(newShowState);
  };

  const setShowState = (newShowState) => {
    const newShowList = getEpisodesFromShowState(newShowState);
    setState({
      ...state,
      showState: newShowState,
      episodes: filterEpisodeList(newShowList, state.switchState),
      fullEpisodeList: newShowList
    });
  }

  const dataSource = Object.keys(showList).map(key => { return { id: key, name: showList[key] } })

  const customStyle = {
    chips: {
      background: "#19857b"
    },
    searchBox: {
      border: "none",
      "borderBottom": "1px solid blue",
      "borderRadius": "0px"
    }
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
        <Multiselect
          options={dataSource}
          selectedValues={[dataSource[0]]}
          onSelect={onSelectChange}
          onRemove={onShowRemoved}
          placeholder="Pick a show"
          displayValue="name"
          style={customStyle}
        />
        <ShowList episodes={state.episodes} />
        <Copyright />
      </Box>
    </Container>
  );
}
