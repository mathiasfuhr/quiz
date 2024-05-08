export const questions= [
    {
        question: 'O que é React?',
        options: [
            'Uma linguagem de programação',
            'Um banco de dados',
            'Uma biblioteca JavaScript para construir interfaces de usuário',
            'Um framework CSS'
        ],
        answer: 2 // Índice da resposta correta é 2 (a terceira opção)
    },
    {
        question: 'Qual conceito fundamental do React é responsável por atualizar automaticamente a interface do usuário quando os dados mudam?',
        options: [
            'Estado (state)',
            'Props (propriedades)',
            'Componentes de Classe',
            'Hooks'
        ],
        answer: 0 // Índice da resposta correta é 0 (a primeira opção)
    },
    {
        question: 'Qual é a maneira correta de renderizar um componente React chamado "MyComponent" dentro de outro componente?',
        options: [
            '<MyComponent />',
            '{MyComponent}',
            'render(MyComponent)',
            'renderMyComponent()'
        ],
        answer: 0 // Índice da resposta correta é 0 (a primeira opção)
    },
    {
        question: 'Qual método do ciclo de vida do React é chamado imediatamente após um componente ser inserido no DOM?',
        options: [
            'componentDidMount()',
            'componentDidUpdate()',
            'componentWillUnmount()',
            'componentWillMount()'
        ],
        answer: 0 // Índice da resposta correta é 0 (a primeira opção)
    },
    {
        question: 'Qual é a forma correta de atualizar o estado (state) de um componente React?',
        options: [
            'Usando setState()',
            'Modificando diretamente this.state',
            'Usando props',
            'Usando Redux'
        ],
        answer: 0 // Índice da resposta correta é 0 (a primeira opção)
    },
    {
        question: 'O que são props (propriedades) em React?',
        options: [
            'Funções que modificam o estado de um componente',
            'Métodos assíncronos para carregar dados externos',
            'Dados imutáveis passados de pai para filho em componentes React',
            'Elementos HTML padrão'
        ],
        answer: 2 // Índice da resposta correta é 2 (a terceira opção)
    }
];