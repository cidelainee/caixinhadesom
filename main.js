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
listaDeTeclas[0].onclick =tocaSom;

let contador=0;
for (let contador = 0; contador <listaDeTeclas.length; contador++) { 
  const tecla =listaDeTecla[contador];
 const efeito = tecla.classList[1];
const idAudio = `#som_${efeito}`;
tecla.onclick = function () {
 tocaSom(idAudio);
}
tecla.onkeydown= function(){
  tecla.classList.add('ativa');
}
    }tecla.onkeydown= function()
  tecla.classList.remove('ativa');


