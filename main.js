//declaração/criando função tocaSomPom
function tocaSomPom(){
  document.querySelector('#som_tecla_pom').play()
document.querySelector('.tecla_pom').onclick = tocaSomPom;
}

//chamado/invocado a função tocaSomPompelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//referência contante listaDeTecla, buscando todos os botoẽs
const listaDeTeclas = document.querySelector('.tecla');

//chamando a função tocaSomPom pela item "0" da listaDeTecla
listaDeTeclas[0].(onclick) = tocaSomPom;

let contador=0;
while (contador < 9) {
listaDeTeclas[contador].onclick = tocaSomPom;
contador = contador + 1;
console.log(contador);
}

