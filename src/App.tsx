// eslint-disable-next-line no-use-before-define
import './App.css';

import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

// @ts-ignore
import routes from '~react-pages';

function App() {
  // replaced dyanmicaly
  // eslint-disable-next-line no-unused-vars
  const date = '__DATE__';

  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}

export default App;
