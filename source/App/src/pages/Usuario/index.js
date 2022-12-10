import { React, useEffect, useState } from 'react';
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
import { useParams } from 'react-router-dom';
import { Form } from '../Register/styled';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

// importando a funcao do exemples/actions.js 
// que retonar um objeto que tem o type  a qual a funcao dispatch
// vai usar
export default function Usuario() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [documentName, setDocumentName] = useState('');
    const [documentLink, setDocumentLink] = useState('');
    const [taskName, setTaskName] = useState('');
    const [taskStart, setTaskStart] = useState('');
    const [taskFinish, setTaskFinish] = useState('');
    const [taskConclued, setTaskConclued] = useState('');

    // pegamos os estados dos itens e mudamos agora vamos usar a funcao que pega quando envia o form
    async function handleEdit(evento) {
        evento.preventDefault();
        let formErrors = false;

        if (name.length < 3 || name.length > 255 || documentName.length < 3 || taskName.length < 3) {
            formErrors = true;
            // lancando uma mensagem de erro ao toast que executa la no provider que esta no app principal
            toast.error('Nome do Documento| ou | Tarefa | ou | Usuario  deve ter entre 3 e 255 caracteres.');
        }

        if (!isEmail(email)) {
            formErrors = true;
            // lancando uma mensagem de erro ao toast que executa la no provider que esta no app principal
            toast.error('E-mail invalido.');
        }

        if (new Date(taskStart) > new Date(taskFinish)) {
            toast.error('Data inicial da tarefa superior a Data Final da Tarefa.');
        }

        if (formErrors) return;
    }
    return (
        <Container>
            <h1>{id ? 'Editar Usuario' : 'Criar Aluno '}</h1>
            <Form onSubmit={e => handleEdit(e)}>
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
                <label htmlFor="documentNome">
                    Nome do documento:
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    <input type="text" value={documentName} name="documentNome" onChange={e => setDocumentName(e.target.value)} />
                </label>
                <label htmlFor="documentoLink">
                    Link do documento:
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    <input type="text" value={documentLink} name="documentoLink" onChange={e => setDocumentLink(e.target.value)} />
                </label>
                <label htmlFor="TarefasNome">
                    Nome Tarefa :
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    <input type="text" value={taskName} name="taskName" onChange={e => setTaskName(e.target.value)} />
                </label>
                <label htmlFor="TarefasDataInicio">
                    Data inicio Tarefa :
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    <input type="date" value={taskStart} name="taskStart" onChange={e => setTaskStart(e.target.value)} />
                </label>
                <label htmlFor="TarefasDataFinal">
                    Data final Tarefa :
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    <input type="date" value={taskFinish} name="task" onChange={e => setTaskFinish(e.target.value)} />
                </label>
                <label htmlFor="TarefasConcluida">
                    Concluida :
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    <select name="taskConclued">
                        <option value={taskConclued} onClick={e => setTaskConclued(1)}>Nao</option>
                        <option value={taskConclued} onClick={e => setTaskConclued(2)}>Sim</option>
                    </select>
                </label>
                <button type="submit">Enviar</button>
            </Form>
            {/* // posso passar parametros que sao checados no componente */}


        </Container>

    );



}