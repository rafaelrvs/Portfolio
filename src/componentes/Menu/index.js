import { useRef, useEffect } from 'react'
import SegundaPagina from '../SegundaPagina'
import './Menu.css'


const Menu = () => {
  const  menuPressionado = () =>{
   const BodySegundaTela = useRef(null);
   
   useEffect(() => {
    // Acessando o elemento do DOM após o componente ter sido montado
    console.log(BodySegundaTela.current);
  }, []);
  
  return(
    <div>
      
        <img onClick={menuPressionado} id='menuOption' src="./images/Menu/menu.png" alt="Menu De opção da pagina" />
    </div>
  );
};

export default Menu