import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ConfigRoutes from "./routes";
import "./App.css";

import CarPage from "./pages/car/index";
import InsurancePage from "./pages/insurance/index";

//document.title = "SUT moew moew";
const App: React.FC = () => {
  
  return (

    <Router>
      <div className="App">
        
        <Routes>
          {/* <Route path="/" element={<CarPage />} /> */}
          <Route path="/car" element={<CarPage />} />
          <Route path="/insurance" element={<InsurancePage />} />
  
        </Routes>
        

      </div>

    </Router>

  );

};


export default App;