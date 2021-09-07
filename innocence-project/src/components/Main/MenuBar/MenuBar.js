import { Link } from "react-router-dom";
import * as M from "./style";
import {getCookie,getName} from "../../../utils/cookie/cookie";

function MenuBar()
{
    const IsLogin=()=>{
        const token = getCookie('token')|| null;
        return token?<div>안녕하세요 {getName("token")}님</div>:<><Link to="login/login">로그인</Link><Link to="login/join" >회원가입</Link></>
    }
    const ButtonMap = (prop)=>{
        const {category,languageList}=prop
        return (
            <div >
                <Link to={`/${category}`}>{category}</Link>
                <M.HoverBar >
                    {languageList.map((language)=>{
                        return(
                            <Link to={`/${category}/${language}`}>{language}</Link>
                        )
                    })}
                </M.HoverBar>
            </div>
        )
       
    }
    return(
        <>
        <M.MenuWrapper>
            <div>
            <M.IconWrapper>
                <Link to="/">INNOCENCE</Link>
                <M.LoginWrapper>
                    <IsLogin></IsLogin>
                </M.LoginWrapper>
            </M.IconWrapper>
            <M.ButtonWrapper>
                
            </M.ButtonWrapper>
            </div>
        </M.MenuWrapper>
        </>
    )
}
export default MenuBar;