import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import App from "./App.jsx";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import Activate from "./screens/Activate.jsx";
import Private from "./screens/Private.jsx";
import Admin from "./screens/Admin.jsx";
import ForgetPassword from "./screens/ForgetPassword.jsx";
import ResetPassword from "./screens/ResetPassword.jsx";
import Actions from "./components/actions/Actions";
import Analytics from "./components/analytics/Analytics";
import Navbar from "./components/Navbar";
import Clients from "./components/clients/Clients";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Navbar} />
      <Route exact path="/clients" component={Clients} />
      <Route exact path="/actions" component={Actions} />
      <Route exact path="/analytics" component={Analytics} />
      <Route path="/" exact render={(props) => <App {...props} />} />
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route
        path="/register"
        exact
        render={(props) => <Register {...props} />}
      />
      <Route
        path="/users/password/forget"
        exact
        render={(props) => <ForgetPassword {...props} />}
      />
      <Route
        path="/users/password/reset/:token"
        exact
        render={(props) => <ResetPassword {...props} />}
      />
      <Route
        path="/users/activate/:token"
        exact
        render={(props) => <Activate {...props} />}
      />
      <Route path="/private" exact component={Private} />
      <Route path="/admin" exact component={Admin} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
