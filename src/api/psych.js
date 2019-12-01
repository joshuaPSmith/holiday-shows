import { showList } from "./show-list";

export const psychList = [
  {
    title: 'He Loves Me, He Loves...',
    season: '1',
    episode: '11',
    thumbnail: './assets/img/shows/psych/he-loves-me.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  },
  {
    title: 'Scary Sherry',
    season: '1',
    episode: '15',
    thumbnail: './assets/img/shows/psych/scary-sherry.jpg',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: 'Gus Dad May...',
    season: '2',
    episode: '10',
    thumbnail: './assets/img/shows/psych/gus-dad-may.png',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: 'There’s Something About Mira',
    season: '2',
    episode: '11',
    thumbnail: './assets/img/shows/psych/something-about-mira.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  },
  {
    title: 'Shawn (And Gus) of the Dead',
    season: '2',
    episode: '16',
    thumbnail: './assets/img/shows/psych/shawn-of-the-dead.jpg',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: 'Murder?... Anyone?',
    season: '3',
    episode: '2',
    thumbnail: './assets/img/shows/psych/murder-anyone.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  },
  {
    title: 'Christmas Joy',
    season: '3',
    episode: '9',
    thumbnail: './assets/img/shows/psych/christmas-joy.jpg',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: 'Tuesday the 17th',
    season: '3',
    episode: '15',
    thumbnail: './assets/img/shows/psych/tuesday-the-seventeeth.jpg',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: 'Lets Get Hairy',
    season: '4',
    episode: '8',
    thumbnail: './assets/img/shows/psych/lets-get-hairy.jpg',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: 'A Very Juliet Episode',
    season: '4',
    episode: '12',
    thumbnail: './assets/img/shows/psych/a-very-juliet.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  },
  {
    title: 'Romeo and Juliet and Juliet',
    season: '5',
    episode: '1',
    thumbnail: './assets/img/shows/psych/romeo-and-juliet.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  },
  {
    title: 'In Plain Fright',
    season: '5',
    episode: '11',
    thumbnail: './assets/img/shows/psych/in-plain-fright.jpg',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: 'The Polarizing Express',
    season: '5',
    episode: '14',
    thumbnail: './assets/img/shows/psych/polarizing-express.jpg',
    rating: 4,
    holidays: ['christmas']
  },
  {
    title: 'This Episode Sucks',
    season: '6',
    episode: '3',
    thumbnail: './assets/img/shows/psych/this-episode-sucks.jpg',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: 'Neil Simons Lovers Retreat',
    season: '6',
    episode: '9',
    thumbnail: './assets/img/shows/psych/lovers-retreat.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  },
  {
    title: 'Shawn and The Real Girl',
    season: '6',
    episode: '12',
    thumbnail: './assets/img/shows/psych/shawn-real-girl.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  },
  {
    title: 'Juliet Takes a Luvvah',
    season: '7',
    episode: '2',
    thumbnail: './assets/img/shows/psych/juliet-takes-a-luvvah.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  },
  {
    title: '100 clues',
    season: '7',
    episode: '5',
    thumbnail: './assets/img/shows/psych/100-clues.jpg',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: 'A Nightmare On State Street',
    season: '8',
    episode: '9',
    thumbnail: './assets/img/shows/psych/nightmare-state-street.jpg',
    rating: 4,
    holidays: ['halloween']
  },
  {
    title: 'The BreakUp',
    season: '8',
    episode: '10',
    thumbnail: './assets/img/shows/psych/the-breakup.jpg',
    rating: 4,
    holidays: ['valentinesDay']
  }
].map(episode => {
  return { ...episode, show: showList['psych'] }
});

// https://www.reddit.com/r/psych/comments/8athzv/complete_holiday_list/