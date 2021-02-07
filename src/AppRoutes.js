import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import RegistrationForm from "./App/pages/RegistrationForm/RegistrationForm";
import LoginForm from "./App/pages/LoginForm/LoginForm";
import PrivateRoute from "./PrivateRoute";
import HomePage from "./App/pages/Home/Home";


export default function BasicExample() {
    let history = useHistory();
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/signup" component={RegistrationForm} />
                <PrivateRoute path="*" history={history} component={HomePage} isAuthenticated={window.localStorage.getItem('token')} />
            </Switch>
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.
