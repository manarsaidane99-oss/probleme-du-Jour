
//1 - Écrire une fonction qui prend un tableau de nombres et retourne un tableau où chaque nombre est augmenté de 10 % en utilisant map.
function nombreAugmente(nombres){
 return nombres.map( nombre => { return  (nombre+(nombre)/10) })
}
console.log(nombreAugmente([1000,900,200]))

// 2 - Écrire une fonction qui prend un tableau de phrases et retourne un tableau contenant le nombre de lettres de chaque phrase (sans compter les espaces) en utilisant foreach .
function nombreDeLettres(phrases){
  let res=[]
  phrases.forEach( phrase=>{
    let l=0
    for(let i=0;i<phrase.length;i++){
       if (phrase[i]!==" "){
        l++
       }
     

    }
     res.push(l)
  
  })
    return res
}
console.log(nombreDeLettres(["elle mange","c'est parti"]))
 

// 3 - Écrire une fonction qui prend un tableau de nombres et affiche la moyenne de tous les nombres en utilisant foreach .

function moyenne(nombres){
  let moy=0
  nombres.forEach( nombre=>{
    moy+=nombre
  
  
  })
    return moy/nombres.length
}
console.log(moyenne([900,100]))
// 4 - Écrire une fonction appelée agesEnMinutes qui
//  prend en paramètre un tableau d’objets et
//  retourne un nouveau tableau d’objets après avoir converti les âges de années en minutes
//  en utilisant map.
// 
//  var personnes = [{
//        nom: {
//              prenom: 'Majd',
//            secondPrenom: 'Eddin',
//      },
//       age: 30
//       }, {
//       nom: {
//             prenom: 'Fatima',
//             nomFamille: 'Himmamy'
//        },
//        age: 26
//        }, {
//        nom: {
//              prenom: 'Sahar',
//              secondPrenom: 'MHD'
//        },
//        age: 27
//        }, {
//        nom: {
//              prenom: 'Nour',
//              secondPrenom: 'Eddin',
//        },
//        age: 15
//        }, {
//        nom: {
//              prenom: 'Ahmad',
//              nomFamille: 'Awad'
//        },
//        age: 33
//  }];
// 

function ageMinute(personnes){
  
  return personnes.map(personne=>{
    
    return { nom:personne.nom,age:personne.age*365*24*60};
  })
 
}
console.log(ageMinute([{
       nom: {
              prenom: 'Majd',
            secondPrenom: 'Eddin',
      },
       age: 30
       }, {
       nom: {
             prenom: 'Fatima',
             nomFamille: 'Himmamy'
        },
        age: 26
        }, {
        nom: {
              prenom: 'Sahar',
              secondPrenom: 'MHD'
        },
        age: 27
        }, {
        nom: {
              prenom: 'Nour',
              secondPrenom: 'Eddin',
        },
        age: 15
       }, {
        nom: {
              prenom: 'Ahmad',
             nomFamille: 'Awad'
       },
        age: 33
}]))