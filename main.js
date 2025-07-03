const caixaPrincipal = document.querySelector("caixa-principal");
const caixaperguntas = document.querySelector('caixa-perguntas');
const caixaalternativas = document.querySelector('caixa-alternativas');
const caixaresultado = document.querySelector('caixa-reultado');
const textoreultado = document.querySelector('texo-reultado');
const perguntas = [
 
    {
        enunciado:'pergunta 1',
        alternativas: [
            "alernativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado:'pergunta 2',
        alternativas: [
            "alernativa 3",
            "alternativa 4"
        ]
    },
    {
        enunciado:'pergunta 3',
        alternativas: [
            "alernativa 5",
            "alternativa 6"
        ]
    },
    {
        enunciado:'pergunta 4',
        alternativas: [
            "alernativa 7",
            "alternativa 8"
        ]
    }
]

let atual = 0;
let perguntaatual;

function motraperguntas(){
    perguntaaual = perguntas[atual]
    caixaperguntas.textContent = perguntaatual.enunciado
    mostraralternativa ();
}

function mostrarAlternativa(){
    for( const alternativa of perguntaatual.alternativas ){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click" , () => respostaSelecionada(alternativa));
        caixaalternativas.appendChild(botaoAlternativas)
        }        
}

function respostaSelecionada( opcaoSelecionada){
    atual++;
    mostrarpergunta();
}

mostrarpergunta ();