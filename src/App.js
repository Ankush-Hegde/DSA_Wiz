import { React, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
