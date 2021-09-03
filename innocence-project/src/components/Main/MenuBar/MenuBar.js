import { Link } from "react-router-dom";
import * as M from "./style";
import MainPage from "../MainPage/MainPage";
import {useEffect,useState} from 'react';

function MenuBar()
{
    const [menu,setMenu]=useState(['frontEnd','backend']);
    
    const mapDiv=(prop,index)=>{
        return <div key={index}>{prop}</div>
    }
    return(
        <>
        <M.MenuWrapper>
            <div>
            <M.IconWrapper>
                <p>INNOCENCE</p>
                <M.LoginWrapper>
                    <Link >로그인</Link>
                    <Link >회원가입</Link>
                </M.LoginWrapper>
            </M.IconWrapper>
            <M.ButtonWrapper>
                {menu.map(mapDiv)}
            </M.ButtonWrapper>
            </div>
        </M.MenuWrapper>
        </>
    )
}
export default MenuBar;