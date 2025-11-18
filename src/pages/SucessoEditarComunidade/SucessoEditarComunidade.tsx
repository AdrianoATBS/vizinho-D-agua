import Botao from "../../components/Botao/Botao";
import { useNavigate } from "react-router-dom";
import "./SucessoEditarComunidade.css";
    export default function SucessoEditarComunidade() {
    const voltar = useNavigate();

    const handlerContinuar = () =>{
        voltar("/minhas-comunidades");
    }
    return(
        <section className="editar-container">
            <div className="editar-conteudo">
                <h1 className="editar-titulo">Alterações realizadas!</h1>
                <img src="/circulo-check.png" 
                alt="imagem de sucesso"
                className="editar-imagem"/>

                <Botao variante="sucesso" onClick={handlerContinuar}>
                    Continuar
                </Botao>
            </div>

            <footer className="editar-footer-onda">
                <img src="onda.png" alt="Onda decorativa" className="editar-imagem-onda"/>
                <img src="/logo.png" alt="Logo" className="editar-logo" />
            </footer>
        </section>
    )
}