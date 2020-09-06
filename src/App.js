import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Nomatch from './components/Nomatch/Nomatch';
import PostDetail from './components/PostDetail/PostDetail';
import Navbar from './components/Navbar/Navbar';

// React Router Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  return (
   <div>
     <Navbar></Navbar>
    <Router>
        <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>
             <Route path="/post/:postId/:commentId">
                <PostDetail></PostDetail>
             </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="*">
               <Nomatch></Nomatch>
            </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;






