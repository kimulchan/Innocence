import * as L from './style';

function Login(){
    const loginMenu =[{
        comment:"이메일로 시작하기"
    },{
        comment:"네이버로 시작하기",
        color:"white",
        backgroundColor:"green"
    },{
        comment:"카카오로 시작하기",
        color:"brown",
        backgroundColor:"yellow"
    }]
    const loginMenuMap=(props)=>{
        console.log(props);
       return <L.LoginButton {...props}>{props.comment}</L.LoginButton>
    }
    return (
        <>
            {loginMenu.map(loginMenuMap)}
        </>
    );
}

export default Login;