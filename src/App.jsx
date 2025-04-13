import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Main from './components/Main/Main'
import Themes from './components/Themes/Themes';
import Politique from './components/Politique/Politique';

function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/themes" element={<Themes/>} />
        <Route path="/politique" element={<Politique/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
