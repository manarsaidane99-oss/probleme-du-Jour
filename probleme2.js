// 1- Crée une fonction qui prend deux nombres et retourne :
// "égaux" s’ils sont identiques
// "différents" sinon
function nombre(x,y) {
  if (x===y){
    return "sont egaux"
  }
  return "differentes"
}
console.log(nombre(5,6));
console.log(nombre(6,6));


// 2- Crée une fonction qui prend une chaîne et retourne true
// si elle est vide, sinon false

function chVide(string) {

    return (string==="")
}
console.log(chVide(""));
console.log(chVide("manar"));



// 3- Crée une fonction qui prend une vitesse et retourne :
// "lent" si inférieure à 30
// "normal" si entre 30 et 90
// "rapide" si supérieure à 90

function vitesse (v){
  if ( v>=0 && v<30 ) {
    return "lent"
  }
  else if (v>=30 && v<90) {
    return "normal"
  }
  else if (v>=90 ){
    return "rapide"
  }
  else {
    return "erreur"
  }
}
console.log(vitesse(20));
console.log(vitesse(80));
console.log(vitesse(150));
console.log(vitesse(-111));




// 4- Crée une fonction qui prend un nombre et retourne true
// s’il est divisible par 2 OU par 3
// MAIS PAS par les deux en même temps
function divisible( x) {
  if ((x%2===0 && x%3!==0)|| (x%3===0 && x%2!==0)){
    return true
  }
  else {
    return false
  }
}
console.log(divisible(9));
console.log(divisible(4));
console.log(divisible(6));
