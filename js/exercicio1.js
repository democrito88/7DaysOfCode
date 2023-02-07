let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'
let mensagem = ["","",""];

if (numeroUm == stringUm) {
    mensagem[0] = 'As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes';
  console.log(mensagem[0])
} else {
    mensagem[0] = 'As variáveis numeroUm e stringUm não tem o mesmo valor'; 
  console.log(mensagem[0])
}

if (numeroTrinta == stringTrinta) {
    
    mensagem[1] = 'As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo';
    console.log(mensagem[1])
} else {
    mensagem[1] = 'As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo';
  console.log(mensagem[1])
}

if (numeroDez == stringDez) {
    mensagem[2] = 'As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes'; 
  console.log(mensagem[2])
} else {
    mensagem[2] = 'As variáveis numeroDez e stringDez não tem o mesmo valor';
  console.log(mensagem[2])
}

$(function(){
  $("#ulExercicio1").append('<li>'+mensagem[0]+'</li>');
  $("#ulExercicio1").append('<li>'+mensagem[1]+'</li>');
  $("#ulExercicio1").append('<li>'+mensagem[2]+'</li>');
});