import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Home from "./pages/Home";
import Navbar from "./Components/Layout/Navbar";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./pages/Register";
import PrivateRoute from "./Components/private-route/PrivateRoute";
import UserDashboard from "./pages/Dashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageWebsite from "./pages/ManageWebsite";
import NoMatch from "./pages/NoMatch";
import Courses from "./pages/Courses";
import Enquiry from "./pages/OnlineEnquiry"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import StudentReport from './pages/StudentReports'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <Router>
            <div className="App">
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/courses" component={Courses} />
                    <Route exact path="/online-enquiry" component={Enquiry} />
                    <PrivateRoute exact path="/dashboard" component={UserDashboard} />
                    <PrivateRoute path="/dashboard/manage-users" component={ManageUsers} />
                    <PrivateRoute path="/dashboard/manage-website" component={ManageWebsite} />
                    <PrivateRoute path="/dashboard/student-reports" component={StudentReport} />
                    <Route path="*"><NoMatch /></Route>
                </Switch>
            </div>
            </Router>
      </Provider>
    );
  }
}
export default App;
