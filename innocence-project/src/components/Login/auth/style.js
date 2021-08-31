import styled from "styled-components";

export const LoginButton=styled.button`
    width: 100%;
    height: 50px;
    font-size:16px;
    font-weight:600;
    background:${props=> props.backgroundColor};
    color:${props =>props.color  ||"#555555"};
    border-radius: 5px;
    border: none;
    outline:none;
    margin: 10px 0 ;
`