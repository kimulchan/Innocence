import * as M from "./style";

function index(){
    return(
        <M.MenuWrapper>
            <div>
            <M.IconWrapper>
                <p>INNOCENCE</p>
                <M.LoginWrapper>
                    <div>로그인</div>
                    <div>회원가입</div>
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
    )
}
export default index;