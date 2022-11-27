import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// utilizamos o Router para ser util da seguinte maneira
// Configuraremos um possivel historico de navegacao
// por aqui o certo e o Router mesmo mas em seguida
// la no link a gente vai estar utilizando a seguinte config 
import history from './services/history';
// agora vamos utilizar ele junto com router.
// para capturar o hisotico de navegacao a qual ele tentou acessar
import Header from './components/Header';
//importei o componente de Routes para passar a verificacao da URL
import Rota from './routes';
//importei o global styles e agora toda app tem essa estilo
import GlobalStyles from './styles/GlobalStyles';
// esse Toast-container serve como flash messages para ser utilizado como alerta direto do front-end
// esse auto clouse e quanto tempo essas mensagens irao ter de duracao .
import { ToastContainer } from 'react-toastify';
// Agora entra o Redux que passa um state (Global) de app para todos componentes
// App passou para  (App->Routes->Login)
// State incial inicia como false e libera uma acao que e escutada pelo reducer
// acao -> reducer -> newState(manipula ) = state(atual) -> retorna o novo
import { Provider } from 'react-redux';
// esse Provider vai sevir como guia parecido com BrowserRouter
// Que passa para todo app que os componentes possuem rota
// mas na verdade ele mostra que todo app tem um state global para 
// ser usado e mudado
import { PersistGate } from 'redux-persist/integration/react';
// envolver com esse persist gate ele recebe o persistor a const la no index de modules

import Store, { persistor } from './store';
// importei o persistor para informar no app que eu quero salvar a aplicacao do persistor
// 
export default function App() {
  return (
    <div className="App">
      {/* passando o state incial para todo app */}
      {/* espera obter os dados para depois renderizar */}
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter history={history}>
            <Header />
            <Rota />
            <GlobalStyles />
            <ToastContainer autoClose={3000} className={"toast-container"} />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

