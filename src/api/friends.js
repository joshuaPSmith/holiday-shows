export const friendsList = [
  {
    title: 'The One Where Underdog Gets Away',
    season: '1',
    episode: '9',
    thumbnail: './assets/img/shows/friends/the-underdog-gets-away.jpg',
    rating: 4,
    holidays: ['thanksgiving']
  },
  {
    title: 'The One With The Monkey',
    season: '1',
    episode: '10',
    thumbnail: './assets/img/shows/friends/with-the-monkey.jpg',
    rating: 4,
    holidays: ['newYears']
  },
  {
    title: 'The One With The Football',
    season: '3',
    episode: '9',
    thumbnail: './assets/img/shows/friends/with-the-football.jpg',
    rating: 4,
    holidays: ['thanksgiving']
  },
  {
    title: 'The One Where Rachel Quits',
    season: '3',
    episode: '10',
    thumbnail: './assets/img/shows/friends/rachel-quits.jpg',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: 'The One With Chandler In A Box',
    season: '4',
    episode: '8',
    thumbnail: './assets/img/shows/friends/chandler-in-a-box.jpg',
    rating: 4,
    holidays: ['thanksgiving']
  },
  {
    title: 'The One With All The Thanksgivings',
    season: '5',
    episode: '8',
    thumbnail: './assets/img/shows/friends/all-the-thanksgivings.png',
    rating: 4,
    holidays: ['thanksgiving']
  },
  {
    title: "The One With Ross' Sandwich",
    season: '5',
    episode: '9',
    thumbnail: './assets/img/shows/friends/ross-sandwich.jpg',
    rating: 4,
    holidays: ['thanksgiving']
  },
  {
    title: 'The One With The Inappropriate Sister',
    season: '5',
    episode: '10',
    thumbnail: './assets/img/shows/friends/inappropriate-sister.png',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: 'The One With All The Resolutions',
    season: '5',
    episode: '11',
    thumbnail: './assets/img/shows/friends/all-the-resolutions.png',
    rating: 4,
    holidays: ['newYears']
  },
  {
    title: 'The One Where Ross Got High',
    season: '6',
    episode: '9',
    thumbnail: './assets/img/shows/friends/ross-got-high.jpg',
    rating: 4,
    holidays: ['thanksgiving']
  },
  {
    title: 'The One With The Routine',
    season: '6',
    episode: '10',
    thumbnail: './assets/img/shows/friends/the-routine.jpg',
    rating: 4,
    holidays: ['newYears']
  },
  {
    title: "The One Where Chandler Doesn't Like Dogs",
    season: '7',
    episode: '8',
    thumbnail: './assets/img/shows/friends/chandler-doesnt-like-dogs.jpg',
    rating: 4,
    holidays: ['thanksgiving']
  },
  {
    title: "The One With All The Candy",
    season: '7',
    episode: '9',
    thumbnail: './assets/img/shows/friends/all-the-candy.jpg',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: "The One With The Holiday Armadillo",
    season: '7',
    episode: '10',
    thumbnail: './assets/img/shows/friends/holiday-armadillo.png',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: "The One With The Rumor",
    season: '8',
    episode: '9',
    thumbnail: './assets/img/shows/friends/the-rumor.jpg',
    rating: 4,
    holidays: ['thanksgiving']
  },
  {
    title: "The One With Rachel's Other Sister",
    season: '9',
    episode: '8',
    thumbnail: './assets/img/shows/friends/rachels-other-sister.png',
    rating: 4,
    holidays: ['thanksgiving']
  },
  {
    title: "The One With Christmas In Tulsa",
    season: '9',
    episode: '10',
    thumbnail: './assets/img/shows/friends/christmas-in-tulsa.jpg',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: "The One With The Late Thanksgiving",
    season: '10',
    episode: '8',
    thumbnail: './assets/img/shows/friends/late-thanksgiving.png',
    rating: 4,
    holidays: ['thanksgiving']
  },
].map(episode => {
  return { ...episode, show: 'friends' }
});