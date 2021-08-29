import * as B from "./style";
import Login from './Login/Login';
import Join from './Join/Join';
function index (){
    
    return(
        <B.BoxWrapper>
            <B.Content>
                <B.TextContextWrapper>
                    <a>INNOCENCE</a>
                    <p>인생을 바꾸는 강의
                        <br></br>
                        대마고 강의
                    </p>
                </B.TextContextWrapper>
                <Join></Join>
            </B.Content>
        </B.BoxWrapper>
    );
}

export default index;