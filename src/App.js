import React from 'react';

import './App.scss';
import './component/Navbar/Navbar';

import Navbar from './component/Navbar/Navbar';
import TourList from './component/TourList';

function App() {
  return (
    <div>
      <Navbar />
      <TourList />
    </div>
  );
}

export default App;
