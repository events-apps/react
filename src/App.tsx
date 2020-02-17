import React from 'react';
import Loadable from 'react-loadable';
import { Router } from '@reach/router';

import Home from './modules/home/Home';
import PageContent from './components/PageContent';
import PageHeader from './components/PageHeader';

const AsyncEvents = Loadable({
  loader: () => import('./modules/events/Events'),
  loading() {
    return <div>Loading...</div>;
  },
});

const App = () => {
  return (
    <>
      <PageHeader />
      <PageContent>
        <Router>
          <Home path="/" />
          <AsyncEvents path="events/*" />
        </Router>
      </PageContent>
    </>
  );
};

export default App;
