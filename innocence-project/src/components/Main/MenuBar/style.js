import styled from "styled-components";

export const MenuWrapper = styled.header`
    width: 100%;
    min-width: 960px;
    height :108px;
    
    & > div{
        width: 100%;
        min-width: 960px;
        padding: 13px 0 10px;
        display: flex;
        flex-direction: column;
        align-items:center;
        position: fixed;
        border-bottom: 1px solid #dddddd;
    }
`

export const IconWrapper = styled.div`
    height: 28px;
    width: 70%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & a{
        font-weight: 600;
        font-size: 20px;
        &:hover{
          cursor: pointer;  
        }
    }
`
export const LoginWrapper= styled.div`
    height: 100%;
    width: 150px;
    display:flex;

    & a,div{
        font-size: 12px;
        display:flex;
        font-weight: 600;
        justify-content: center;
        align-items: center;
        padding: 0 9px;
        &:hover{
          color:red;
          cursor: pointer;  
        }
    }
    
`
export const ButtonWrapper=styled.div`
    height:36px;
    width:70%;
    display: flex;
    & > div{
        min-width:75px;
        width: auto;
        height:100%;
        display: flex;
        align-items:center;
        padding-right: 40px;
        font-size: 14px;
        font-weight: 600;
        & >a :hover{
            cursor:pointer;
            color: red;
                
        }
        & > ul{
            display:none;
        }
        
    }
    
`
export const HoverBar = styled.ul`
    position:absolute;
    top: 108px;
    width:140px;
    padding:12px 12px;
    border:2px solid #5783c8;
    
    & li{
        padding:10px 0;
    }
`

