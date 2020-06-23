/*JSNACK 4
Al click su un bottone, il programma genera un numero casuale tra 1 e 10. Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari.*/

var printBtn = document.getElementById('lancia');

printBtn.addEventListener ("click" , function () {
  var dado1;
  var dado2;
  var j = 0;
  var k = 0;
for (var i = 0; i < 3; i++) {
  dado1 = Math.floor(Math.random() * (6)) + 1;
  dado2 = Math.floor(Math.random() * (6)) + 1;

  if (dado1 > dado2) {
    j++;
  } else if (dado1 < dado2) {
    k++;
  }
}
if (j > k) {
  console.log("vince dado 1");
} else if (k > j) {
  console.log("vince dado 2");
} else {
  console.log("pareggio");
}
});
