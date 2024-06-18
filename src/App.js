import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import Condicional from "./components/Condicional";
import Evento from "./components/Evento";
import Login from "./components/Form";
import OutraLista from "./components/OutraLista";
import Saudacao from "./components/Saudacao";
import SeuNome from "./components/SeuNome";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Render from "./pages/renderHtml";
import Lists from "./pages/reactLists";
import Forms from "./pages/reactForms";
import FavoriteColor from "./components/evento/useState";
import Effect from "./components/evento/useEffect";
import Context from "./components/evento/useContext";
import Todos from "./components/evento/useReducer";
import useFetch from "./components/evento/useFetch";

function App() {
  const [nome, setNome] = useState('');
  const meusItens = ['item1', 'item2', 'item3', 'item4'];
  const count = useRef(0);
  const inputElement = useRef();
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  const [contar, setContar] = useState(0);
  const [todos, setTodos] = useState([]);
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  const increment = () => {
    setContar((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const focusInput = () => {
    inputElement.current.focus();
  };
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <Router>

      <div className="flex flex-col flex-grow h-screen p-5 text-slate-500">
        <Header />
        <main className="flex flex-col flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Empresa" element={<Empresa />} />
            <Route path="/Contato" element={<Contato />} />
          </Routes>
          <section className="flex flex-wrap justify-center h-full gap-3 my-10 ">
            <div className="p-10 m-auto my-4 rounded-lg max-h-80 bg-slate-100 w-fit">
              <h2>Current Value: {inputValue}</h2>
              <h2>Previous Value: {previousInputValue.current}</h2>
              <>
                <input
                  type="text"
                  ref={inputElement}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </>
            </div>
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
            <div className="p-10 m-auto my-4 break-words rounded-lg bg-slate-100 w-fit max-h-80">
              <Render />
            </div>
            <div className="p-10 m-auto my-4 break-words rounded-lg bg-slate-100 w-fit max-h-80">
              <Lists />
            </div>
            <div className="p-10 m-auto my-4 break-words rounded-lg bg-slate-100 w-fit max-h-80">
              <Forms />
            </div>
            <div className="p-10 m-auto my-4 break-words rounded-lg bg-slate-100 w-fit max-h-80">
              <FavoriteColor />
            </div>
            <div className="p-10 m-auto my-4 break-words rounded-lg bg-slate-100 w-fit max-h-80">
              <Context />
            </div>
            <div className="p-10 m-auto my-4 break-words rounded-lg bg-slate-100 w-fit max-h-80">
              <Todos todos={todos} addTodo={addTodo} />
              <hr />
              <div>
                Count: {contar}
                <button onClick={increment}>+</button>
              </div>
            </div>
            <div className="p-10 m-auto my-4 break-words rounded-lg min-h-fit bg-slate-100 w-fit">
              {data &&
                data.map((item) => {
                  return <p key={item.id}>{item.title}</p>;
                })}
            </div>
            <Effect />
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
