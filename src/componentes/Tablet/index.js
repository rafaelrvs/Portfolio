import "./Tablet.css"
const Tablet =()=>{
  const RoboGitHub =(event)=>{
    window.location.href="https://github.com/rafaelrvs/manipulacaoDom.git"
    event.preventDefault();

  }
  const AlvoGitHub =(event)=>{
    window.location.href="https://github.com/rafaelrvs/GameAlvo.git"
    event.preventDefault();

  }
  const relogiotHub =(event)=>{
    window.location.href="https://github.com/rafaelrvs/stopwatch.git"
    event.preventDefault();

  }
  return(
    <div id="tablet">
    <nav id="containerImg" >
      <p id="titleRobo">RoboTron</p>
      <img onClick={RoboGitHub} id="roboImg" src=".\images\ProjetosImagem\TelaRobo.png" alt="" />
    </nav>

    <nav className="containerAlvo">
      <p id="titleAlvo">Alvo</p>
      <img  onClick={AlvoGitHub} id="alvo" src=".\images\ProjetosImagem\CelularAcerteOAlvo.png" alt="" />
    </nav>
    <nav id="containerRelogio" > 
    <p id='titleRelogio'>Relogio</p>
        <img onClick={relogiotHub} id="relogio" src=".\images\ProjetosImagem\relogio.png" alt="" />
    </nav>
   </div>
  )
}
export default Tablet