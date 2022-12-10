import React, { useState, useEffect } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Form, Title, DivRadio } from './styled';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import Axios from '../../services/Axios';
import { useNavigate } from "react-router-dom";
import * as actions from '../../store/modules/Auth/actions';
// esse toast e a messagem se caso acontecer o o componente for chamado o app renderiza essa 
// essa msg no componente principal
//foi recebido com styled components a tag mais a sua formatacao
// Quando um componente e montado 
// por se tratar de uma funcao vamos utilizar o useEffect
// importando um axios para fazer a requisicao atoda vez que o componente for montado
// importando o useDispatch que vai servir para dar name quando eu disparar uma acao 
// vai ter um escutador do redux para capturar ela e fazer algo 
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import history from '../../services/history';
import { get } from 'lodash';

// importando a funcao do exemples/actions.js 
// que retonar um objeto que tem o type  a qual a funcao dispatch
// vai usar
export default function Register() {
    const nomeStored = useSelector(state => state.auth.user.name);
    const emailStored = useSelector(state => state.auth.user.email);
    const cpfStored = useSelector(state => state.auth.user.cpf);
    const departmentStored = useSelector(state => state.auth.user.department);

    const [id, setId] = useState(useSelector(state => state.auth.user.id));
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [foto, setFoto] = useState('');
    const [department, setDepartment] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!id) return;
        //usuario existente mas a api trouxe itens vazios ou foram salvos vazios no storage
        setName(!nomeStored ? '' : nomeStored);
        setEmail(!emailStored ? '' : emailStored);
        setDepartment(!departmentStored ? '' : departmentStored);
        setCpf(!cpfStored ? '' : cpfStored);

    }, [emailStored, id, nomeStored, departmentStored, cpfStored]);


    // pegamos os estados dos itens e mudamos agora vamos usar a funcao que pega quando envia o form
    async function handleSubmit(evento) {
        evento.preventDefault();
        let formErrors = false;

        if (name.length < 3 || name.length > 255) {
            formErrors = true;
            // lancando uma mensagem de erro ao toast que executa la no provider que esta no app principal
            toast.error('name deve ter entre 3 e 255 caracteres.');
        }
        if (!isEmail(email)) {
            formErrors = true;
            // lancando uma mensagem de erro ao toast que executa la no provider que esta no app principal
            toast.error('E-mail invalido.');
        }

        if (!id && (senha.length < 3 || senha.length > 255)) {
            formErrors = true;
            // lancando uma mensagem de erro ao toast que executa la no provider que esta no app principal
            toast.error(' Senha deve ter entre 3 e 50 caracteres.');
        }

        if (!department) {
            formErrors = true;
            // lancando uma mensagem de erro ao toast que executa la no provider que esta no app principal
            toast.error('Selecione um departamento.');
        }

        if (formErrors) return;
        dispatch(actions.registerRequest({
            id,
            name,
            cpf,
            email,
            senha,
            foto,
            department,
        }));

    }

    return (
        <Container>
            <Title>{'Conta'}</Title>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Nome:
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    <input type="text" value={name} name="name" onChange={e => setName(e.target.value)} />
                </label>
                <label htmlFor="email">
                    E-mail:
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    <input type="email" value={email} name="email" onChange={e => setEmail(e.target.value)} />
                </label>
                <label htmlFor="senha">
                    Senha:
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    <input type="password" value={senha} name="senha" onChange={e => setSenha(e.target.value)} />
                </label>
                <label htmlFor="cpf">
                    Cpf:
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    <input type="text" value={cpf} name="cpf" onChange={e => setCpf(e.target.value)} />
                </label>
                <label htmlFor="foto">
                    Perfil:
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    <input type="text" value={foto} name="foto" onChange={e => setFoto(e.target.value)} />
                </label>
                <p>Departamento:</p>
                <DivRadio htmlFor="departamento">
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    Gestão:
                    <input type="radio" name="departament" onChange={e => setDepartment(1)} />

                    Informatica:
                    <input type="radio" name="departament" onChange={e => setDepartment(2)} />
                </DivRadio>
                <DivRadio htmlFor="departamento">
                    <button type="submit" onClick={e => setId(undefined)} >{'Criar'}</button>
                    <button type="submit">{'Editar '}</button>
                </DivRadio>
            </Form>
            {/* posso passar parametros que sao checados no componente */}
        </Container>

    );



}