import nanoid from 'nanoid';

import { Event } from './models/event';

let events: Event[] = [
  {
    id: '1',
    name: 'test 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    tags: ['programming', 'architecture'],
  },
  {
    id: '2',
    name: 'test 2',
    description: 'Voluptatibus quia, nulla!',
    tags: ['photography', 'lenses'],
  },
  {
    id: '3',
    name: 'test 3',
    description: 'Maiores et perferendis eaque, exercitationem praesentium nihil.',
  },
  {
    id: '4',
    name: 'test 4',
  },
];

export const fetchEvents = () => Promise.resolve(events);

export const fetchEvent = (eventId: string) => Promise.resolve(events.find(x => x.id === eventId));

export const createEvent = (event: Event) => {
  events = [...events, { ...event, id: nanoid() }];
  return Promise.resolve();
};

export const deleteEvent = (eventId: string) => {
  events = events.filter(x => x.id !== eventId);
  return Promise.resolve();
};
