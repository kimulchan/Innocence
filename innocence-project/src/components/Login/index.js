import * as B from "./style";
import Login from './auth/Auth';
import Join from './Join/Join';
import {Link,Redirect} from "react-router-dom";
import AddBorder from "../Admin/AddBorder";

function index ({match}){
    const {component} = match.params;
    const Component=()=>{
        if(component=="login")return <Login></Login>;
        else if (component == "join") return <Join></Join>;
        else if(component == 'addborder') {
            return <AddBorder></AddBorder>
        }
        else {
            return <Redirect to="/"></Redirect>

        }
    }
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