import React, { Suspense } from 'react';

import Routes from './routes';
import './index.css';

const App: React.FC = () => {
  return (
    <Suspense fallback="loading">
      <Routes/>
    </Suspense>
  );
}

export default App;
