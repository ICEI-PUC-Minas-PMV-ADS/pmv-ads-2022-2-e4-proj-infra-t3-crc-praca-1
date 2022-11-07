import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
// vamos receber as props sendo que ele aceita de tudo no parametros
//posso passar na props do componente <Myroute Component = {</app>}  />
// Essa variavel vai dizer se a rota e fechada ou nao isClosed
// E ser usado como verificacao no lugar de so usar o componente route do react
export default function MyRoute({ children, isClosed }) {
    // O state do redux e acessivel em toda aplicacao entao vamos buscar ela 
    const location = useLocation();
    const isLoggedIn = false;
    // essa rota e fechada ? true e loggedIn nao e igual a true
    // 
    if (isClosed && !isLoggedIn) {
        // redireciona
        return (
            <Navigate
                to={`/`}
                replace
                state={{ location }}
            />);
        // fingindo que atualizou

        // recebe o to e la ele recebe o (pathname: pra onde ele vai) 
        // agora esse state e pegando a rota a qual ele estava anterior 
        // antes de cair aqui nesse if
        // para voltar ele para onde ele tentou acessar usando o componente 
        // navigate
    }
    // se passar dessa verificacao renderiza o componente filho  rota aqui 
    // Na verdade esse route e uma rota igual naquelas la de rotas.js
    // serve para redirecionamento se tentar acessar
    return (children);

}

MyRoute.defaultProps = {
    isClosed: false,
};

// componentes.propTypes
MyRoute.propTypes = {
    // quando pode se receber dois tipos de props = params
    isClosed: PropTypes.bool
}
