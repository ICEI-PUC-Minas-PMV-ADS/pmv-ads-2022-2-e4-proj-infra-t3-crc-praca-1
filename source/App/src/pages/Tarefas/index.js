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
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axios from '../../services/Axios';
import { Form } from '../Register/styled';
import { FaArrowAltCircleUp } from 'react-icons/fa';
// importando a funcao do exemples/actions.js 
// que retonar um objeto que tem o type  a qual a funcao dispatch
// vai usar
export default function Tarefas() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [editarAsk, setEditarAsk] = useState('disabled');
    const [tarefas, setTarefas] = useState([]);
    const [nameTaskNew, setNameTaskNew] = useState("");
    const [concluedTaskNew, setConcluedTaskNew] = useState("");
    const [taskStartNew, setTaskStartNew] = useState("");
    const [taskFinishNew, setTaskFinishNew] = useState("");
    useEffect(() => {
        if (id) {
            async function getData() {
                try {
                    let tarefasRequest = await Axios.get('/users/' + id);
                    if (!(tarefasRequest.data.task.id)) {
                        navigate('/');
                        toast.error("Usuario indefinido ou tarefas inexistentes.");
                    }
                    setTarefas(tarefasRequest.data.task);

                    console.log(tarefas);

                } catch (error) {
                    navigate('/');
                    toast.error("Usuario indefinido ou tarefas inexistentes.");
                }
            }
            getData();
        }
        if (!id) {
            navigate('/');
            toast.error("Usuario indefinido ou tarefas inexistentes.");

        }

    }, []);


    async function handleSubmit(e) {

        e.preventDefault();

        if (!taskStartNew && !taskFinishNew) {
            toast.warn("Favor inserir Data Incio | Data Final");
            return;
        }
        try {
            await Axios.put('/task/', {
                id: tarefas.id,
                name: nameTaskNew,
                concluido: concluedTaskNew,
                dataInicio: taskStartNew,
                dataFinal: taskFinishNew
            });
            navigate('/');
            toast.success("Tarefa atualizada com sucesso.");

        } catch (error) {
            navigate('/');
            toast.error("Usuario indefinido ou tarefas inexistentes.");
        }

    }

    function handleEditAsk(e) {
        e.preventDefault();
        document.getElementById('radioOld').style.display = "none";
        setEditarAsk('');

    }

    return (

        <Container>
            {/* // posso passar parametros que sao checados no componente */}
            <h1>Tarefa</h1>
            <div>
                <button onClick={e => handleEditAsk(e)}><FaArrowAltCircleUp></FaArrowAltCircleUp> Tornar Editavel</button>
            </div>

            <Form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="name">
                    Nome Tarefa :
                    <input type="text"
                        value={editarAsk !== "disabled" ? nameTaskNew : tarefas.name}
                        name="nameTask" disabled={editarAsk}
                        onChange={e => setNameTaskNew(e.target.value)}
                    ></input>
                </label>

                <div className='radioOld' id="radioOld">
                    <h4> Tarefa concluida valor (Anterior) :</h4> <span> <strong>{tarefas.concluido}</strong></span>
                </div>
                <br></br>
                <label htmlFor="concluidoTask" >
                    <div className='radioNew' id="radioNew">
                        <h4> Tarefa concluida valor (Novo) :</h4>
                        <p>Sim:</p>
                        <input type="radio" name="conclued" value={"Sim"} onClick={e => setConcluedTaskNew(e.target.value)} disabled={editarAsk} />
                        <p>Nao:</p>
                        <input type="radio" name="conclued" value={"Nao"} onClick={e => setConcluedTaskNew(e.target.value)} disabled={editarAsk} />
                    </div>
                </label>
                <label htmlFor="dataInicioTask">
                    Data Inicio Tarefa :
                    <input type="date"
                        value={editarAsk !== "disabled" ? taskStartNew : tarefas.dataInicio}
                        name="dataInicioTask"
                        disabled={editarAsk}
                        onChange={e => setTaskStartNew(e.target.value)}
                    ></input>
                </label>
                <label htmlFor="dataInicioTask">
                    Data Final  Tarefa :
                    <input type="date" name="dataFinalTask"
                        value={editarAsk !== "disabled" ? taskFinishNew : tarefas.dataFinal}
                        disabled={editarAsk}
                        onChange={e => setTaskFinishNew(e.target.value)}
                    ></input>
                </label>
                <button type="submit" disabled={editarAsk}>Confirmar</button>

            </Form>




        </Container >

    );



}