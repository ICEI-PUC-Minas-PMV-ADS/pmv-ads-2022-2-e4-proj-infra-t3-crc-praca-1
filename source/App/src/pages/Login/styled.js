import styled from 'styled-components';
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
    background: ${props => (props.isGreen) ? 'green' : 'red'};
`;