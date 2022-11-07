import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
// BrowserRouter, Switch e Route \\
//Deixar a rota como a home da aplicacao\\
import Login from '../pages/Login';
import Page404 from '../pages/page404';
import MyRoute from './MyRoute';
//criando o componente de rotas 
// vamos usar o myRoute que e na verdade um componente que 
// faz a verificacao se a rota e fechada ou 
// favor conferir no myRoute

export default function Rotas() {
    //Envolver todas as rotas dentro do BrowserRoute que na verdade
    //Ele faz o mapeamento sobre quais rotas vao poder ou nao entrar
    // caso se a for acessar qualquer rota aqui vai ser gerada um toastify msg
    // o use effect toda hora que o componente for chamado ou entao o state for atualizado
    return (
        <Routes>
            {/* Path e a rota que ira ser acessada */}
            {/* agora o componente que vai ser renderizado */}
            {/* se no path is closed receber true e logged true */}
            {/* se o pai receber esse param de isclosed true cai no redirect
            se nao renderiza o filho (children) componente */}
            {/* vai voltar para o path do Login caso contario para o outro */}
            {/* A rota filha esta passando pela configuracao da rota pai que envolve
            ela sendo assim tem uma verificacao no componente que so vai ter acesso a filha
            se passar na rota pai primeiro caso contrario redirect */}
            <Route path="/" element={<Login />} />
            <Route exact path="/page404" element={
                <MyRoute isClosed={true}>
                    {/* esse e o filho da MyRoute que protege o acesso a o children dela  */}
                    <Page404 />
                </MyRoute>
            } />
            {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
    );

}


