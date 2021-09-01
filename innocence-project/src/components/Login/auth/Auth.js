import * as L from './style';
import * as J from '../Join/style';
import login from '../../../utils/api/login';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
function Login(){
    const history= useHistory();
    const [loginInfo, setLoginInfo]=useState({
        student_id:"",
        password:""
    })
   const onLogin =()=>{
        login.postLogin({
            ...loginInfo
        }).then(()=>{
            alert("로그인 성공!");
            history.push('/');
        }).catch(()=>{
            alert("로그인 실패");
        })
   }
   const changeInfo =(e)=>{
       const {name,value}=e.target;
       setLoginInfo({
           ...loginInfo,
            [name]:value
       })
   }
    return (
        <>
        <J.InfoInput>
            <div >학번</div>
            <input onFocus={J.upEvent} onBlur={J.downEvent} onChange={changeInfo} name='student_id'></input>
        </J.InfoInput>
        <J.InfoInput>
            <div >패스워드</div>
            <input onFocus={J.upEvent} onBlur={J.downEvent} onChange={changeInfo} name='password'></input>
        </J.InfoInput>
        <L.LoginButton onClick={onLogin}>로그인</L.LoginButton>
        </>
    );
}

export default Login;