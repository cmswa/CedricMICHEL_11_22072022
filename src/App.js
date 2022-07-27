import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/Notfound';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
