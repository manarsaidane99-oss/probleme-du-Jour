/**
 * Trouve le premier élément qui apparaît un nombre pair de fois dans un tableau.
 * N'oublie pas de gérer les éléments avec plusieurs occurrences paires et retourne le premier.
 * Retourne null s'il n'y a aucun élément avec un nombre pair d'occurrences.
 * Exemple d'utilisation :
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); // 4
 */
function evenOccurrence (arr) {
  occ={}
  for(let i=0;i<arr.length;i++){
    let j=arr[i]
    if (occ[j]===undefined){
      occ[j]=1
    }else{
       occ[j]++
    }
    
  }
  for(let i=0;i<arr.length;i++){
    let j=arr[i]
    if (occ[j]%2===0){
      return j
    }
  }
}
 
console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]))
