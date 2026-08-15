
// 1- Écris une fonction puissanceQuiAffiche qui prend deux nombres base et puissance et affiche toutes les puissances de base de 1 à puissance.

function puissanceQuiAffiche (b,p) {
  for (let i=0;i<p;i++) {
    console.log(b**i)
  }
}
console.log(puissanceQuiAffiche(2,4))

// 2- Écris une fonction afficheDiviseurs qui prend un nombre n et affiche tous ses diviseurs.
function afficheDiviseurs(n){
  for (let i=1;i<n;i++){
    if (n%i===0){
      console.log(i)
    }
  }
}
console.log(afficheDiviseurs(12))

// 3- Écris une fonction afficheNombresImpaire qui prend un nombre n et affiche tous les nombres impairs de 1 à n.

function afficheNombresImpaire(n){
  for (let i=1;i<n;i++){
    if(i%2!==0){
      console.log(i)
    }
  }
}
console.log(afficheNombresImpaire(9))

// 4- Écris une fonction afficheMotInverse qui prend une chaîne de caractères et affiche les lettres dans l’ordre inverse.

function afficheMotInverse(ch) {

  for (let i=ch.length-1;i>=0;i--) {
    console.log(ch[i])
  }
}
console.log(afficheMotInverse("manar"))