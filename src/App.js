import { React, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import HeaderLayout from './layouts/HeaderLayout'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function getHeaderLayout(Component) {
  return ( 
    <HeaderLayout>
      <Component />
    </HeaderLayout>
  )
}

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={getHeaderLayout(Home)} />
      </Routes>
    </div>
  );
}

export default App;
