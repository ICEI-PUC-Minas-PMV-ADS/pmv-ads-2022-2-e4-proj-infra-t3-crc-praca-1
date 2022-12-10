import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UsersContainer, ProfilePicture } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation, FaExclamationCircle } from 'react-icons/fa';
import Axios from '../../services/Axios';
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
export default function Usuarios() {

    //  ele retornar o valor que voce esta setando e a funcao que voce esta setado;
    const [users, setUsers] = useState([]);

    useEffect(() => {

        async function getData() {
            const alunosResponse = await Axios.get("/users/");
            setUsers(alunosResponse.data);
        };
        getData();
    }, []);

    const handleDeleteAsk = (e) => {
        e.preventDefault();
        const botaoExcluir = e.currentTarget;
        const confirmaExclamacao = e.currentTarget.nextSibling;
        botaoExcluir.remove();
        confirmaExclamacao.setAttribute('display', 'block');
        console.log(confirmaExclamacao);
    };


    const handleDelete = async (e, userID, index) => {
        e.preventDefault();
        try {
            console.log(userID);
            // eliminando o pai do elemento.
            await Axios.delete('/users/' + userID);
            e.target.parentElement.remove();
            const usersAtualizados = [...users];
            usersAtualizados.splice(index, 1);
            setUsers(usersAtualizados);
            toast.success("Usuario excluido com sucesso.");

        } catch (error) {
            toast.success("Tente novamente mais tarde.");
        }

    };

    // so vai executar uma vez e nao todas as vezes que um estado atualizar
    // em vez do this.setState();
    // use state nao e nada mais do que utilizar o state {};
    // agora eu preciso jogar essa variavel response em um estado para ser utilizado toda vez que for para ser atualizado
    // agora com react hooks vamos utilizar o componente funcional (jogar na viravel) 

    return (
        <Container>
            {/* Posso passar parametros que sao checados no componente */}
            <h1>Usuarios</h1>
            <UsersContainer>
                {/* irei retonar um componente direto  */}
                {/* onde toda div que passou pelo passar por sua foreach do map precisa possuir uma key unica */}

                {users.map((user, index) => (
                    <div key={user.id}>
                        <ProfilePicture>
                            {
                                get(user, 'foto', false) ?
                                    (<img src={user.foto} alt="" />)
                                    :
                                    (<FaUserCircle size={36} />)
                            }
                        </ProfilePicture>
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                        <span>{user.department.name}</span>
                        {/* para editr o aluno vou jogar para a rota concatenada com o id do aluno buscado */}
                        {/* no foreach ou map */}
                        {/* para quando ele clicar ele poder utilizar */}
                        <span>
                            <Link to={`/usuario/${user.id}/edit`}><FaEdit size={16} /></Link>
                            <Link to={`/usuario/${user.id}/delete`} onClick={e => handleDeleteAsk(e)} > <FaWindowClose size={16} color="red" /></Link>
                            <FaExclamationCircle size={16} onClick={e => handleDelete(e, user.id, index)} color="red" display={'none'} cursor={'pointer'} />
                        </span>
                        {/* caso queira adcionar fotos */}
                        {/* condicional para se nao tiver foto usar o icone */}
                        {/* se nao retonar vai retornar uma string vazia */}

                        {/* get(aluno, 'Fotos[0].url', '') */}
                        {/* a condicional e assim :   
                        
                            ? (<img src={ user.porfilePic.url } alt = ""> ) :
                            (ICON F ; 

                        */}
                        {/* <img src={ user.porfilePic.url } alt = "" */}
                    </div>
                ))}
            </UsersContainer>
        </Container >
    );

}