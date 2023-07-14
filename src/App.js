import React, { useState, useEffect } from 'react';
import './App.css';
import ContainerHome from './componentes/ContainerHome';
import Menu from './componentes/Menu';
import Video from './componentes/Video';

function App() {

  return (
    <div>
      <header>
        <Video />
        <h1 className='titleMenuHome'>Hello world</h1>
        <Menu/>
      </header>
      <main>
        <ContainerHome />
      </main>
    </div>
  );
}

export default App;
