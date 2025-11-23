import BarraTopo from "../../components/BarraTopo/BarraTopo";
import Busca from "../../components/Busca/Busca";
import Abas from "../../components/abas/abas";
import CardEducacional from "../../components/CardDicas/CardDicas";
import { mockDicas, type Dica } from "../../mocks/dicas.mock";
import { useState } from "react";

export default function Dicas() {
    const abasDaPagina = ["Todos", "Videos", "Documentos"];

    const [abaAtiva, setAbaAtiva] = useState(abasDaPagina[0]);
    const [busca, setBusca] = useState("");

    const dicasFiltradas = mockDicas.filter((dica: Dica) =>{
        const filtroAba = abaAtiva === "Videos" ? dica.contentType === "Video" : 
        abaAtiva === "Documentos" ? dica.contentType === "Documento" : true;

        const filtroBusca = dica.title.toLowerCase().includes(busca.toLowerCase());
        return filtroAba && filtroBusca;
    });

    function handleTrocarAba(novaAba: string) {
        setAbaAtiva(novaAba);
        setBusca("");
    }

    return (
        <>
            <BarraTopo
            title="Dicas"
            iconType="menu"
            />
            <Busca placeholder="Buscar conteúdo especifico"
             onSearch={(valor) => setBusca(valor)} />
            <nav>
            <Abas listaDeAbas={abasDaPagina}
            abaAtiva={abaAtiva} 
            onAbaClick={handleTrocarAba}
            />
            </nav>
            <section className="lista-dicas-container">
                {dicasFiltradas.map(dicas =>(
                    <CardEducacional key={dicas.id}
                    image={dicas.image}
                    title={dicas.title}
                    author={dicas.author}
                    contentType={dicas.contentType}
                    fileUrl={dicas.fileUrl}
                    />
                ))}
            </section>

        </>
    );
}
