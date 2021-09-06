import styled from "styled-components";

export const BoxWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
`

export const Content = styled.div`
    width:450px;
    padding: 60px 40px ;
    border: 1px solid #dddddd;
    margin: 50px 0;

`

export const TextContextWrapper = styled.div`
    display: flex;
    flex-direction:column;
    margin:20px 0;
    & p{
        padding-bottom: 30px;
        font-size: 24px;
        font-weight:600;
        line-height: 35px;
    }
    & a{
        padding-bottom:16px;
        font-size: 20px;
        font-weight: 600;
        width: fit-content;
    }
`
