
import Header from './Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Identity from "./Identity";
import Footer from "./Footer";
import Erreur from './pages/Erreur';


const App = () => {
  return (
    
<BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<Accueil/>} />
<Route path="/Apropos" element={<Apropos/>} />
<Route path="data/:id" element={<Identity/>} />
<Route path="*" element={<Erreur />} />
</Routes>
<Footer/>
</BrowserRouter>

)

  
};
export default App;