import React, { useEffect } from 'react';
import './App.module.scss';
import BaseLayout from './components/BaseLayout';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { logGa } from './utils/log';

function App() {
  useEffect(() => {
    logGa('home_page_visit');
  }, []);

  return (
    <div>
      <HashRouter basename="/">
        <BaseLayout />
      </HashRouter>
    </div>
  );
}

export default App;
