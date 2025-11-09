export type Denuncia = {
    id: string;
    title: string;
    location: string;
    date: string;
    status: 'Em Andamento' | 'Processada';
    linkType: 'Editar' | 'Ver Detalhes';
}

export const mockDenuncias: Denuncia[] = [
    {
        id: 'd1',
        title: 'Falta de água',
        location: 'Rua das Palmeiras',
        date: '21/10/2025',
        status: 'Em Andamento',
        linkType: 'Editar'
    },
    {
        id: 'd2',
        title: 'Baixa Pressão',
        location: 'Bairro dos Coqueiros',
        date: '01/10/2025',
        status: 'Processada',
        linkType: 'Ver Detalhes'
    }
]