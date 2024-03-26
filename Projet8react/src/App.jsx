import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./components/pages/Accueil";
import Apropos from "./components/pages/Apropos";
import Identity from "./components/pages/Identity";
import Footer from "./components/Footer";
import Erreur from "./components/pages/Erreur";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="data/:id" element={<Identity />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
