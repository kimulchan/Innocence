import { Redirect,Link } from "react-router-dom";
import * as B from "../Login/style";
import AddBorder from "./AdminPage/AddBorder";
import AddEtc from "./AdminPage/AddEtc";

function index ({match}){
    console.log(match);
    const {component} = match.params;
    function Component (){
        if(component=="addborder"){
            return <AddBorder></AddBorder>
        }
        else if (component == "addetc"){
            return <AddEtc></AddEtc>
        }
        else {
            return <Redirect to ="/"></Redirect>
        }
    }

    return (
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
    )
}

export default index;