import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop'; 
import './App.css'
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main'
import Themes from './pages/Themes/Themes';
import Favori from './pages/Favori/Favori';
import PrivateRoute from './utils/PrivateRoute';
import Politique from './pages/Politique/Politique';
import Connexion from './pages/Connexion/Connexion';
import Inscription from './pages/Inscription/Inscription';
import LogoutButton from './components/Logout/LogoutButton';

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
        <Route path="/connexion" element={<Connexion/>} />
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/favori"element={ <PrivateRoute> <Favori /> </PrivateRoute>}/>

      
      </Routes>
    </Router>
    </>
  )
}

export default App
