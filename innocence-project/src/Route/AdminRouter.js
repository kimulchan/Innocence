import { BrowserRouter, Redirect, Router, Switch } from "react-router-dom";
import { getIsAdmin } from "../utils/cookie/cookie";
import * as R from "../components";

function AdminRouter(){

    if(!getIsAdmin('token')){
        return <Redirect to='/'></Redirect>
    }
    return(
        
            <Switch>
                <Router component={R.AddBorder} path="/admin/addborder"></Router>
                <Router component={R.AddEtc} path="/admin/addetc"></Router>
            </Switch>
    )

}

export default AdminRouter;