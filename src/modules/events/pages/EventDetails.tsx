import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { deleteEvent, fetchEvent } from '../api';
import { Event } from '../models/event';

import PrimaryButton from '../../../components/buttons/PrimaryButton';

interface EventDetailsProps extends RouteComponentProps {
  eventId?: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ eventId, navigate }) => {
  const { t } = useTranslation('events');
  const [event, setEvent] = useState<Event | undefined>();

  useEffect(() => {
    if (!eventId) return;

    fetchEvent(eventId).then(response => setEvent(response.data.data));
  }, [eventId]);

  if (!eventId) return <Redirect to=".." />;
  if (!event) return <div>Loading</div>;

  const handleDelete = () => {
    deleteEvent(eventId).then(() => {
      if (navigate) navigate('..');
    });
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-xl text-gray-800">{event.name}</h1>
        <PrimaryButton onClick={handleDelete}>
          <FontAwesomeIcon icon="trash" className="mr-2" />
          {t('deleteEvent')}
        </PrimaryButton>
      </div>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetails;
