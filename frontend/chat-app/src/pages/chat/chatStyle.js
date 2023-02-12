import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'
import {Link} from "react-router-dom"
export const GlobalStyle = createGlobalStyle`
body{
    
    background-color:#95A5A6;
    color:black;
}
`

export const Header = styled.div`
background-color:#6C2430;
padding:10px 15px;
display:flex;
position:fixed;
width:100%;
top:0;
`

export const Name = styled.h3`
color:white;
`

export const Logo = styled.img`
width:30px;
margin:auto;
margin-right:8px;
border-radius:50%;
`
export const Leftside = styled.div`
width:70%;
float:left;
margin-top:65px;



`


export const Rightside = styled.div`
width:20%;
background-color:rgb(227, 251, 225);
position:fixed;
box-shadow:0 5px 20px grey;
border-radius:5px;
margin-left:80%;
margin-top:63px;
height:auto;
`

export const Activeusers = styled.p`
 display:flex;
 font-size:24px;
 justify-content:center;

`
export const Ul =styled.ul`
list-style-type:none;
padding-left:${props => props.paddingLeft}

`


export const Li = styled.li`


`

export const Img = styled.img`
width:18px;
vertical-align:sub;
`

export const Chating = styled.div`

border-radius:5px;
background-color:#C3DCF9;
width:100%;
margin-left:70px;
padding:20px;
box-shadow:0 3px 20px grey;


`
export const Message = styled.div`

background-color:${props=>props.send?"#EF233D":"white"};
color:${props=>props.send?"white":"#EF233D"};
border:10px solid transparent; 
box-shadow:1.5px 3px 10px grey;
border-radius: ${props => props.send?'20px 20px 3px 20px':'3px 20px 20px 20px'};
width:40%;
margin-top:10px;
margin-left:${props => props.ml?props.ml:"0"};
margin-right:${props => props.ml?props.mr:"0"};
`

export const Text = styled.p`
margin-left:10px;
margin-bottom:0;
`

export const User = styled(Text)`
margin-left:5px;
font-size:11px;
color:${props => props.send?"white":"#EF233D"};
`
export const Footer = styled.div`
position:fixed;
bottom:5px;
margin:auto;
width:100%;


`

export const Input = styled.input.attrs((props)=> ({type:props.type}) )`

padding:12px 8px;
border-radius:10px;
outline:none;
border:none;
background-color:#193D3D;
margin-left:80px;
width:68.5%;
text-align:center;
color:white;

`
export const Links = styled(Link)`
background-color:transparent;
text-decoration:none !important;
font-size:18px;
color:white;
float:right;
margin-bottom:0px;
margin-left:80%;
&:hover{
    color:black;
    
    vertical-align:text-bottom;
    background-color:lightgrey;
    box-shadow:0 3px 15px white;
    text-decoration:none !important;
    border-radius:20px;
    

}

& p{
   margin-bottom:0px;
   padding:6px 13px 0px 13px;
   &:hover{
    color:black;
    
    vertical-align:text-bottom;
   

}
}
`

