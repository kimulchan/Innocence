import * as B from "./style";
import Login from './auth/Auth';
import Join from './Join/Join';
import {Link,Route,Switch} from "react-router-dom";

function index (Component){
    
    return(
        <B.BoxWrapper>
            <B.Content>
                <B.TextContextWrapper>
                    <Link to='/'>INNOCENCE</Link>
                    <p>인생을 바꾸는 강의
                        <br></br>
                        대마고 강의
                    </p>
                </B.TextContextWrapper>
                <Component></Component>
            </B.Content>
        </B.BoxWrapper>
    );
}

export default index;