import BtnGitHub from "../BtnGitHub";
import BtnGmail from "../BtnGmail";
import BtnLinkedin from "../BtnLinkedin";
import "./ContainerHome.css";

const ContainerHome = () => {
  return (
    <div className="box-presentation">
      <nav id="container-planoDeFundo">
      <img id='planoDeFundo' src="./images/Menu/imagemDeFundo.png" alt="imagem plano de fundo" />
      </nav>
        <div className="circle-img-home">
          <img id='minhaImg' src=".\images\myIMG.jpg" alt="Minha foto " />

        </div>
        <nav>
          <h3>Desenvolvedor web</h3>
        </nav>
        <nav className="contentRedeSocial" >
            <BtnGitHub/>
            <BtnLinkedin/>
            <BtnGmail/>
        </nav>
    </div>
  );
};

export default ContainerHome;
