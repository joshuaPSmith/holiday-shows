export const parksAndRecList = [
  {
    title: 'Greg Pikitis',
    season: '2',
    episode: '7',
    thumbnail: './assets/img/shows/parks-and-rec/greg-pikitis.png',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: 'Christmas Scandal',
    season: '2',
    episode: '12',
    thumbnail: './assets/img/shows/parks-and-rec/christmas-scandal.jpg',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: "Galentine's Day",
    season: '2',
    episode: '16',
    thumbnail: './assets/img/shows/parks-and-rec/galentines-day.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  },
  {
    title: 'Halloween Surprise',
    season: '5',
    episode: '5',
    thumbnail: './assets/img/shows/parks-and-rec/halloween-surprise.png',
    rating: 4,
    holidays: ['halloween']
  }
].map(episode => {
  return { ...episode, show: 'parksAndRec' }
});