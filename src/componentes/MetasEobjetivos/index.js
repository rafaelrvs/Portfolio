import "./MetasEobjetivos.css"
import ImagemDePerfilCirculo from "../ImagemDePerfilCirculo"

const MetasEobjetivo = () =>{
  const backPage = (event) =>{
    window.location.reload()
    event.preventDefault()
  }

  return(
    <div className="classPageMetaEobjetivo">
      <nav>
        <ImagemDePerfilCirculo/>
      </nav>
      <nav>
        <p id="titulo">Metas e objetivos</p>
        <p onClick={backPage} id="exit">X</p>
      </nav>
      <div className="Grafico">
        <p className="grafico1 ">2024</p>
        <p className="grafico2 ">2025</p>
        <p className=" grafico3">2026</p>
      </div>
      <div id="tags">
        <p className="frase1">Estágio em <br/>  Desenvolvimento <br /> de software </p>
        <p className="frase2" >Pós em engenharia <br /> de software <br />conclusão </p>
        <p className="frase3" >Fluência em inglês</p>
      </div>
    </div>

  )
}
export default MetasEobjetivo 