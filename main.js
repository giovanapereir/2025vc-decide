const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "'você e o cavalheiro artur e foi convocado para ir para uma missão para matar um dragão que etava incomodando os aoldeões de siena a muitos anos aparentemente sem motivos. Os moraores da cidade te ofereceram a metade os tessouros do animal.', ",
        
        alternativas: [
            {
                texto: "Você decide ir",
                afirmacao: "Apos aceitar ele fica muito feliz com sua participação, voce ganha uma bolada em dinheiro vivo e sai para comemorar em casa."
            },
            {
                texto: "Você recussa",
                afirmacao: "    você não foi,pois achou muito esquiito as ofertas do morradores, e tambem achou muito arricado ja que não sabia como era o animal, pois nunca tinha escutado obre ele.muitois ano depoi você descobre que muitos umiram ino atras o animal."
            }
        ]
    },
    {
        enunciado: "'Com o tempo você foi descobrindo as hitorias daquela pequena vila e descobriu que aquele dragão não era qualquer um, eu nome era inpronunciavel e carregava consigo o posto de portador da estrela do abismo.',",
        alternativas: [
            {
                texto:  "o aldeões se revoltam com você pois havia ido para a ciad com o propoito de matar o dragão e atê agora não tinha feito nada", 
                afirmacao: "você descobre que foi escolhido por fadas que te seuiram pelas estradas escuras e avisaram o povo que um ser de capa azul acabava com o mal e trazia de volta a paz e a luz, falaram que sua espada havia o poder para encerrar é que a cabeça do dragão ira cortar é que se confiasem a ua terra ia voltar a properar. apo descobrir iso você toma corragem e vai em ireçao a caverna do dragão"
            },
            {
                texto:   "você começa a acreditar que todos estavam exaltando a força o animal, então decie ir atraz dele para mostrar a sua força",
                afirmacao: "alavam para todos que sw vissem um cvalheiro de capa azul  'voce' eram para saber que você sempre acaba com todo o mal e levava de volta a paz e a luz, dizia que sua espada era tao forte que tinha o poder para voltr ate com a cabeça do dragao sem esforço "
        ]
    },
    {
        enunciado: "Apos mais um tempo chega a epoca das eleicões a policia esta mais perto de descobrir o golpe por conta da sua insistencia nas investigações, o Deputado reaparece pedindo sua ajudda uma ultima vez, o que você faz?",
        alternativas: [
            {
                texto: "Tenta ajuda-lo",
                afirmacao: "Apos isso você decide ajudar-lo e chegar o dia do golpe a policia descobre toda a armação e a sua participação, você e o deputado são detidos e estão dividindo uma cela e esperando o julgamento."
            },
            {
                texto: "você ajuda a policia",
                afirmacao: "Apos mais um tempo chega o dia das eleições e você percebe o que é certo a se fazer é não ajuda-lo no seu plano, ele é pego pelas autoridades e mesmo ele tentando te incriminar junto com ele a sua colaboracão com a policia mostra o contrario e você segue sua vida feliz."
            }
        ]
    },

        ]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent= ""
    mostraAlternativas();
}

function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas ){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " "
    atual++
    mostraPergunta();
}

function mostreResultado(){
    caixaPerguntas.textContent = " Como termina a sua historia... ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

console.log(perguntas)
