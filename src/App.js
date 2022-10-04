import React from 'react';
import About from './components/About/index';
import Gallery from './components/Gallery';
import Nav from './components/Nav/index';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
