import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Listagem from "./pages/Listagem/Listagem";

function App() {
  return (
    <section className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/listagem" element={<Listagem />} />
        </Routes>
      </main>
      <Footer />
    </section>
  )
}

export default App;