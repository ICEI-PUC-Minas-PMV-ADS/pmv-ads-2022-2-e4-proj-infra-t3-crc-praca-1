import styled from 'styled-components';
import { primaryColor } from '../../config/colors';
// E utilizado dessa seguinte forma
//exportar um component daqui de dentro e usar la no index do login
// agora importar ele diretamente ali 
// voce esta mandando o H1 JA COM ESTILOS
//todo parametro eu recebo uma props
// O backgorund fica da cor a qual foi recebido o parametro retornado pelo component 
//so imaginar que esta tudo junto e utiliza aqui so de referencia
//tambem se aplica para componentes que estao dentro do componente pai criado
// Um estilo global para todo APP

export const Title = styled.h1`
    font-size: 28px;
    font-weight:300;
    font-family: monospace;
`;

export const Form = styled.form`
    display: flex;
    flex-direction:column;
    margin-top:20px;
   

    label{
        display:flex;
        margin-bottom:20px;
        flex-direction:column;
    }

    input{
        height:40px;
        font-size:18px;
        border:1px solid #ddd;
        padding:10px;
        border-radius:8px;
    &:focus{
       border: 1px solid ${primaryColor}}
    }

    input[type*='file']{
        font-size:10px;
        width:242px;
    }

    input[type*='radio']{
        height:40px;
        width:20px;
        font-size:18px;
    }
`;