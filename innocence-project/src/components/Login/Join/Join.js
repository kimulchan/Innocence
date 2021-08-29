import * as J from "./style";

function Join (){
    const infoList=[
        {
            name:"name",
            placeholder:"이름"
        },{
            name:"email",
            placeholder:"이메일"
        },{
            name:"password",
            placeholder:"비밀번호"
        },{
            name:"passwordCheck",
            placeholder:"비밀번호 확인"
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
    const infoMap = ({name,placeholder})=>{
        return(
            <J.InfoInput>
                <div >{placeholder}</div>
                <input name={name} onFocus={upEvent} onBlur={downEvent}></input>
            </J.InfoInput>
        )
    }

    return (<>
        <J.InfoBox>
            {infoList.map(infoMap)}
        </J.InfoBox>
        <J.Submit>회원가입</J.Submit>
        </>
    )
}

export default Join;