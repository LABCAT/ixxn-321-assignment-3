import React from 'react';

import { GlobalContextProvider } from './context/Context';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <Main />
      <Footer />
    </GlobalContextProvider>
  );
}

export default App;
