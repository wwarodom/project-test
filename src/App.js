import React from 'react';
import Button from 'antd/es/button';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Signin from './pages/Signin'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Router
          exact
          path="/signin"
          component={Signin}
        />

      </BrowserRouter>
    </div>
  );
}

export default App;
