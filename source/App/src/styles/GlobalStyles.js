import styled, { createGlobalStyle } from "styled-components";
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
// E utilizado dessa seguinte forma
//exportar um component daqui de dentro e usar la no index do login
// agora importar ele diretamente ali 
// voce esta mandando o H1 JA COM ESTILOS
//todo parametro eu recebo uma props
// O backgorund fica da cor a qual foi recebido o parametro retornado pelo component 
//so imaginar que esta tudo junto e utiliza aqui so de referencia
//tambem se aplica para componentes que estao dentro do componente pai criado
// Um estilo global para todo APP
//Em tudo e so usar o component la no app

//As variaveis sao aplicadas no formato de template string pelo fato de se 
//Se transformar isso aqui tudo em uma string que  e lida por o interpretador
//Esse aqui serve para todos todo app
export default createGlobalStyle`

    *{  
        margin:0;
        padding:0;
        outline:none;
        box-sizing:border-box;
    }

    html, body, #root{
        height:100%
    }
    body{
        font-family:sans-serif;
        background-color:${colors.primaryDarkColor};
        color: ${colors.TitleDarkColor};
    }

    button, a, ul {
        cursor: pointer;
    }
    a{
        text-decoration:none;
        color: ${colors.primaryColor};
    }
    ul{
        list-style: none;
    }
    button{
        background: ${colors.primaryColor};
        border: none;
        color:#fff;
        padding:10px 20px;
        border-radius:4px;
        font-weight:bold;
    }
    body .Toastify .Toastify__toast-container .Toastify__toast--success{
        background:${colors.successColor}
    }
    body .Toastify .Toastify__toast-container .Toastify__toast--error{
        background:${colors.errorColor}
    }

`;
export const Container = styled.section`
    max-width:580px;
    background:#fff;
    /* margin serve para o espacamento dos containers */
    margin:30px auto;
    /* esse padding e de itens do container */
    padding:30px;
    border-radius:4px;
    box-shadow:0 0 10px rgba(0,0,0,0.1);

`;