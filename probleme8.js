
// J’ai un seau de paresseux. Chaque paresseux est spécial et possède un nom long.
// Ci-dessous se trouve un tableau appelé seauDeParesseux, contenant toutes les informations sur mes paresseux.
var seauDeParesseux = [
  { nom: { prenom: "Poilu", deuxiemePrenom: "Dangereux", nomDeFamille: "Assassin" }, age: 2 },
  { nom: { prenom: "Lent", nomDeFamille: "Citrouille" }, age: 3 },
  { nom: { prenom: "Balle", deuxiemePrenom: "Blindé", nomDeFamille: "Paresseux" }, age: 4 },
  { nom: { prenom: "Bisou", deuxiemePrenom: "Bisou", nomDeFamille: "Chignon" }, age: 5 },
  { nom: { prenom: "Jungle", nomDeFamille: "Duveteux" }, age: 2 },
];


// a- écrire une fonction fullName qui prend en entrée un index et un tableau
// et retourne le nom complet sous forme de chaîne de caractères
// nomComplet(seauDeParesseux,0) //==> "Poilu Dangereux Assassin"
function nomComplet(tableau, position) {
  let nomCopm=tableau[position].nom.prenom+" "+tableau[position].nom.deuxiemePrenom+" "+tableau[position].nom.nomDeFamille
  return nomCopm
}
console.log(nomComplet(seauDeParesseux,0))

// b- écrire une fonction qui prend un tableau d’objets (comme seauDeParesseux)
// et retourne le paresseux (doit retourner un objet)
// qui possède le nom le plus long (prénom, deuxième prénom & nom).
// Remarque : il peut être utile d’utiliser la fonction nomComplet,
// plusLongNom(seauDeParesseux);
// => { nom: { prenom: "Poilu", deuxiemePrenom: "Dangereux", nomDeFamille: "Assassin" }, age: 2 }
function plusLongNom(seauDeParesseux) {
  let long=0
  let nomLong
  for(let i=0;i<seauDeParesseux.length;i++){
     if (nomComplet(seauDeParesseux,i).length>long){
         long=nomComplet(seauDeParesseux,i).length
         nomLong=seauDeParesseux[i]
     }
  }
  return nomLong
}
console.log(plusLongNom(seauDeParesseux))

// - créer un modèle de données pour représenter vos camarades de classe
// - réfléchir aux différents attributs de vos camarades : qu’ont-ils tous en commun ?
// - créer une fonction factory (fonction d'usine).
// - créer un tableau pour contenir les camarades que vous avez créés.
// - écrire une fonction appelée afficherAmi qui prend un camarade en argument
//   et retourne les informations importantes de manière lisible.
// - écrire une fonction appelée ajouterAmi qui prend un camarade en argument
//   et l’ajoute au tableau camarades.
// - calculer le nombre d’amis masculins que contient votre classe
//   en écrivant une fonction appelée nombredeMale.
// - écrire une fonction recherche qui, étant donné une requête (query)
//   et un tableau de camarades ,
//   cherche dans le tableau des camarades un camarade « correspondant ».
function camarade(prenom,nom,age,genre){
  return {prenom:prenom,
    nom:nom,
    age:age,
    genre:genre}
}
console.log(camarade("manar","saidane",19,"female"))
let camarades=[
  {prenom:"manar",nom:"saidane",age:20,genre:"female"},
  {prenom:"layla",nom:"a",age:20,genre:"female"},
   {prenom:"sami",nom:"sa",age:20,genre:"male"},
   {prenom:"ahmed",nom:"ah",age:20,genre:"male"}
]
function afficherAmi(camarade){
  return "prenom:"+camarade.prenom+" "+"nom:"+camarade.nom+" "+"age:"+camarade.age+" "+"genre:"+camarade.genre
}
console.log(afficherAmi( {prenom:"manar",nom:"saidane",age:20,genre:"female"}))
function ajouterAmi(camarade){
  camarades.push(camarade)
  return camarades
}
console.log(ajouterAmi({prenom:"lina",nom:"lin",age:20,genre:"female"}))
function nombredeMale(t){
  nbr=0
  for (let i = 0; i < t.length; i++) {
    if(t[i].genre==="male"){
      nbr++
    }
  }
  return nbr
}
console.log(nombredeMale(camarades))
function recherche(prenom,t){
  for (let i =0; i < t.length; i++) {
    if(t[i].prenom===prenom){
      return t[i]
    }
      
    }
    return "aucun camarade trouvé"
}
console.log(recherche("lina",camarades))
console.log(recherche("raniya",camarades))