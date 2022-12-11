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
import Axios from '../../services/Axios';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Form } from '../Register/styled';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

// importando a funcao do exemples/actions.js 
// que retonar um objeto que tem o type  a qual a funcao dispatch
// vai usar
export default function Usuario() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [foto, setFoto] = useState('');
    const [email, setEmail] = useState('');
    const [documentName, setDocumentName] = useState('');
    const [documentLink, setDocumentLink] = useState('');
    const [taskName, setTaskName] = useState('');
    const [taskStart, setTaskStart] = useState('');
    const [taskFinish, setTaskFinish] = useState('');
    const [taskConclued, setTaskConclued] = useState('');


    useEffect(() => {
        if (!id) return;
        async function getData() {

            try {
                const { data } = await Axios.get("/users/" + id);
                setName(data.name);
                setEmail(data.email);
            } catch (e) {

                const status = get(e, 'response.status');
                if (status === 500) {
                    navigate('/users');
                    toast.error("usuario inexistente.");
                }
                toast.error("Por favor tente novamente mais tarde.");
            }
        }
        getData();
    }, [id])

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

        try {
            if (id) {
                // tenho que postar o documento. e criar antes de editar o usuario ou criar um novo
                let responseDocuments = await Axios.post('documents/', {
                    name: documentName,
                    link: documentLink,
                });

                let documentId = responseDocuments.data.id;

                let responseTasks = await Axios.post('task/', {
                    name: taskName,
                    concluido: taskConclued,
                    dataInicio: taskStart,
                    dataFinal: taskFinish
                });

                let taskId = responseTasks.data.id;

                await Axios.put('users/', {
                    id,
                    name,
                    email,
                    foto,
                    "senha": "",
                    "document": {
                        "id": documentId,
                    },
                    "task": {
                        "id": taskId,
                    }
                })
                toast.success("Usuario Editado | Adcionado tarefas.");
            }

        } catch (error) {
            console.log(error);
            toast.error("tente novamente | mais tarde.");
        }
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

                <label htmlFor="foto">
                    Perfil:<span>(Utilize um gerador de link para imagens.)<strong>LINK DE ACESSO PUBLICO</strong></span>
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    <input type="text" value={foto} foto="foto" onChange={e => setFoto(e.target.value)} />
                </label>
                <label htmlFor="documentNome">
                    Nome do documento:
                    {/* mudando o parametro toda vez que se mudar o valor do input */}
                    <input type="text" value={documentName} name="documentNome" onChange={e => setDocumentName(e.target.value)} />
                </label>
                <label htmlFor="documentoLink">
                    Link do documento:<span>(Google Docs,Link do arquivo de leitura on-line.)<strong>LINK DE ACESSO PUBLICO</strong></span>
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
                    <p>Nao:</p>
                    <input type="radio" name='TarefasConcluida' value={"Nao"} onClick={e => setTaskConclued("Nao")} />
                    <p>Sim:</p>
                    <input type="radio" name='TarefasConcluida' value={"Sim"} onClick={e => setTaskConclued("Sim")} />
                </label>
                <button type="submit">Enviar</button>
            </Form>
            {/* // posso passar parametros que sao checados no componente */}


        </Container>

    );



}