import React from "react";
import { MenuHeader, Nav, Image } from "./styled";
import { FaHome, FaUserAlt, FaSignInAlt, FaCircle, FaPowerOff } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
// Esse link do react-router-dom na verdade serve para para redirecionamento
// Mas ele precisa ser utilizado dentro do <BrowserRouter>
// O header esta fora do componente <BrowserRouter>
// Vamos mover o Browser Router para o App todo.
import { Link, useNavigate } from "react-router-dom";
import * as actions from '../../store/modules/Auth/actions';
//Serve para fazer o roteamento de url para o front-end




export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    //pegando os valores setados no redux para utilizar e mostrar
    // na tela como preferencialmente depois de atualizar 
    // o estado do componente
    // estou jogando para essa variavel quando o botao for clicado
    // o estado dela alterado

    function handleLogout(e) {
        e.preventDefault();
        dispatch(actions.registerFailure());
        navigate('/login');
    }
    return (
        <MenuHeader>
            <aside>
                <Image src="https://i.ibb.co/LRqrMHn/brasao-peq.png" />
            </aside>
            <Nav>
                <aside>
                    <Link to="/">
                        <FaHome size={24} />
                    </Link>
                    <Link to="/register" >
                        <FaUserAlt size={24} />
                    </Link>
                    {token ?
                        (<Link onClick={e => handleLogout(e)} to="/logout">
                            <FaPowerOff size={24} />
                        </Link>)

                        :
                        (<Link to="/login">
                            <FaSignInAlt size={24} />
                        </Link>)
                    }
                    <Link to="">
                        <FaCircle size={24} color={token ? '#1aff1a' : 'red'} />
                    </Link>
                </aside>

                {/* A gente vai usar o link do react router dom */}
            </Nav>
        </MenuHeader>
    );
}