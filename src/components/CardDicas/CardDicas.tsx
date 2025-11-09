import { IconArrowDown, IconPlay } from '../../assets/icons';
import './CardDicas.css'
type CardDicasProps = {
    image: string;
    title: string;
    author: string;
    contentType: "Video" | "Documento";   
}

export default function CardDicas({ image, title, author, contentType }: CardDicasProps) {
    const infoAutor = `${author} • ${contentType === "Video" ? "Vídeo" : "Documento"}`;
    return (
        <div className="card-dicas-container">
        <div className="card-dicas-imagem">
            <img src={image}
             alt={title}
             className='card-dicas-midia'>
           </img>
           {contentType === 'Video' && (
                <div className="card-dicas-play-overlay">
                    <IconPlay />
                </div>
            )}
        </div>
        <div className="card-dicas-conteudo">
           <div className="card-dicas-textos">
            <h3 className="card-dicas-titulo">{title}</h3>
            <p className="card-dicas-autor">{infoAutor}</p>
           </div>
   
            <div className="card-dicas-download-icone">
                <IconArrowDown  />
            </div>
    
        </div>

        </div>
    )
}
