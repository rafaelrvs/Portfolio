import './BtnGmail.css';

const BtnGmail = () =>{
  const gmailEvento = () =>{
    alert('rafaelvieira1333@gmail.com')
  }
  return(
    <div>
        <img onClick={gmailEvento}
        id="imgRedesSociaisGmail" 
        src="./images/RedesSociais/Gmail.png" 
        alt="Gmail"/>
    </div>
  )

  }

export default BtnGmail