import {Cookies} from "react-cookie";
import jwtDecode from "jwt-decode";
const cookies= new Cookies();

export const setCookie = (name,value,option)=>{
    return cookies.set(name,value,{...option})
}

export const getCookie = (name)=>{
    return cookies.get(name)||null;
}

export const removeCookies=(name)=>{
    return cookies.remove(name);
}

export const getData= (name)=>{
    const token = getCookie(name);
    if(token==null){
        return null;
    }
    const data = jwtDecode(token);
    
    return data; 
}
export const getIsAdmin =(name)=>{

    const data=getData(name);
    if(data==null){
        return null;
    }
    return data.isAdmin;

}

export const getName =(name)=>{
    const data=getData(name);
    if(data==null){
        return null;
    }
    return data.name;
}