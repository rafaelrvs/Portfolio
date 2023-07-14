import "./Interesses.css"

const Interesses =()=>{
  return(
    <div className="main">
      <nav className="container-header">
      <p>Interesses</p>
      <div className="dotted-line"></div>
      </nav>
      <nav className="container-main">
        <p>Aprender tecnologias como</p>
      </nav>
      <nav className="container-imagem">
        <img id="interesses" src="./images/newWindow/interesses.png" alt="" />

      </nav>
      <nav className="container-footer">
        <p>Interesses em participar de eventos</p>

      </nav>
    </div>
  )
}
export default Interesses