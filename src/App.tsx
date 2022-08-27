import React from 'react';
import { NavBar } from './components';
import { Router } from './routes';

function App() {
  return (
    <main className='flex flex-col'>
      <NavBar />
      <Router />
    </main>
  );
}

export default App;
