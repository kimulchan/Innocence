import board from "../../../utils/api/board"
import {useEffect, useState} from "react";
import * as A from "./style";
import { useDispatch, useSelector } from "react-redux";
function AddBorder (){
    const state = useSelector(state=>state);
    console.log(state);
    const optionMap =(prop)=>{
        return(
                <option>{prop}</option>
        )
    }
    const selectMap= ()=>{
        const {categoryReducer,laguageReducer,lectureReducer}=state;
        return(
        <>
        <A.SelectWrapper>    
            {categoryReducer.map(prop=>optionMap(prop))}
        </A.SelectWrapper>
        <A.SelectWrapper>
        
            {laguageReducer.map(prop=>optionMap(prop))}
        </A.SelectWrapper>
        <A.SelectWrapper>
        
            {lectureReducer.map(prop=>optionMap(prop))}
        </A.SelectWrapper>
        </>
        )
        
    }
    return (
        
        <>
            {selectMap()}
        </>
    )

}

export default AddBorder;