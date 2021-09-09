import * as R from "../components";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { AdminRoute } from "./AdminRouter";

function UserRouter(){
    return (
        
            <Switch>
                <Route component ={R.Main}  path="/" exact/>
                <Route component ={R.Lecture} path="/lecture/:category/:language"/>
                <Route component ={R.Lecture} path="/lecture/:category"/>
                <Route component ={R.Video} path = "/video"/>
                <Route component={R.Login} path="/login/:component"/>
                <AdminRoute Component={R.Admin} path="/admin/:component"></AdminRoute>
            </Switch>
    )
}
export default UserRouter;