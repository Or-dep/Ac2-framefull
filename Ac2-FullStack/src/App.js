import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import CardVerde from './components/CardVerde';
import CardAmarelo from './components/CardAmarelo';
import CardAzul from './components/CardAzul';

function App() {
  return (
    <>
      <header>
        <div clas="btn-nav">
          <Link to='/CardVerde'>CardVerde</Link>
        </div>
        <div clas="btn-nav">
          <Link to='/CardAmarelo'>CardAmarelo</Link>
        </div>
        <div clas="btn-nav">
          <Link to='/CardAzul'>CardAzul</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/CardVerde' element= {<CardVerde/>}/>
          <Route path='/CardAmarelo' element= {<CardAmarelo/>}/>
          <Route path='/CardAzul' element= {<CardAzul/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
