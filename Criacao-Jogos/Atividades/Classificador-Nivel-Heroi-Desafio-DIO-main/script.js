var nome = document.getElementById('nomeHeroi');
var exp = document.querySelector('#expHeroi');
var botao = document.getElementById('botao');
var nivel="";

function informaResultado(nivel){

  var seccao = document.querySelector('#container');
  var div = document.createElement("div");
  div.setAttribute("Class", "resultado");
  div.innerHTML = "O Heroi " + nome.value + " está no nível " + nivel;
  seccao.appendChild(div);
}

function verificador(){
  exp = parseInt(exp.value);
  if (exp <= 1000) {
    nivel = "Ferro";
  } else if (exp <= 2000) {
    nivel = "Bronze";
  } else if (exp <= 5000) {
    nivel = "Prata";
  } else if (exp <= 7000) {
    nivel = "Ouro";
  } else if (exp <= 8000) {
    nivel = "Platina";
  } else if (exp <= 9000) {
    nivel = "Ascendente";
  } else if (exp <= 10000) {
    nivel = "Imortal";  
  } else {
    nivel = "Raridade";
  }

  informaResultado(nivel);

}

botao.addEventListener("click", function(){
  verificador()
});