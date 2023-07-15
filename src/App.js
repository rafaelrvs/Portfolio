import React, { useState, useEffect } from 'react';
import './App.css';
import ContainerHome from './componentes/ContainerHome';
import Menu from './componentes/Menu';
import Video from './componentes/Video';

function App() {

  return (
    <div className='content'>
      <ContainerHome />
      <header>
        <h1 className='titleMenuHome'>Hello world</h1>
      </header>
      <main>
        <Video />
        <Menu/>
      </main>
    </div>
  );
}

export default App;
