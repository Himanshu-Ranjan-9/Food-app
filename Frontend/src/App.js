import './App.css';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route exect path='/' element={<Home />} />            
          </Routes>
        </div>
      </Router>

  );
}

export default App;
