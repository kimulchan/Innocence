import { BrowserRouter, Switch } from "react-router-dom";
import AdminRouter from "./AdminRouter";
import UserRouter from "./userRouter";

function AllRouter (){
    return (
    <BrowserRouter>
        <UserRouter></UserRouter>
    </BrowserRouter>
    
    )
}

export default AllRouter;