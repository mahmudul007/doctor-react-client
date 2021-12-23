import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';


import Login from './Components/Loginsystem/Login';
import axios from 'axios';
import Home from "./Components/Home/Home";
import PrivateRoute from "./Components/Loginsystem/PrivateRoute";
import Appointment from "./Components/Appointpages/Appointment/Appointment";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Test from "./Components/Test";
import AdminRoute from "./Components/Loginsystem/AdminRoute";
import Profile from "./Components/Dashboard/Doctors/Profile";

var token = null;
if (localStorage.getItem('user')) {
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token.token;
}

axios.defaults.headers.common["Authorization"] = token;

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login>
            </Login>
          </Route>
          <AdminRoute path='/profile'>
            <Profile>

            </Profile>
          </AdminRoute>
          <PrivateRoute path='/appointment'>
            <Appointment></Appointment>
          </PrivateRoute>
          <AdminRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </AdminRoute>
          <Route exact path='/test'>
            <Test></Test>
          </Route>


        </Switch>


      </Router>
    </div>
  );
}

export default App;
