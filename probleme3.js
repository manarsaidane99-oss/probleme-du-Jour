

// 1- Écris une fonction factorielleN qui calcule la factorielle de n avec une boucle while.
function factorielleN(n){
  let f=1
 while(n>1) {
  f=f*n
  n--
 }
 return f
}
console.log(factorielleN(3))


// 2- Écris une fonction afficheMultiplesDe3 qui prend un nombre n et affiche tous les multiples de 3 de 0 jusqu’à n.
function afficheMultiplesDe3(n) {
  let i=0
  while(i<=n) {
    if(i%3===0) {
      console.log(i)
      
    }
     i++
  }
}
console.log(afficheMultiplesDe3(15))

// 3- Crée une fonction qui prend un nombre et affiche "Bonjour" ce nombre de fois avec while.
function affiche(n){
  while(n>0) {
    console.log("bonjour")
    n--
  }
}
console.log(affiche(3))

// 4- Écris une fonction compteVoyelles qui prend une chaîne de caractères et compte le nombre de voyelles avec une boucle while.
function compteVoyelles(string){
  let i=0,c=0
  
  while(i<string.length) {
    if(string[i] === "a" ||string[i] === "e" ||string[i] === "i" ||string[i] === "o" ||string[i] === "u" ||string[i] === "y"){
      c++
    
  }
  i++
}
return c}
console.log(compteVoyelles("manar"))
