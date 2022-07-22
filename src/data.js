const reactDeck = [
    {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
    {question: "O React é", answer: "uma biblioteca JavaScript para construção de interfaces"},
    {question: "Componentes devem iniciar com", answer: "letra maiúscula"},
    {question: "Podemos colocar __ dentro do JSX ", answer: "expressões"},
    {question: "O ReactDOM nos ajuda ", answer: "interagindo com a DOM para colocar componentes React na mesma"},
    {question: " Usamos o npm para", answer: "gerenciar os pacotes necessários e suas dependências"},
    {question: " Usamos props para", answer: "passar diferentes informações para componentes "},
    {question: " Usamos estado (state) para", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]

const casimiroDeck = [
    {question: "Para qual time o casimiro torce", answer: "Vasco"},
    {question: "O amigo que faz react de casa junto com ele", answer: "Chicoin"},
    {question: "Qual o nome da esposa de Casimiro", answer: "Ana beatriz"},
    {question: "Casimiro strema em qual plataforma", answer: "Twitch"},
    {question: "Quantos anos tem casimiro", answer: "28"},
    {question: " Casimiro é formado em", answer: "Jornalismo"},
    {question: "Qual amigo do caze que tem nome de animal", answer: "Pig"},
    {question: " Qual o segundo nome de Casimiro", answer: "Casimiro Miguel"}

]

reactDeck.sort(function () {
    return Math.round(Math.random()) - 0.5
})

export default reactDeck

