import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Listagem from "./pages/Listagem/Listagem";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/listagem" element={<Listagem />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;