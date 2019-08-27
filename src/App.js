import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import MainLayout from './components/layout/MainLayout'
import './styles/base.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route
          exact
          path="/" 
          component={Dashboard}
          layout={MainLayout}
        />

      </BrowserRouter>
    </div>
  );
}

export default App;
