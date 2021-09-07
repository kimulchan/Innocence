import board from "../../utils/api/board"
import {useState} from "react";
import { getIsAdmin } from "../../utils/cookie/cookie";
import { Redirect } from "react-router-dom";

function AddBorder (){
    const [borderInfo,setBorderInfo]=useState({
        category: "",
        language: "",
        lecture: "",
        title: "",
        URL: ""
    })
    const changeInfo=(e)=>{
        const {name,value}=e.target
        setBorderInfo({
            ...borderInfo,
            [name]:value
        })
    }

    const infoList=[{
            name:"category",
            placeholder:"category"
            
        },{
            name:"language",
            placeholder:"language"
        },{
            name:"lecture",
            placeholder:"lecture",
            
        },{
            name:"title",
            placeholder:"title",
            
        },{
            name:"URL",
            placeholder:"URL",
        }
    ]
    const MapInfo =(prop)=>{
        const {name,placeholder}=prop;
        return(
            <input onChange={changeInfo}name ={name} placeholder={placeholder}></input>
        );
    }
    const borderAdd = ()=>{
        const {category,language,lecture,title,URL}=borderInfo
        board.postBoard(category,language,lecture,title,URL).then(()=>{
            alert("성공적으로 추가되었습니다")
        }).catch((e)=>{
            alert(e);
        })
    }
    if(!getIsAdmin("token")){
        
        
        return (
            <>
                <Redirect to="/"></Redirect>
            </>
        );
        
    }
    else{
        return (
            <>
                {infoList.map(MapInfo)}
                <button onClick={borderAdd}>border 추가</button>
            </>
        );
    }
    
}

export default AddBorder;