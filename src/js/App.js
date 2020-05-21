import React from 'react';

import { GlobalContextProvider } from './context/Context';
import Home from './page-types/Home';

function App() {
  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}

export default App;
