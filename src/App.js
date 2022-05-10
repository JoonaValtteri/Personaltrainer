import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Trainingpage from './components/Trainingpage';
import Customerpage from './components/Customerpage';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Customerpage />} />
            <Route path="Customerpage/*" element={<Customerpage />} />
            <Route path="Trainingpage/*" element={<Trainingpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;