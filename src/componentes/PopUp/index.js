import React, { useState } from 'react';
import './PopUp.css';
import Projeto from '../ProjetoMenu';
import NewWindow from '../NewWindow';
import Conhecimento from '../Conhecimento';
import ProximoPasso from '../ProximoPasso';
import MetasEobjetivo from '../MetasEobjetivos';


const PopUp = () => {
  const [paginaInicial, setPaginaInicial] = useState(true);
  const [paginaProjetoAtivo, setpaginaProjetoAtivo] = useState(false);
  const [paginaInteresses, setmostrarInteresses] = useState(false);
  const [apresentarConhecimento, setApresentarConhecimento] = useState(false);
  const [apresentacaoDaPaginaProximoPasso, setapresentacaoDaPaginaProximoPasso] = useState(false);
  const [showMetaEobjetivo, setshowMetaEobjetivo] = useState(false);
  //------ >   Pagina Projeto <-----------
  const clickProjeto = (event) => {
    setpaginaProjetoAtivo(true);
    setmostrarInteresses(false)
    setApresentarConhecimento(false)
    setapresentacaoDaPaginaProximoPasso(false)
    setshowMetaEobjetivo(false)
    event.preventDefault();
  };

  //------ >   pagina Interesse <-----------
  
  const clickInteresses = (event) => {
    setmostrarInteresses(true);
    setpaginaProjetoAtivo(false);
    setApresentarConhecimento(false)
    setapresentacaoDaPaginaProximoPasso(false)
    setshowMetaEobjetivo(false)
    event.preventDefault();
  };
  //------ >   pagina conhecimento <-----------
  const clickConhecimento = (event) => {
    setApresentarConhecimento(true)
    setpaginaProjetoAtivo(false);
    setmostrarInteresses(false);
    setapresentacaoDaPaginaProximoPasso(false)
    setshowMetaEobjetivo(false)
    event.preventDefault();
  };
  //------ >   pagina proximo Passo <-----------
  
  const clickProximoPasso = (event) => {

    setapresentacaoDaPaginaProximoPasso(true)
    setmostrarInteresses(true);
    setpaginaProjetoAtivo(false);
    setApresentarConhecimento(false)
    setshowMetaEobjetivo(false)
    event.preventDefault();
  };
  //------ >   pagina Meta e Objetivo <-----------
  
  const clickMetaObjetivo = (event) => {
    setshowMetaEobjetivo(false)
    setmostrarInteresses(false);
    setpaginaProjetoAtivo(false);
    setApresentarConhecimento(false)
    setapresentacaoDaPaginaProximoPasso(false)
    setshowMetaEobjetivo(true)
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
              <p id='linkStyle'  onClick={clickMetaObjetivo} >Metas e objetivos</p>
            </nav>
          </header>
        </div>
      )}
      {paginaProjetoAtivo && <Projeto />}
    {paginaInteresses&& <NewWindow/>}
    {apresentarConhecimento&&<Conhecimento/>}
    {apresentacaoDaPaginaProximoPasso&&<ProximoPasso/>}
    {showMetaEobjetivo&&<MetasEobjetivo/>}
    </div>
  );
};

export default PopUp;
