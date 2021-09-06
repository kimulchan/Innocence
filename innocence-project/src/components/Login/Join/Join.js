import { useState } from "react";
import * as J from "./style";
import join from "../../../utils/api/join" 
import {useHistory} from 'react-router-dom';
function Join (){
    const history = useHistory();
    const [loginInfo,setLoginInfo]=useState({
        name:"",
        student_id:"",
        password:"",
        passwordCheck:""
    })
    const changeInfo=(e)=>{
        const {name,value}=e.target
        setLoginInfo({
            ...loginInfo,
            [name]:value
        })
    }

    const infoList=[{
            name:"name",
            placeholder:"이름"
            
        },{
            name:"student_id",
            placeholder:"학번"
        },{
            name:"password",
            placeholder:"비밀번호",
            type:"password"
        },{
            name:"passwordCheck",
            placeholder:"비밀번호 확인",
            type:'password'
        }
    ]

    const infoMap = (props,index)=>{
        const {name,placeholder,type}=props;
        
        return(
            
            <J.InfoInput key={index}>
                <div>{placeholder}</div>
                <input name={name} type={type} onFocus={J.upEvent} onBlur={J.downEvent} onChange={changeInfo}></input>
            </J.InfoInput>
        )
    }

    const submitInfo=()=>{
        const {name,password,passwordCheck,student_id}=loginInfo;
        if(password!==passwordCheck){
            alert("비밀번호가 서로 다릅니다 !");
            return;
        }
        join.postJoin(name,student_id,password).then(()=>{
            alert("회원가입에 성공하셨습니다");
            history.push('/');
        }).catch(()=>{
            alert("회원가입에 실패하셨습니다")
        })
    }
    
    return (<>
        <J.InfoBox>
            {infoList.map(infoMap)}
        </J.InfoBox>
        <J.Submit onClick={submitInfo}>회원가입</J.Submit>
        </>
    )
}
export default Join;