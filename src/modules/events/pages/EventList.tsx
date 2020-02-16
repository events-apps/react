import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTranslation } from 'react-i18next';

import LinkAsButton from '../../../components/LinkAsButton';
import EventItem from '../components/EventItem';
import { Event } from '../models/event';

const events: Event[] = [
  {
    name: 'test 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    tags: ['programming', 'architecture'],
  },
  {
    name: 'test 2',
    description: 'Voluptatibus quia, nulla!',
    tags: ['photography', 'lenses'],
  },
  {
    name: 'test 3',
    description: 'Maiores et perferendis eaque, exercitationem praesentium nihil.',
  },
  {
    name: 'test 4',
  },
];

const EventList: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation('events');

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl text-gray-800">{t('events')}</h1>
        <LinkAsButton to="create">{t('createEvent')}</LinkAsButton>
      </div>
      <div className="flex flex-wrap -mx-3">
        {events.map(event => (
          <div key={event.name} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-3">
            <EventItem event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
