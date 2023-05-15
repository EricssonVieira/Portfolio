const meuTexto = document.getElementById('meu-texto')
const textoCompleto = meuTexto.innerText
meuTexto.innerText = 'Sejam Bem vindo ao meu portfolio'
function exibirTextoGradualmente(texto, indice) {
  if (indice <= texto.length) {
    meuTexto.innerText = texto.substr(0, indice)
    setTimeout(() => exibirTextoGradualmente(texto, indice + 1), 50)
  }
}
