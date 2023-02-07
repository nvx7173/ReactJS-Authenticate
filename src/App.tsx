import React, { FC } from "react";
import "./App.css";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { useSelector } from "react-redux";
import { AppState } from "./interfaces";
import { Route, Switch } from "react-router-dom";
import { MainPageRoute, LoginPageRoute } from "./components/HOC/PrivateRouter";
const App: FC = () => {
  const isAuthenticate = useSelector((state: AppState) => state.users.isAuthenticate);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <LoginPageRoute isAuthenticated={isAuthenticate} path="/login" component={Login} />
      <MainPageRoute isAuthenticated={isAuthenticate} path="/mainpage" component={MainPage} />
    </Switch>
  );
};

export default App;
