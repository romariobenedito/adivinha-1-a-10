function jogoDaAdivinhacao() {
  // Gerar um número aleatório entre 1 e 10
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

  // Pedir ao usuário que adivinhe o número
  let palpite = prompt("Digite um número de 1 a 10:");

  // Verificar se o palpite está correto e dar feedback
  while (palpite < 1 || palpite > 10 || isNaN(palpite)) {
    palpite = prompt("Número inválido! Digite um número de 1 a 10:");
  }

  if (palpite == numeroAleatorio) {
    alert("Parabéns! Você acertou.");
  } else {
    alert("Que pena! O número correto era " + numeroAleatorio + ".");
  }

  // Perguntar ao usuário se deseja jogar novamente
  let jogarNovamente = confirm("Deseja jogar novamente?");

  if (jogarNovamente) {
    jogoDaAdivinhacao();
  }
}

// Iniciar o jogo pela primeira vez
jogoDaAdivinhacao();
