import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import BarraTopo from "./components/BarraTopo/BarraTopo";
import NavBar from "./components/NavBar/NavBar";
/*Fazer importações adicionais aqui, apenas para testes de components
quando for finalizado, remover os imports desnecessários*/

function App() {
  return (
    <>
      <BarraTopo titulo="Alertas" tipoIcone="menu" />
      <NavBar />
       <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
