import { GlobalStyle } from "./styles/GlobalStyle";
import MenuBar from './components/Main/MenuBar';
import MainPage from './components/Main/MainPage'
import Join from './components/Login/Join/Join'
import TestReducer from "./TestReducer";
import Auth from "./components/Login/auth/Auth";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
     <GlobalStyle></GlobalStyle> 
      <BrowserRouter>
      <Switch>
        <Route component={MenuBar} path="/" exact></Route>
        <Route component={MainPage} path="/" exact></Route>
        <Route component={()=>Login(Auth)} path="/login/login"></Route>
        <Route component={()=>Login(Join)}></Route>
      </Switch>
        
      </BrowserRouter>
     
    </>
  );
}

export default App;
