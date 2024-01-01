// queryselector == seletor de consulta

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';

// Para evitar a REPETIÇÃO DE CÓDIGO:

let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!')
    let palavraTentativa = tentativas > 1 ? 'temtativas' : 'tentativa'
    let mensagemtentativas = `Você descobtiu o Número Secreto com ${tentativas} ${palavraTentativa}`
    exibirTextoNaTela('p', mensagemtentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O Número Secreto é menor')
    } else {
      exibirTextoNaTela('p', 'O Número Secreto é MAIOR.')
    }
    tentativas++
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1)
}

function limparCampo() { 
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
