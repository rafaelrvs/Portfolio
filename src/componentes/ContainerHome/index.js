import "./ContainerHome.css";
const ContainerHome = () => {
  return (
    <div className="box-presentation">
        <div className="circle-img-home">
          <img id='minhaImg' src=".\images\myIMG.jpg" alt="Minha foto " />
        </div>
        <nav>
          <h3>Desenvolvedor web</h3>
          <div class="linha-pontilhada"></div>
        </nav>
        <nav >
            <img id="imgRedesSociais" src="./images/RedesSociais/GitHub.png" alt="" />
            <img id="imgRedesSociais" src="./images/RedesSociais/Linkedin.png" alt="" />
            <img id="imgRedesSociais" src="./images/RedesSociais/Gmail.png" alt="" />
        </nav>
    </div>
  );
};
export default ContainerHome;
