import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nosotros from "./pages/nosotros/Nosotros";
import Contacto from "./pages/contacto/Contacto";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Navbar />
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div>404 - Página no encontrada</div>} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
