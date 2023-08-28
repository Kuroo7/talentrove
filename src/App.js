import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";
import Teams from "./Pages/Teams/Teams";
import Events from "./Pages/Events/Events";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/gallery" Component={Gallery} />
          <Route path="/teams" Component={Teams} />
          <Route path="/events" Component={Events} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
