import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop'; 
import './App.css'
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main'
import Themes from './components/Themes/Themes';

import Politique from './components/Politique/Politique';
import politique from './data/politique';

function App() {
  
  const politicsElements = politique.map((entryPolitics) => {
    return (
      <Politique
        key={entryPolitics.id}
        mot={entryPolitics.mot}
        traduction={entryPolitics.traduction}
        etymologie={entryPolitics.etymologie}
        contexte={entryPolitics.contexte}
      />
    );
  });
   
  return (
    <>
     <Router>
      <ScrollToTop/>
      <Nav/>
      <Routes>
   
        <Route path="/" element={<Main />} />
        <Route path="/themes" element={<Themes/>} />
        <Route path="/politique" 
              element={
              <div>
                <h2>Politique</h2>
              {politicsElements}
             </div>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
