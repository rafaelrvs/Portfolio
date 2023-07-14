import ImagemDePerfilCirculo from "../ImagemDePerfilCirculo"
import "./ProximoPasso.css"
const ProximoPasso = ()=>{
  const backPage = (event) =>{
    window.location.reload()
    event.preventDefault()
  }
  return(
    <div className="newPage">
      <div>
        <ImagemDePerfilCirculo/>
        <nav>
          <p id="nome">
            Rafael vieira
          </p>
          <div class="dotted-line"></div>
        </nav>
        <p id='closePage' onClick={backPage}>X</p>
        <div id="content">

        <nav>
          <p>• Aprender TypeScript.</p>
          <p>• Ingressar na área de Desenvolvimento web.</p>
        </nav>
        <nav>
          <img id="imgOrganizacao" src=".\images\passoApasso.png" alt="" />
        </nav>
        </div>
      </div>
    </div>
  )
}
export default ProximoPasso