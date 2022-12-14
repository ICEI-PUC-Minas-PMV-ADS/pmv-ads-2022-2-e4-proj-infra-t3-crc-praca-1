import styled from 'styled-components';

export const Container = styled.section`
    width:100%;
    height:900px;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    background:#fff;
    /* margin serve para o espacamento dos containers */
    margin:30px auto;
    /* esse padding e de itens do container */
    padding:30px;
    border-radius:4px;
    box-shadow:0 0 10px rgba(0,0,0,0.1);

    iframe{
        width:100%;
        height:100%;
    }
`;

// E utilizado dessa seguinte forma
//exportar um component daqui de dentro e usar la no index do login
// agora importar ele diretamente ali 
// voce esta mandando o H1 JA COM ESTILOS
//todo parametro eu recebo uma props
// O backgorund fica da cor a qual foi recebido o parametro retornado pelo component 
//so imaginar que esta tudo junto e utiliza aqui so de referencia
//tambem se aplica para componentes que estao dentro do componente pai criado
// Um estilo global para todo APP
