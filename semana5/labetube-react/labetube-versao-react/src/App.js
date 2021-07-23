import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faVideo,
  faTh,
  faBell,
  faUserCircle,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div className="tela-inteira">
      {/* <header>
        <h1>LabeTube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
      </header> */}
      <header className="container">
        <div className="logo">
          <FontAwesomeIcon className="icone icone-player" icon={faPlay} />
          <h1>LabeTube</h1>
        </div>
        <div className="input-container">
          <input
            className="search-input"
            type="text"
            placeholder="Pesquisar"
            id="campoDeBusca"
          />
          <button className="btn-input">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="icones">
          <FontAwesomeIcon className="icone" icon={faVideo} />
          <FontAwesomeIcon className="icone" icon={faTh} />
          <FontAwesomeIcon className="icone" icon={faBell} />
          <FontAwesomeIcon className="icone" icon={faUserCircle} />
        </div>
      </header>

      <main>
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-meunu-vertical">Início</li>
            <li className="botoes-meunu-vertical">Em alta</li>
            <li className="botoes-meunu-vertical">Inscrições</li>
            <hr />
            <li className="botoes-meunu-vertical">Originais</li>
            <li className="botoes-meunu-vertical">Histórico</li>
          </ul>
        </nav>

        <section className="painel-de-videos">
          <div className="box-pagina-principal media1" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media2" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=2 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media3" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=3 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media4" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=4 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media5" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=5 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media6" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=6 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media7" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=7 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media8" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=8 " alt="" />
            <h4>{titulo}</h4>
          </div>
        </section>
      </main>

      <footer>
        <h4 className="text-footer">Developed by Ingrid Flack ©2021</h4>
      </footer>
    </div>
  );
}

export default App;