import React from 'react';

import { GlobalContextProvider } from './context/Context';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

import Graph from './Graph';

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <Graph />
      <Main />
      <Footer />
    </GlobalContextProvider>
  );
}

export default App;
