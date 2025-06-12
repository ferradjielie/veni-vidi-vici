import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop'; 
import './App.css'
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main'
import Themes from './pages/Themes/Themes';

import Politique from './pages/Politique/Politique';


function App() {
  
 
  return (
    <>
     <Router>
      <ScrollToTop/>
      <Nav/>
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
