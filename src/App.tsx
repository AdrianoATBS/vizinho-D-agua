import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
/*Fazer importações adicionais aqui, apenas para testes de components
quando for finalizado, remover os imports desnecessários*/

function App() {
  return (
    <>
      
      <main className="container-conteudo-pagina">
       
       <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  
      </main>
      <NavBar />
    </>
  );
}

export default App;
