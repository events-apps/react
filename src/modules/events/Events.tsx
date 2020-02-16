import React from 'react';
import { RouteComponentProps, Router } from '@reach/router';

import EventList from './pages/EventList';
import CreateEvent from './pages/CreateEvent';

const Events: React.FC<RouteComponentProps> = () => {
  return (
    <Router>
      <EventList path="/" />
      <CreateEvent path="create" />
    </Router>
  );
};

export default Events;
