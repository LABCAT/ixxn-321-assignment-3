import React from 'react';

import { GlobalContextProvider } from './context/Context';

import Header from './layout/Header';
import Main from './layout/Main';

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <Main />
    </GlobalContextProvider>
  );
}

export default App;
