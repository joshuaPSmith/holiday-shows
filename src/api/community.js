import { showList } from "./show-list";

export const communityList = [
  {
    title: 'Introduction to Statistics',
    season: '1',
    episode: '7',
    thumbnail: './assets/img/shows/community/intro-to-stats.jpg',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: 'Comparative Religion',
    season: '1',
    episode: '12',
    thumbnail: './assets/img/shows/community/comparative-religion.jpg',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: 'Communication Studies',
    season: '1',
    episode: '16',
    thumbnail: './assets/img/shows/community/communication-studies.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  },
  {
    title: 'Epidemiology',
    season: '2',
    episode: '6',
    thumbnail: './assets/img/shows/community/epidemiology.png',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: 'Abed\'s Uncontrollable Christmas',
    season: '2',
    episode: '11',
    thumbnail: './assets/img/shows/community/abeds-uncontrollable-christmas.png',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: 'Early 21st Century Romanticism',
    season: '2',
    episode: '15',
    thumbnail: './assets/img/shows/community/early-century-romanticism.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  },
  {
    title: 'Horror Fiction in Seven Spooky Steps',
    season: '3',
    episode: '5',
    thumbnail: './assets/img/shows/community/horror-fiction.jpg',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: 'Regional Holiday Music',
    season: '3',
    episode: '10',
    thumbnail: './assets/img/shows/community/regional-holiday-music.jpg',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: 'Paranormal Parentage',
    season: '4',
    episode: '2',
    thumbnail: './assets/img/shows/community/paranormal-parentage.jpg',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: 'Cooperative Escapism in Familial Relations',
    season: '4',
    episode: '5',
    thumbnail: './assets/img/shows/community/cooperative-escapism.jpg',
    rating: 4,
    holidays: ['thanksgiving']
  },
  {
    title: 'Intro to Knots',
    season: '4',
    episode: '10',
    thumbnail: './assets/img/shows/community/intro-to-knots.jpg',
    rating: 4,
    holidays: ['christmas']
  }  
].map(episode => {
  return { ...episode, show: showList['community'] }
});
// https://www.tvovermind.com/community-holiday-episode-best/
// https://www.ranker.com/list/best-community-holiday-themed-episodes/ranker-tv