import styled from 'styled-components';
import { primaryColor } from '../../config/colors';
export const Form = styled.form`
    display: flex;
    flex-direction:column;
    margin-top:20px;
   

    label{
        display:flex;
        margin-bottom:20px;
        flex-direction:column;
    }

    input,select{
        height:40px;
        font-size:18px;
        border:1px solid #ddd;
        padding:10px;
        border-radius:8px;
    &:focus{
       border: 1px solid ${primaryColor}}
    }

    input[type*='file']{
        font-size:10px;
        width:242px;
    }

    input[type*='file']{
        font-size:10px;
        width:242px;
    }
    input[type*='radio']{
        height:40px;
        width:20px;
        font-size:18px;
    }
    span{
        font-size: 15px;
        color:#CC0000;
        font-weight: 200;
        padding:0 0 8px 0;
    }
`;

export const Title = styled.h1`
    font-size: 28px;
    font-weight:300;
    font-family: monospace;
`;

export const DivRadio = styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
    margin-bottom:20px;

`;
