import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Condicional from "./components/Condicional";
import Evento from "./components/Evento";
import Login from "./components/Form";
import OutraLista from "./components/OutraLista";
import Saudacao from "./components/Saudacao";
import SeuNome from "./components/SeuNome";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


function App() {
  const [nome, setNome] = useState('');
  const meusItens = ['item1', 'item2', 'item3', 'item4'];
  return (
    <Router>
      <div className="flex flex-col flex-grow h-screen p-5 text-slate-500">
        <header>
          <nav className="flex justify-between w-full my-auto">
            <h1 className="text-3xl font-bold text-start text-slate-700">React Study</h1>
            <Navbar />
          </nav>
          <hr className="w-full h-px my-10 border-slate-500" />
        </header>
        <main className="flex flex-col flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Empresa" element={<Empresa />} />
            <Route path="/Contato" element={<Contato />} />
          </Routes>
          <section className="flex flex-wrap justify-center h-full gap-3 my-10 ">
            <div className="p-10 m-auto my-4 rounded-lg max-h-80 bg-slate-100 w-fit">
              <Login />
            </div>
            <div className="p-10 m-auto my-4 rounded-lg max-h-80 bg-slate-100 w-fit">
              <Evento />
            </div>
            <div className="p-10 m-auto my-4 rounded-lg bg-slate-100 w-fit max-h-80">
              <h1>Renderização condicional</h1>
              <Condicional />
            </div>
            <div className="p-10 m-auto my-4 rounded-lg bg-slate-100 w-fit max-h-80">
              <h1>Renderização de listas</h1>
              <OutraLista itens={meusItens} />
              <OutraLista itens={[]} />
            </div>
            <div className="p-10 m-auto my-4 break-words rounded-lg bg-slate-100 w-fit max-h-80">
              <h1>State Lift</h1>
              <SeuNome setNome={setNome} />
              <Saudacao nome={nome} />
            </div>
          </section>
        </main>
        <div>
          <hr className="w-full h-px my-10 border-slate-500" />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
