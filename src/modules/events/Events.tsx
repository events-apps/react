import React from 'react';
import { RouteComponentProps, Router } from '@reach/router';

import EventList from './pages/EventList';
import CreateEvent from './pages/CreateEvent';
import EventDetails from './pages/EventDetails';

const Events: React.FC<RouteComponentProps> = () => {
  return (
    <Router>
      <EventList path="/" />
      <CreateEvent path="create" />
      <EventDetails path=":eventId" />
    </Router>
  );
};

export default Events;
