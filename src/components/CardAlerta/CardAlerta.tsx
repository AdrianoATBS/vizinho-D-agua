import { useState } from "react";
import './CardAlerta.css'

import { IconAttentionColor, IconCheckColor } from "../../assets/icons";
import { Link } from "react-router-dom";

type CardAlertaProps = {
    tipoAlerta: "Alerta em Verificação" | "Alerta Verificado";
    titulo: string;
    local: string;
    tempo: string;
    textoExpandido: string;
}

export default function CardAlerta({tipoAlerta, titulo, local, tempo, textoExpandido}: CardAlertaProps) {

    const [estaExpandido, setEstaExpandido] = useState(false);

    const getEstiloPorTipo = () =>{
        switch(tipoAlerta){
            case "Alerta em Verificação":
                return{
                    classCor: 'tipo-verificacao',
                    icone: <IconAttentionColor />
                };
            case "Alerta Verificado":
                return{
                    classCor: 'tipo-verificado',
                    icone: <IconCheckColor />
                };
        }
    }
    const {classCor, icone} = getEstiloPorTipo();
    return (
        <div className={`card-alerta-container ${classCor}`}>
        <div className="card-alerta-linha-superior">
            <div className="card-alerta-icone">
                {icone}
            </div>
            <div className="card-alerta-conteudo">
                <span className="card-alerta-titulo">{tipoAlerta}</span>
                <h3 className="card-alerta-subtitulo">{titulo}</h3>
                <span className="card-alerta-local">{local} • {tempo}</span>

                {estaExpandido && (
                    <p className="card-alerta-expandido">{textoExpandido}</p>
                )}
            </div>        
        </div>
            <Link to="#" 
            className={`card-alerta-ver-detalhes ${estaExpandido ? 'link-expandido' : ''}`}
                onClick={() => setEstaExpandido(!estaExpandido)}>
                {estaExpandido ? "Fechar" : "Ver detalhes"}
            </Link>
        </div>
    )
}