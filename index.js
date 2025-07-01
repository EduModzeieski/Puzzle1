const pedraElement = document.querySelector("button[name=pedra]");
const papelElement = document.querySelector("button[name=papel]");
const tesouraElement = document.querySelector("button[name=tesoura]");
const jogadorElement = document.querySelector("img[name=jogador]");
const botElement = document.querySelector("img[name=bot]");
const score1Element = document.querySelector("#score1");
const score2Element = document.querySelector("#score2");
const resultElement = document.querySelector("p[name=result]");
const folhaInicial = document.getElementById("folha-inicial");
const botaoComecar = document.getElementById("comecar");

botaoComecar.addEventListener("click", () => {
    folhaInicial.style.display = "none";

// Itens do jogo: 0 = Pedra, 1 = Papel, 2 = Tesoura
let contadorJogador = 0;
let contadorPc = 0;

// Atualiza o placar
function alterarScore() {
    score1Element.innerHTML = contadorJogador;
    score2Element.innerHTML = contadorPc;

    if (contadorJogador === 5) {
        resultElement.innerHTML = "Você venceu o jogo!!! Parabéns!!!";
        jogadorElement.src = "wellplayed.png";
        
        // Mostrar próxima fase
        const proximaFase = document.getElementById("proxima-fase");
        proximaFase.style.display = "block";

        contadorJogador = 0;
        contadorPc = 0;
    }

    if (contadorPc === 5) {
        resultElement.innerHTML = "O bot venceu o jogo! Tente novamente!";
        jogadorElement.src = "tryagain.png";
        contadorJogador = 0;
        contadorPc = 0;
    }
}

// Papel
papelElement.addEventListener("click", () => {
    const bot = Math.floor(Math.random() * 3);
    jogadorElement.src = 'papel2.png';

    switch (bot) {
        case 0:
            botElement.src = 'pedra2.png';
            resultElement.innerHTML = "Resultado: Você venceu!!! :D";
            contadorJogador++;
            break;
        case 1:
            botElement.src = 'papel2.png';
            resultElement.innerHTML = "Resultado: EMPATE... :(";
            break;
        case 2:
            botElement.src = 'tesoura2.png';
            resultElement.innerHTML = "Resultado: Você Perdeu... D:";
            contadorPc++;
            break;
    }

    alterarScore();
});

// Tesoura
tesouraElement.addEventListener("click", () => {
    const bot = Math.floor(Math.random() * 3);
    jogadorElement.src = 'tesoura2.png';

    switch (bot) {
        case 0:
            botElement.src = 'papel2.png';
            resultElement.innerHTML = "Resultado: Você venceu!!! :D";
            contadorJogador++;
            break;
        case 1:
            botElement.src = 'pedra2.png';
            resultElement.innerHTML = "Resultado: Você Perdeu... D:";
            contadorPc++;
            break;
        case 2:
            botElement.src = 'tesoura2.png';
            resultElement.innerHTML = "Resultado: EMPATE... :(";
            break;
    }

    alterarScore();
});

// Pedra
pedraElement.addEventListener("click", () => {
    const bot = Math.floor(Math.random() * 3);
    jogadorElement.src = 'pedra2.png';

    switch (bot) {
        case 0:
            botElement.src = 'pedra2.png';
            resultElement.innerHTML = "Resultado: EMPATE... :(";
            break;
        case 1:
            botElement.src = 'papel2.png';
            resultElement.innerHTML = "Resultado: Você Perdeu... D:";
            contadorPc++;
            break;
        case 2:
            botElement.src = 'tesoura2.png';
            resultElement.innerHTML = "Resultado: Você venceu!!! :D";
            contadorJogador++;
            break;
    }

    

    alterarScore();

   


});
});