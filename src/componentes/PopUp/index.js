import React, { useState } from 'react';
import './PopUp.css';
import Projeto from '../ProjetoMenu';
import NewWindow from '../NewWindow';
import Conhecimento from '../Conhecimento';
import ProximoPasso from '../ProximoPasso';


const PopUp = () => {
  const [paginaInicial, setPaginaInicial] = useState(true);
  const [paginaProjetoAtivo, setpaginaProjetoAtivo] = useState(false);
  const [paginaInteresses, setmostrarInteresses] = useState(false);
  const [apresentarConhecimento, setApresentarConhecimento] = useState(false);
  const [apresentacaoDaPaginaProximoPasso, setapresentacaoDaPaginaProximoPasso] = useState(false);
  //------ >   Pagina Projeto <-----------
  const clickProjeto = (event) => {
    setpaginaProjetoAtivo(true);
    event.preventDefault();
  };

  //------ >   pagina Interesse <-----------
  
  const clickInteresses = (event) => {
    setmostrarInteresses(true);
    event.preventDefault();
  };
  //------ >   pagina conhecimento <-----------
  const clickConhecimento = (event) => {
    setapresentacaoDaPaginaProximoPasso(true)
    event.preventDefault();
  };
  //------ >   pagina proximo Passo <-----------
  
  const clickProximoPasso = (event) => {
    setPaginaInicial(false);
    setpaginaProjetoAtivo(false);
    setmostrarInteresses(false);
    setapresentacaoDaPaginaProximoPasso(true)
    event.preventDefault();
  };
  
  const closeMenu = (event) => {
    setPaginaInicial(false);
    setpaginaProjetoAtivo(false);
    setmostrarInteresses(false)
    setApresentarConhecimento(false)
    window.location.reload()
    event.preventDefault();


  };

  return (
    <div>
      {paginaInicial && (
        <div className='bodySecundario'>
          <header id='conteudo-menu'>
            <div className='circle-Img'>
              <img id='foto' src='./images/Menu/minhaFoto.jpg' alt='foto' />
            </div>
            <nav id='link-conteudo-menu'>
              <p id='closePage' onClick={closeMenu}>X</p>
              <h5>Rafael Vieira</h5>
              <p id='linkStyle' onClick={clickProjeto}>Projetos</p>
              <p id='linkStyle' onClick={clickInteresses}>Interesses</p>
              <p id='linkStyle' onClick={clickConhecimento}>Conhecimento</p>
              <p id='linkStyle' onClick={clickProximoPasso}>Proximos passos</p>
              <p id='linkStyle'>Metas e objetivos</p>
            </nav>
          </header>
        </div>
      )}
      {paginaProjetoAtivo && <Projeto />}
    {paginaInteresses&& <NewWindow/>}
    {apresentarConhecimento&&<Conhecimento/>}
    {apresentacaoDaPaginaProximoPasso&&<ProximoPasso/>}
    </div>
  );
};

export default PopUp;
