import { React, useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/Auth/actions';
import { get } from 'lodash';
// esse toast e a messagem se caso acontecer o o componente for chamado o app renderiza essa 
// essa msg no componente principal
//foi recebido com styled components a tag mais a sua formatacao
// Quando um componente e montado 
// por se tratar de uma funcao vamos utilizar o useEffect
// importando um axios para fazer a requisicao atoda vez que o componente for montado
// importando o useDispatch que vai servir para dar nome quando eu disparar uma acao 
// vai ter um escutador do redux para capturar ela e fazer algo 
import { Form, Title } from './styled';

// importando a funcao do exemples/actions.js 
// que retonar um objeto que tem o type  a qual a funcao dispatch
// vai usar

export default function Login(props) {
    // o disparador de acoes esta aqui para o redux escutar e o saga fazer a requisicao

    const dispatch = useDispatch();
    // se exister esse objeto vai nele se nao usa "/" pagar pegar qual a rota anterior a qual ele estava
    const prevPath = get(props, 'location.state.prevPath', '/');

    const [name, setName] = useState('');
    const [senha, setSenha] = useState('');
    function handleSubmit(evento) {
        evento.preventDefault();
        let formErrors = false;

        if (name.length <= 0) {
            formErrors = true;
            toast.error("E-mail inexistente e/ou invalido!");
        }
        if (senha.length < 6 || senha.length >= 50) {
            formErrors = true;
            toast.error("Formato de senha invalida.");
        }
        if (formErrors) return;

        // buscar e salvar nos estados e validar.
        // salvar no login e no token 
        dispatch(actions.loginRequest({ name, senha, prevPath }));

        // agora to pegando os states das variaveis que foram colocadas 
    }
    // quando e o form receber o submit do evento ele vai fazer essa funcao aqui

    return (
        <Container>
            {/* // posso passar parametros que sao checados no componente */}
            <Title>Login</Title>
            <Form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    Nome de usuario :
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label htmlFor='senha'>
                    Senha :
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />
                </label>
                <button type="submit">Entrar</button>

            </Form>


        </Container>

    );



}