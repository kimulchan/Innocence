import * as R from "../components";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function UserRouter(){
    return (
        <BrowserRouter>
            <Switch>
                <Route component ={R.Main} path="/" exact/>
                <Route component ={R.Lecture} path="/lecture"/>
                <Route component ={R.Video} path = "/video"/>
                <Route component={R.Login} path="/login"/>
                
            </Switch>
        </BrowserRouter>
    )
}
export default UserRouter;