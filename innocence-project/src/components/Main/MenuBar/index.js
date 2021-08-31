import { Link } from "react-router-dom";
import * as M from "./style";
import MainPage from "../MainPage";
function index(){
    return(
        <>
        <M.MenuWrapper>
            <div>
            <M.IconWrapper>
                <p>INNOCENCE</p>
                <M.LoginWrapper>
                    <Link to="/login/login">로그인</Link>
                    <Link to="/login/join">회원가입</Link>
                </M.LoginWrapper>
            </M.IconWrapper>
            <M.ButtonWrapper>
                <div>강의 목록</div>
                <div>강의 목록</div>
                <div>강의 목록</div>
                <div>강의 목록</div>
                <div>강의 목록</div>
            </M.ButtonWrapper>
            </div>
            
        </M.MenuWrapper>
        <MainPage></MainPage>
        </>
    )
}
export default index;