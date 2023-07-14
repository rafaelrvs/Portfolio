import React, { useState } from 'react';
import './PopUp.css';
import Projeto from '../ProjetoMenu';

const PopUp = () => {
  const [paginaProjetoAtivo, setpaginaProjetoAtivo] = useState(false);
  const [mostrarComponente, setMostrarComponente] = useState(true);

  const clickProjeto = (event) => {
    setpaginaProjetoAtivo(true);
    event.preventDefault();
  };
  
  const closeMenu = (event) => {
    setpaginaProjetoAtivo(false);
    setMostrarComponente(false);
    window.location.reload()
    event.preventDefault();


  };

  return (
    <div>
      {mostrarComponente && (
        <div className='bodySecundario'>
          <header id='conteudo-menu'>
            <div className='circle-Img'>
              <img id='foto' src='./images/Menu/minhaFoto.jpg' alt='foto' />
            </div>
            <nav id='link-conteudo-menu'>
              <p id='closePage' onClick={closeMenu}>X</p>
              <h5>Rafael Vieira</h5>
              <p id='linkStyle' onClick={clickProjeto}>Projetos</p>
              <p id='linkStyle'>Interesses</p>
              <p id='linkStyle'>Conhecimento</p>
              <p id='linkStyle'>Proximos passos</p>
              <p id='linkStyle'>Metas e objetivos</p>
            </nav>
          </header>
        </div>
      )}
      {paginaProjetoAtivo && <Projeto />}
    </div>
  );
};

export default PopUp;
