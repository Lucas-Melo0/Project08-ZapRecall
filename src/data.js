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
reactDeck.sort(function () {
    return Math.round(Math.random()) - 0.5
})
export default reactDeck
