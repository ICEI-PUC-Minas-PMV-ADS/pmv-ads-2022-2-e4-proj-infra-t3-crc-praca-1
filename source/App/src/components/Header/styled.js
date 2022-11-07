import styled from "styled-components";
import { primaryColor } from "../../config/colors";

//menu de navegacao header 
//margin sera de os itens do body
//distancia do nav serao de 20px //padding
//display do nav pai sera de  flex para os itens

export const Nav = styled.nav`
    background:${primaryColor};
    padding:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    a{
        color:#fff;
        margin: 0 10px 0;
        font-weight: bold;
    
    }
    
`;

export const MenuHeader = styled.nav`
    background:${primaryColor};
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
export const Image = styled.img`
    width:60px;
    height:50px;
    padding-left:10px;
`;





