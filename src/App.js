import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/Notfound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
