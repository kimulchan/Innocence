import { useState } from "react";
import * as J from "./style";
import join from "../../../utils/api/join" 
function Join (){
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

    
    const upEvent=(e)=>{
        const divE = e.target.previousSibling;
        divE.style.transform="none"
    }

    const downEvent=(e)=>{
        const divE = e.target.previousSibling;
        if(!e.target.value){
            divE.style.transform="translateY(100%) scale(1.2)"   
        }   
    }

    
    const infoMap = ({name,placeholder,type})=>{
        return(
            <J.InfoInput>
                <div >{placeholder}</div>
                <input name={name} type={type} onFocus={upEvent} onBlur={downEvent} onChange={changeInfo}></input>
            </J.InfoInput>
        )
    }

    
    return (<>
        <J.InfoBox>
            {infoList.map(infoMap)}
        </J.InfoBox>
        <J.Submit onClick={join.postJoin()}>회원가입</J.Submit>
        </>
    )
}
export default Join;