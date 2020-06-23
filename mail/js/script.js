/*JSNACK 4
Al click su un bottone, il programma genera un numero casuale tra 1 e 10. Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari.*/
var mail = ["ciao@gmail.com","ciao1@gmail.com", "ciao2@gmail.com", "ciao3@gmail.com"];
console.log(mail);
var accediBtn = document.getElementById('accedi');
var registratiBtn = document.getElementById('registrati');
var annullaBtn = document.getElementById('annulla');


registratiBtn.addEventListener ("click" , function () {
  var nuovaMail = document.getElementById('nuovaMail').value;
  if (nuovaMail != "") {
    mail.push( nuovaMail);
  }
  console.log(mail);
  document.getElementById('nuovaMail').value = "";
});


accediBtn.addEventListener ("click" , function () {
  var mailAccesso = document.getElementById('mailAccesso').value;
  var j = 0;
  for (var i = 0; i < mail.length; i++) {
    if (mail[i]== mailAccesso) {
      console.log("la mail esiste nell'array");
      document.getElementById('nonesiste').innerHTML = "Perfetto!!";
      document.getElementById('mailAccesso').value = "";
    }else {
      j++;
    }
  }
  if ( j == mail.length) {
    document.getElementById('nonesiste').innerHTML = "La mail che hai inserito non esiste, registrati prima.";
  }
});


annullaBtn.addEventListener ("click" , function () {
  document.getElementById('nonesiste').innerHTML = "";
  document.getElementById('mailAccesso').value = "";
});
