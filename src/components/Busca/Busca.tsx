import { IconMagnifyingGlass } from "../../assets/icons";
import './Busca.css'
type BuscaProps = {
    placeholder: string;
}

export default function Busca({ placeholder }: BuscaProps) {
    return(
        <div className="busca-container">
            <input type="text" className="busca-input" placeholder={placeholder}></input>
            <div className="busca-icone-wrapper">
            <IconMagnifyingGlass className="busca-icone-svg"/>
            </div>
        </div>
    );
}
