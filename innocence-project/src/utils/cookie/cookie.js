import {Cookies} from "react-cookie";
import jwtDecode from "jwt-decode";
const cookies= new Cookies();

export const setCookie = (name,value,option)=>{
    return cookies.set(name,value,{...option})
}

export const getCookie = (name)=>{
    return cookies.get(name);
}
export const getData= (name)=>{
    const token = getCookie(name);
    const data = jwtDecode(token);
    return data; 
}
export const getIsAdmin =(name)=>{
    const data=getData(name);
    return data.isAdmin;
}

export const getName =(name)=>{
    const data=getData(name);
    return data.name;
}