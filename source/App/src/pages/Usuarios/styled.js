import styled from 'styled-components';

export const UsersContainer = styled.div`
    /* distancia do aluno container para o container  */
    margin-top:36px;
    div,tr {
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:10px;
        padding-top:20px;
    }
    td{
        display:flex;
        justify-content:space-around;
        align-items:center;
        gap:10px;
        padding-top:10px;
    }
    th{
       font-weight:300;
        text-align:justify-all;
    }
    /* div que for seguida de uma div  */
    div + div {
        border-top :1px solid #eee;
    }
`;

export const ProfilePicture = styled.div`

    img{
            width:36px;
            height:36px;
            border-radius: 50%;

    }
`;
