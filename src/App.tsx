import React from 'react';
import { Router } from '@reach/router';

import Home from './modules/home/Home';
import Events from './modules/events/Events';
import PageContent from './components/PageContent';
import PageHeader from './components/PageHeader';

const App = () => {
  return (
    <>
      <PageHeader />
      <PageContent>
        <Router>
          <Home path="/" />
          <Events path="events/*" />
        </Router>
      </PageContent>
    </>
  );
};

export default App;
