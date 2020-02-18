import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LinkAsButton from '../../../components/buttons/LinkAsButton';
import EventItem from '../components/EventItem';
import { Event } from '../models/event';
import { fetchEvents } from '../api';

const EventList: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation('events');
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents().then(response => setEvents(response.data.data));
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl text-gray-800">{t('events')}</h1>
        <LinkAsButton to="create">
          <FontAwesomeIcon icon="plus" className="mr-2" />
          {t('createEvent')}
        </LinkAsButton>
      </div>
      <div className="flex flex-wrap -mx-3">
        {events.map(event => (
          <div key={event.name} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-3">
            <Link to={event._id}>
              <EventItem event={event} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
