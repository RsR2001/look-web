import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

import Rotas from './Rotas';


function App() {
  return (
    <div className="App">



      <ToastContainer />
      <Rotas />

      <div style={{ marginTop: '6%' }} class="ui inverted vertical footer segment">
        <div class="ui center aligned container">
          <div class="ui stackable inverted divided grid">
            <div class="three wide column">
              <h4 class="ui inverted header">Instagram</h4>
              <div class="ui inverted link list">
                <a href="#" class="item" >Acesse nosso Instagram!</a>
              </div>
            </div>
            <div class="three wide column">
              <h4 class="ui inverted header">Suporte</h4>
              <div class="ui inverted link list">
                <a href="#" class="item">Envie um Email clicando aqui</a>
              </div>
            </div>
            <div class="three wide column">

              <h4 class="ui inverted header">FAQ</h4>
              <div class="ui inverted link list">
                <a href="#" class="item">Alguma Pergunta</a>
                <a href="#" class="item">Alguma Pergunta</a>
                <a href="#" class="item">Alguma Pergunta</a>

              </div>
            </div>
            <div class="seven wide column">
              <h4 class="ui inverted header">Pesquise sem sair de casa!</h4>
              <p>Conforto e praticidade para você:
                Compare os melhores preços do mercado para seu produto desejado!
              </p>
            </div>
          </div>
          <div class="ui inverted section divider"></div>
          <img src="/iconeApp.png" class="ui centered mini image" />

        </div>
      </div>

    </div>


  );
}


export default App;
