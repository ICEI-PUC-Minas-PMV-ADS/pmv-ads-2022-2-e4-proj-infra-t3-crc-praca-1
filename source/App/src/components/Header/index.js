import React from "react";
import { MenuHeader, Nav, Image } from "./styled";
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { useSelector } from "react-redux";
// Esse link do react-router-dom na verdade serve para para redirecionamento
// Mas ele precisa ser utilizado dentro do <BrowserRouter>
// O header esta fora do componente <BrowserRouter>
// Vamos mover o Browser Router para o App todo.
import { Link } from "react-router-dom";
//Serve para fazer o roteamento de url para o front-end


export default function Header() {
    //pegando os valores setados no redux para utilizar e mostrar
    // na tela como preferencialmente depois de atualizar 
    // o estado do componente
    const botaoClicado = useSelector(state => state.exampleReducers.botaoClicado);

    // estou jogando para essa variavel quando o botao for clicado
    // o estado dela alterado
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
                    <Link to="/page404" >
                        <FaUserAlt size={24} />
                    </Link>
                    <Link to="/logout">
                        <FaSignInAlt size={24} />
                    </Link>
                </aside>

                {/* A gente vai usar o link do react router dom */}
            </Nav>
            {botaoClicado ? 'Clicado' : 'Nao Clicado'}
        </MenuHeader>
    );
}