import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './Utils/PrivateRoute';

// components
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';

function App() {
  return (
    <div className="App">
      <h1>Food Truck Tracker</h1>
      <Switch>
        <Route exact path='/sign-up' component={SignUp}/>
      </Switch>
      <SignIn/>
      
      
    </div>
  );
}

export default App;
