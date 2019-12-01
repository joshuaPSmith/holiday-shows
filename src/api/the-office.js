import { showList } from "./show-list";

export const theOfficeList = [
  {
    title: 'Halloween',
    season: '2',
    episode: '5',
    thumbnail: './assets/img/shows/the-office/halloween.jpg',
    rating: 4,
    holidays: ['halloween'],
    color: '#EE8C2D',
  },
  {
    title: 'Christmas Party',
    season: '2',
    episode: '10',
    thumbnail: './assets/img/shows/the-office/christmas-party.jpg',
    rating: 4,
    holidays: ['christmas'],
    color: '#0F865C'
  },
  {
    title: "Valentine's Day",
    season: '2',
    episode: '16',
    thumbnail: './assets/img/shows/the-office/valentines-day.jpg',
    rating: 4,
    holidays: ['valentinesDay'],
    color: '#C943CA'
  },
  {
    title: "A Benihana Christmas",
    season: '3',
    episode: '10/11',
    thumbnail: './assets/img/shows/the-office/benihana-christmas.jpg',
    rating: 4,
    holidays: ['christmas'],
    color: '#0F865C'
  },
  {
    title: "Moroccan Christmas",
    season: '5',
    episode: '11',
    thumbnail: './assets/img/shows/the-office/moroccan-christmas.jpg',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: "Blood Drive",
    season: '5',
    episode: '18',
    thumbnail: './assets/img/shows/the-office/blood-drive.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  },
  {
    title: "Secret Santa",
    season: '6',
    episode: '13',
    thumbnail: './assets/img/shows/the-office/secret-santa.jpg',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: "St. Patrick's Day",
    season: '6',
    episode: '19',
    thumbnail: './assets/img/shows/the-office/st-patricks-day.jpg',
    rating: 4,
    holidays: ['stPatricksDay']
  },
  {
    title: "Costume Contest",
    season: '7',
    episode: '6',
    thumbnail: './assets/img/shows/the-office/costume-contest.jpg',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: "Classy Christmas",
    season: '7',
    episode: '11/12',
    thumbnail: './assets/img/shows/the-office/classy-christmas.jpg',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: "PDA",
    season: '7',
    episode: '16',
    thumbnail: './assets/img/shows/the-office/pda.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  },
  {
    title: "Christmas Wishes",
    season: '8',
    episode: '10',
    thumbnail: './assets/img/shows/the-office/christmas-wishes.jpg',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: "Dwight Christmas",
    season: '9',
    episode: '9',
    thumbnail: './assets/img/shows/the-office/dwight-christmas.jpg',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: "Couples Discount",
    season: '9',
    episode: '15',
    thumbnail: './assets/img/shows/the-office/couples-discount.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  }
].map(episode => {
  return { ...episode, show: showList['theOffice'] }
});