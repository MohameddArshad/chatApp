import Styled from "styled-components";
import { Link } from "react-router-dom";
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body{
    margin:1em;
background-color:#223047;
    color:white;
}

`
export const Box = Styled.div`

background-color:#223047;
border-radius:20px;
width:70%;
margin:50px auto;
padding:30px 0px;
box-shadow:5px 15px 25px 0px  rgb(56, 117, 177, 0.35);
`;

export const Input = Styled.input.attrs((props)=> ({type:props.type}) )`
font-size:16px ;
background-color:transparent !important;
border-width:0 0 2px 0px !important;
border-color:white !important;
border-radius:0px !important;
color:white !important;
display:block;
width:100%;
outline:none;

`;

export const Label = Styled.label`
font-size:18px;

`;
export const Div = Styled.div`

width:75%;
margin:auto;
`;

export const Button = Styled.button`

background-color:#28E7EF;

border-radius:2px;
padding:5px 10px;
width:50%;
border:2px solid #28E7EF;

&:active{
  box-shadow:3px 4px 10px rgb(56, 117, 177);
  background-color:#28ccef;
  
}


`
export const Link = Styled(Link)`
display:flex;
justify-content:center;
text-decoration: none;
`

export const Img = Styled.img`
display:flex;
justify-content:center;
margin:20px auto 0px auto;
`
export const Name = Styled.p`
font-size:13px;
display:flex;
justify-content:center;

`

export const Greeting = Styled(Name)`
font-size:19px;
`

