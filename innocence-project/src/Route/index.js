import { BrowserRouter } from "react-router-dom";
import AdminRouter from "./AdminRouter";
import UserRouter from "./userRouter";

function AllRouter (){
    return (
    <BrowserRouter>
        <AdminRouter></AdminRouter>
        <UserRouter></UserRouter>
        </BrowserRouter>
    )
}

export default AllRouter;