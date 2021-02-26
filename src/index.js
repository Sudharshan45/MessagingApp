import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import {Route,BrowserRouter as Router} from 'react-router-dom'
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';
const firebase =require("firebase")
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyBbhvId8KGz3Bj14tDumPnxn50wgVT7BfI",
    authDomain: "message-app-c44f2.firebaseapp.com",
    projectId: "message-app-c44f2",
    storageBucket: "message-app-c44f2.appspot.com",
    messagingSenderId: "752297370427",
    appId: "1:752297370427:web:d4ce953ea43ec2ad58cd1e",
    measurementId: "G-H5KBSYXZ5X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const routing=(
    <Router>
        <div>
            <Route path='/login' component={LoginComponent}></Route>
            <Route path='/signup' component={SignupComponent}></Route>
            <Route path='/dashboard' component={DashboardComponent}></Route>
        </div>
        </Router>

)
ReactDOM.render(routing,document.getElementById('root'))