import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Splash from "./pages/Splash.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/index" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;