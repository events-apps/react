import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LinkAsButton from '../../../components/buttons/LinkAsButton';
import EventItem from '../components/EventItem';
import useDebounce from '../../../hooks/useDebounce';
import { Event } from '../models/event';
import { fetchEvents } from '../api';

const EventList: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation('events');
  const [events, setEvents] = useState<Event[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    fetchEvents(debouncedSearchText).then(response => setEvents(response.data.data));
  }, [debouncedSearchText]);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl text-gray-800">{t('events')}</h1>
        <div className="flex justify-between">
          <input
            className="shadow appearance-none border rounded block mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={e => setSearchText(e.currentTarget.value)}
          />
          <LinkAsButton to="create">
            <FontAwesomeIcon icon="plus" className="mr-2" />
            {t('createEvent')}
          </LinkAsButton>
        </div>
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
