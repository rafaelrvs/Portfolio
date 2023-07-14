import ImagemDePerfilCirculo from "../ImagemDePerfilCirculo"
import "./Conhecimento.css"
const Conhecimento =()=>{
  
  const backPage = (event) =>{
    window.location.reload()
    event.preventDefault()
  }
  return(
    <div className="divConhecimento">
      <nav>
        <ImagemDePerfilCirculo/>
      </nav>
      <p id="titulo">Conhecimento</p>
        <p onClick={backPage} id="closed">X</p>
      <nav className="container-img-logo">
        <img id="imagem-javaScript" src=".\images\newWindow\JAVASCRIPT.jpg" alt="logo javascript" />
        <img id="imagem-java" src=".\images\newWindow\java.png" alt="logo java" />
        <img id="imagem-react" src=".\images\newWindow\react.png" alt="logo react" />
        <img id="imagem-css" src=".\images\newWindow\css.png" alt="logo css" />
        <img id="imagem-html" src=".\images\newWindow\html.png" alt="logo html" />
        <img id="imagem-postgre" src=".\images\newWindow\postgre.png" alt="logo postgre" />
      </nav>
    </div>
  )
}
export default Conhecimento