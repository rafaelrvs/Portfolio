import React, { useState } from 'react';

import './Menu.css'
import PopUp from '../PopUp';
const Menu = () => {
  let [mostrarComponente, setMostrarComponente] = useState(false);
  const handleButtonClick  =(event)=>{
        setMostrarComponente(true);
        event.preventDefault();
      
    

  }
  return(
      <div  onClick={handleButtonClick}  id='menuItemOption'> 
      {mostrarComponente && <PopUp />}
        <p id='linha1'></p>
        <p id='linha2'></p>
        <p id='linha3'></p>
      </div>
  );
};

export default Menu