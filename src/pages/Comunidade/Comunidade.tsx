
import Abas from "../../components/abas/abas";
import BarraTopo from "../../components/BarraTopo/BarraTopo";
import Busca from "../../components/Busca/Busca";
import { useState } from "react";
import { mockComunidades, type Comunidade } from "../../mocks/comunidades.mock";
import CardComunidade from "../../components/CardComunidade/CardComunidade";

export default function Comunidade() {
    const abasDaPagina = ["Explorar", "Seguindo"];
    const[abaAtiva, setAbaAtiva] = useState(abasDaPagina[0]);
    const [busca, setBusca] = useState("");

    function filtrarComunidade(lista: Comunidade[], aba: string) {
        const filtroBusca = (comunidade: Comunidade) => comunidade.title.toLowerCase().includes(busca.toLowerCase());

        if(aba === "Explorar") return lista.filter(c => !c.isSeguindo && filtroBusca(c));
        if(aba === "Seguindo") return lista.filter(c => c.isSeguindo && filtroBusca(c));
        return lista.filter(filtroBusca);
    }
    const comunidadesFiltradas = filtrarComunidade(mockComunidades, abaAtiva);

    function handleTrocarAba(novaAba: string) {
        setAbaAtiva(novaAba);
        setBusca("");
    }

    return (
        <>
            <BarraTopo
            title="Comunidades"
            iconType="menu" />
            <Busca placeholder="Buscar por uma comunidade" onSearch={(valor) => setBusca(valor)} />
            <nav>
            <Abas listaDeAbas={abasDaPagina}
            abaAtiva={abaAtiva}
            onAbaClick={handleTrocarAba} />
            </nav>
            <section className="lista-comunidades-container">
                {comunidadesFiltradas.map(comunidade =>
                    <CardComunidade
                        key={comunidade.id}
                        id={comunidade.id}
                        title={comunidade.title}
                        description={comunidade.description}
                        image={comunidade.coverImage}                      
                        members={comunidade.members}
                    />
                )}
                {comunidadesFiltradas.length === 0 &&
                    <p>
                        Nenhuma comunidade encontrada.
                    </p>
                } 
            </section>
        </>
    );
}
