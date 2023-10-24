//declaração/criando função tocaSomPom
function tocaSom(){
  document.querySelector(idElementoAudio).play()
document.querySelector(idElementoAudio).onclick = tocaSom;
}

//chamado/invocado a função tocaSomPompelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSom;

//referência contante listaDeTecla, buscando todos os botoẽs
const listaDeTeclas = document.querySelector('.tecla');

//chamando a função tocaSomPom pela item "0" da listaDeTecla
listaDeTeclas[0].onclick = tocaSom;

let contador=0;
while (contador < listaDeTeclas.length) {
 const efeito = listaDeTeclas[contador].clasLit[1];
 const idAudio = "#som_"+efeito;
  listaDeTeclas[contador].onclick = function () {
 tocaSom(Audio);
};
contador = contador + 1;
console.log(contador);
}

