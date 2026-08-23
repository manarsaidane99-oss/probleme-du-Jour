// 1 - Écrire une fonction qui prend un tableau de chaînes et retourne un tableau contenant la longueur de chaque chaîne.
function ex1(t){
  let v=[]
  for(let i=0;i<t.length;i++){
   v.push(t[i].length)
  }
  return v
}
console.log(ex1(["manar","mana","m"]))
// 2 - Écrire une fonction qui prend un tableau de chaînes et une lettre, et retourne un tableau contenant uniquement les chaînes qui contiennent cette lettre.
function ex2(t,c){
  let v=[]
  for(let i=0;i<t.length;i++){
    j=0
    while(j<t[i].length){
       if(t[i][j]===c){
        v.push(t[i])
        j=t[i].length
    }
    else{
      j++
    }
  }
}
    return v
}
console.log(ex2(["manar","mana","m"],"a"))

// 3 -Écrire une fonction qui prend un tableau d’objets représentant des étudiants et retourne un tableau ne contenant que les noms.

function ex3(etudiants){
  let v=[]
  for(let i=0;i<etudiants.length;i++){
    v.push(etudiants[i].nom)
  }
  return v
}
let etudiants=[
  {nom:"saidane",prenom:"manar"},
  {nom:"brown",prenom:"anne"}
]
console.log(ex3(etudiants))
//4-Écrire une fonction qui prend un tableau de tableaux de nombres et retourne la somme de tous les nombres.
function ex4(nombres){
 let s=0
 for(let i=0;i<nombres.length;i++){
  for(let j=0;j<nombres[i].length;j++){
 s+=nombres[i][j]
  }
 }
 return s
}
console.log(ex4([[1,2],[1,2],[1,2]]))
  
