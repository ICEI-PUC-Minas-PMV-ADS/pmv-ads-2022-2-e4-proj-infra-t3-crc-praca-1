import { React, useEffect } from 'react';
import { Container } from '../../styles/GlobalStyles';
// esse toast e a messagem se caso acontecer o o componente for chamado o app renderiza essa 
// essa msg no componente principal
//foi recebido com styled components a tag mais a sua formatacao
// Quando um componente e montado 
// por se tratar de uma funcao vamos utilizar o useEffect
// importando um axios para fazer a requisicao atoda vez que o componente for montado
// importando o useDispatch que vai servir para dar nome quando eu disparar uma acao 
// vai ter um escutador do redux para capturar ela e fazer algo 
import { useDispatch } from 'react-redux';

// importando a funcao do exemples/actions.js 
// que retonar um objeto que tem o type  a qual a funcao dispatch
// vai usar
export default function Usuario() {
    // Montado (ative essas funcoes)
    // utilizando a messagem do toastify
    // utilizando o useEffect para quando o componente ser montado
    // chamado ne na verdade

    // toda vez que o componente for chamado ou render
    // irar requisitar criar essa funcao e fazer requisicoes na api

    // function getData() {
    //     Axios.get('/users/').then(
    //         response => { console.log(response); }
    //     );
    // }
    // getData();
    // disparador de acoes para o provider do redux ver


    // acoes que descrevem  oq ele tem que fazer o reducer esta escutando oq chegar 
    // quando um botao for clicado ou algo do genero
    // essa clicaBotao e a funcao que reutiliza toda vez que chamar essa funcao pra 
    // nao ter que mudar em todos arquivos que elas sao chamadas para ficar reutilizavel
    // primeiro ele faz o request 
    return (
        <Container>
            {/* // posso passar parametros que sao checados no componente */}
            <h1>Usuario</h1>

        </Container>

    );



}