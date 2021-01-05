import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './Utils/PrivateRoute';

// components
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';
import NavBar from './Component/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Food Truck Tracker</h1>
      <Switch>
        <Route exact path='/sign-up' component={SignUp}/>
      </Switch>
      
      
    </div>
  );
}

export default App;
