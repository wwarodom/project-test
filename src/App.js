import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route
          exact
          path="/signin"
          component={Signin}
        />

        <Route
          exact
          path="/dashboard" 
          component={Dashboard}
        />

      </BrowserRouter>
    </div>
  );
}

export default App;
