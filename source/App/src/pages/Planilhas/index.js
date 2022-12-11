import { React, useEffect, useState } from 'react';
import { Container } from './styled.js';
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
import Axios from '../../services/Axios';
import { toast } from 'react-toastify';

// importando a funcao do exemples/actions.js 
// que retonar um objeto que tem o type  a qual a funcao dispatch
// vai usar
export default function Planilhas() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [planilhas, setPlanilhas] = useState('');
    useEffect(() => {
        async function getData() {
            if (id) {
                try {
                    const requestPlanilhas = await Axios.get('/users/' + id);
                    const responsePlanilhasData = requestPlanilhas.data.document;
                    if (!responsePlanilhasData) {
                        toast.error("Este usuario nao possui Documentos| Planilhas");
                        navigate('/');
                    }
                    setPlanilhas(responsePlanilhasData);

                } catch (error) {
                    toast.warn("Ocorreu um erro inesperado.");
                    toast.error("Este usuario nao possui Documentos| Planilhas");
                    navigate('/');
                }
            }
            if (!id) {
                toast.warn("Ocorreu um erro inesperado.");
                toast.error("Este usuario nao possui Documentos| Planilhas");
                navigate('/');
            }
        }
        getData();
    }, []);

    return (
        <Container>
            {/* // posso passar parametros que sao checados no componente */}
            <h1>Planilhas | Documentos </h1>
            <h3>{planilhas.name}</h3>
            <iframe src={planilhas.link}></iframe>

        </Container>

    );



}