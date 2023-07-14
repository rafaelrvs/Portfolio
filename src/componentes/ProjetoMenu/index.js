import Tablet from "../Tablet"
import"./Projeto.css"
const Projeto =()=>{
  const acerteAlvo = (event)=>{
    window.location.href="https://acerte-o-alvo.vercel.app/"
    event.preventDefault();
    
  }
  const adivinheNumero = (event)=>{
    window.location.href="https://adivinhe-o-numeor.vercel.app/"
    event.preventDefault();
    
  }
  const Robotron = (event)=> {
    window.location.href="https://manipulacao-13fdcs5ov-rafaelrvs.vercel.app/"
    event.preventDefault();
  }
  const stopWatch =(event)=>{
    window.location.href="https://stopwatch-ten-tau.vercel.app/"
    event.preventDefault();
  }
  const calculator =(event)=>{
    window.location.href="https://my-project-smoky-six.vercel.app/"
    event.preventDefault();
  }
  const backPage = (event) =>{
    window.location.reload()
    event.preventDefault()
  }
  return(
    <div className="body">
      <nav className="containerImg">
         <img id="imgProjeto" src=".\images\imgProjeto.webp" alt="" />

      <nav>
        <Tablet/>
      </nav>
      </nav>
      <header>
          <h1>Acesse o projeto <br />Aqui:</h1>
          <p onClick={backPage} id="closed">X</p>
          <nav className="contant">
          <p  onClick={Robotron} id="LinkProjetoRobo">Robotron</p>
          <p  onClick={acerteAlvo} id='acerteAlvo'>Acerte o Alvo</p>
          <p  onClick={adivinheNumero} id="adivinheNumero">Acerte o numero</p>
          <p  onClick={stopWatch} id="stopWatch">Stop Watch</p>
          <p    onClick={calculator} id="calculator">Calculadora</p>
          </nav>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}
export default Projeto