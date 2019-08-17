import React from 'react';

import { BrowserRouter, Route } from "react-router-dom";
import Signin from './pages/Signin'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route
          exact
          path="/signin"
          component={Signin}
        />

      </BrowserRouter>
    </div>
  );
}

export default App;
