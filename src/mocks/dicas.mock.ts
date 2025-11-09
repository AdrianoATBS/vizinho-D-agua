export type Dica ={
    id: string;
    title: string;
    image:string;
    author: string;
    contentType: "Video" | "Documento";
}

export const mockDicas: Dica[] = [
    {
        id: 'd1',
        title: 'Boas práticas de consumo',
        image: '/dica-agua.png',
        author: 'Jorge Almeida',
        contentType: 'Documento'
    },
    {
        id: 'd2',
        title: 'Como filtrar água de forma caseira',
        image: '/dica-agua2.png',
        author: 'Priscila Silva',
        contentType: 'Video'
    }
];