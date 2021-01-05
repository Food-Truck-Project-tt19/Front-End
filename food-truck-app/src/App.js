import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './Utils/PrivateRoute';

// components
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Food Truck Tracker</h1>
      <Switch>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/signin' component={SignIn}/>
      </Switch>
      <SignIn/>
      
      
    </div>
  );
}

export default App;
