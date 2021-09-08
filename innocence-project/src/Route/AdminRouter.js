
import { Redirect, Route } from "react-router-dom";
import { getIsAdmin } from "../utils/cookie/cookie";

export function AdminRoute({Component,computedMatch}){
    
    return getIsAdmin('token')?<Component match={computedMatch}></Component>:<Redirect to='/'/>
}