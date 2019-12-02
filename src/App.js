import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { theOfficeList } from './api/the-office';
import ShowList from './ShowList';
import { holidays } from './api/holidays';
import HolidaySwitches from './HolidaySwitches';
import { Multiselect } from 'multiselect-react-dropdown';
import { showList } from './api/show-list';
import logo from './assets/img/logo-wide.png';
import './css/main.css';
import Grid from '@material-ui/core/Grid';
import { friendsList } from './api/friends';
import { parksAndRecList } from './api/parks-and-rec';
import { psychList } from './api/psych';
import { communityList } from './api/community';
import ReactGA from 'react-ga';
import AppsIcon from '@material-ui/icons/Apps';
// import ViewListIcon from '@material-ui/icons/ViewList';
// import IconButton from '@material-ui/core/IconButton';
import noResultsFoundImg from './assets/img/NoResultsLiteStatic.png'

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
  community: communityList,
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
const initialShowLayoutState = 'grid';

export default function App() {

  ReactGA.initialize('UA-153509644-1');

  const [state, setState] = React.useState({
    switchState: initialSwitchState,
    episodes: filterEpisodeList(initialEpisodeState, initialSwitchState),
    fullEpisodeList: initialEpisodeState,
    showState: initialShowState,
    showLayoutState: initialShowLayoutState
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

  const handleLayoutChange = (layout) => {
    console.log('handle layout change');
    const layoutState = layout;
    setState({
      ...state,
      showLayoutState: layoutState
    });
  }

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

  const listResults = (episodes, showLayoutState) => {
    if (episodes.length > 0) {
      return (
        <ShowList
          className="showListClass"
          episodes={episodes}
          layout={showLayoutState} />
      )
    } else {
      return (
        <div class="noResultsFound">
          <img src={noResultsFoundImg} alt="No Results Found" /> 
          <div class="noResultsTitle">No results found.</div>
          <div class="noResultsSubtitle">Try selecting a holiday or adding a show.</div>
        </div>
      );
    }
  }

  const dataSource = Object.keys(showList).map(key => { return { id: key, name: showList[key] } })

  const customStyle = {
    chips: {
      background: "#F6F6F6",
      "borderRadius": "10px",
      "fontSize": "14px",
      color: "black"
    },
    searchBox: {
      border: "none",
      "borderRadius": "10px",
      "backgroundColor": "#F6F6F6",
      padding: "14px"
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className="logoDiv">
            <img className="logo" src={logo} alt="Holiday Show Finder" />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="multiselect">
            <Multiselect
              options={dataSource}
              selectedValues={[dataSource[0]]}
              onSelect={onSelectChange}
              onRemove={onShowRemoved}
              placeholder="Add Show"
              displayValue="name"
              style={customStyle}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <hr className="headerSeparator"></hr>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" className="titleClass">FILTER</Typography>
          <div className="holidaySwitches">
            <HolidaySwitches
              switchChange={handleSwitchChange}
              switchState={state.switchState}
              holidays={holidays} />
          </div>
          {/* <Typography variant="h6" className="titleClass">SORT</Typography> */}
        </Grid>
        <Grid item xs={12} md={9}>
          {/* <div className="iconDiv">
            <AppsIcon onClick={() => handleLayoutChange('grid')} />
            <ViewListIcon onClick={() => handleLayoutChange('list')} />
          </div> */}
          {/* <ShowList
            className="showListClass"
            episodes={state.episodes}
            layout={state.showLayoutState} /> */}
          {listResults(state.episodes, state.showLayoutState)}
        </Grid>
      </Grid>
      <Copyright />
    </Container>
  );
}
