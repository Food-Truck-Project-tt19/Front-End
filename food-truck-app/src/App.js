import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './Utils/PrivateRoute';

// components
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';
import NavBar from './Component/NavBar';
import DinerHome from './Component/DinerHome';
import Footer from './Component/Footer'
import OperatorHome from './Component/OperatorHome';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <h1>Food Truck Tracker</h1> */}
      <Switch>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/diner/home' component={DinerHome}/>
        <Route exact path='/operator/home' component={OperatorHome}/>
      </Switch>
      <Footer/>
      
      
    </div>
  );
}

export default App;
