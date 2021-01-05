import React from 'react';
import SignUp from './Component/SignUp'
import Footer from './Component/Footer'

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
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/signin' component={SignIn}/>
      </Switch>
      <Footer/>

    </div>
  );
}

export default App;
