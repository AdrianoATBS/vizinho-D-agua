import { IconList } from "../../assets/icons"
import { IconMagnifyingGlass } from "../../assets/icons"; 
import "./BarraTopo.css"

type BarraTopoProps = {
    titulo: string;
    tipoIcone: 'menu' | 'busca';
}

export default function BarraTopo({ titulo, tipoIcone }: BarraTopoProps) {
    return (
        <div>
            <header className="barra-topo-container">
                {tipoIcone === 'menu' && 
                <button className="barra-topo-botao-icone">
                    <IconList />
                </button>}
                {tipoIcone === 'busca' &&
                <button className="barra-topo-botao-icone">
                    <IconMagnifyingGlass />
                </button>}
                <h1 className="barra-topo-titulo">{titulo}</h1>
            </header>
                
        </div>
    );
}