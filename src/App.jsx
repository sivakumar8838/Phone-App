import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './comonpents/Phone';
import Phones from './comonpents/Phones';







function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/phones/:id' element={<Phones />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
