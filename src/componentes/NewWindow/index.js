

import Interesses from "../Interesses"
import"./NewWindow.css"
const NewWindow = () =>{

  const backPage = (event) =>{
    window.location.reload()
    event.preventDefault()
  }
  return(
    <div className="divNewWindow">
        <p onClick={backPage} id="closed">X</p>
      <header>
      <Interesses/>
      </header>

    </div>
  )
}
export default NewWindow