
const anoAtualElemento = document.getElementById("anoatual");
const anoAtual = new Date().getFullYear();
anoAtualElemento.textContent = anoAtual;

const ultimaModificacaoElemento = document.getElementById("ultimaModificacao");
ultimaModificacaoElemento.textContent = document.lastModified;