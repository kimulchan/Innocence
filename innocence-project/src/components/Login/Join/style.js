import styled from "styled-components";

export const InfoBox =styled.div`
    margin:20px 0 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const InfoInput = styled.div`
    width: 100%;
    height: 30px;
    margin-bottom: 60px;
    & input{
        border: none;
        background-color: transparent;
        position:relative;
        width: 100%;
        height: 29px;  
        border-bottom: 1px solid #dddddd;
        padding:0;
        font-size:15px;
        outline: none;
    }
    & div{
        font-size: 13px;
        height:100%;
        display: flex;
        align-items: center;
        transition-duration: .2s;
        transition-timing-function: ease-out;
        transition-property: all;
        transform-origin: left center;
        transform: translateY(100%) scale(1.1);
    }
`

export const Submit= styled.button`
    height: 35px;
    width: 100%;
    font-size: 16px;
    border-radius: 3px;
    outline: none;
    
`
