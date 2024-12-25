import { React, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import './App.css';
import routes from "./routes";

function AppContent() {
    const navigate = useNavigate();
  
    useEffect(() => {
      navigate('/home');
    }, [navigate]);
  
    return (
      <div className="App">
        <Routes>

          {routes.map((route, index) => {
            const Layout = route.layout || React.Fragment;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout>{route.element}</Layout>}
              />
            );
          })}
          
        </Routes>
      </div>
    );
  }
  
  export default AppContent;  