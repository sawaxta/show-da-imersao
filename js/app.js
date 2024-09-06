// Selecionando os elementos HTML
const perguntaElement = document.querySelector(".pergunta p");
const alternativasElement = document.querySelector(".opcoes");
const valorElement = document.querySelector(".valor .numeros");
const responderElement = document.querySelector(".responder");
const jogarElement = document.querySelector(".jogar");

function escolherFraseDoSilvio() {
  const opcoes = [
    "Posso perguntar",
    "Você está certo disso",
    "Por sua conta e risco",
  ];
  const indexAleatorio = Math.floor(Math.random() * opcoes.length);

  return opcoes[indexAleatorio];
}

function reiniciarJogo() {
  jogarElement.classList.remove("show");
  indicePerguntaAtual = 0;
  alternativasElement.classList.remove("desativado");
  renderizarPergunta(indicePerguntaAtual);
}

function renderizarPergunta(indicePergunta) {
  const perguntaAtual = dados[indicePergunta];

  // Atualizando o conteúdo HTML
  perguntaElement.textContent = perguntaAtual.pergunta;
  alternativasElement.innerHTML = ""; // Limpando as alternativas anteriores

  perguntaAtual.alternativas.forEach((alternativa, index) => {
    const li = document.createElement("li");
    li.classList.add("alternativa");
    li.innerHTML = `<span class="detalhe">${index + 1}</span> ${alternativa}`;
    alternativasElement.appendChild(li);
  });

  const alternativas = document.querySelectorAll(".alternativa");

  // Adiciona um event listener para cada alternativa
  alternativas.forEach((alternativa) => {
    alternativa.addEventListener("click", () => {
      // Remove a classe 'selecionada' de todas as alternativas
      alternativas.forEach((alternativa) => {
        alternativa.classList.remove("selecionada");
      });

      // Adiciona a classe 'selecionada' à alternativa clicada
      alternativa.classList.add("selecionada");
      responderElement.classList.add("show");
      responderElement.innerHTML = `${escolherFraseDoSilvio()}?`;
    });
  });

  valorElement.textContent = perguntaAtual.valor;
}

let indicePerguntaAtual = 0; // Índice da pergunta atual na base de dados
renderizarPergunta(indicePerguntaAtual);

responderElement.addEventListener("click", () => {
  // Lógica para verificar a resposta (implemente aqui)

  const respostaSelecionada = document.querySelector(".selecionada");
  if (respostaSelecionada) {
    const detalhe = respostaSelecionada.querySelector(".detalhe");
    const indexRespostaSelecionada =
      parseInt(detalhe.textContent.trim(), 10) - 1;
    responderElement.classList.remove("show");

    if (indexRespostaSelecionada === dados[indicePerguntaAtual].resposta) {
      const quantidadeDePerguntas = dados.length;

      alert(`Parabéns! Você ganhou R$${dados[indicePerguntaAtual].valor}!`);

      // Carregando a próxima pergunta
      if (indicePerguntaAtual < quantidadeDePerguntas - 1) {
        indicePerguntaAtual++; // Passa para a próxima pergunta
        renderizarPergunta(indicePerguntaAtual);
      } else {
        alert("GANHÔ");
        reiniciarJogo();
      }
    } else {
      const indiceRespostaCorreta = dados[indicePerguntaAtual].resposta;
      const stringRespostaCorreta =
        dados[indicePerguntaAtual].alternativas[indiceRespostaCorreta];

      jogarElement.classList.add("show");
      alternativasElement.classList.add("desativado");

      alert(
        `A resposta correta era ${stringRespostaCorreta} 
        Que pena! Você PERDEU TUDO.`
      );
    }
  }
});

jogarElement.addEventListener("click", () => {
  reiniciarJogo();
});

window.onload = () => {
  renderizarPergunta(indicePerguntaAtual);
};
