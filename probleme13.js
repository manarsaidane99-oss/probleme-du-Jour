/**
 * Déplace tous les zéros à la fin du tableau.
 * L'ordre des autres éléments doit rester inchangé.
 * Ne crée pas de zéros supplémentaires.
 * Exemple d'utilisation :
 * moveZeros([0, 4, 0, 7, 2, 0, 5])  // [4, 7, 2, 5, 0, 0, 0]
 */

function moveZeros(arr){
  let v=[]
  let zero=0
  arr.forEach( function(number){
      if(number!==0){
        v.push(number)
      }else{
        zero++
      }
  })
  for(let i=0;i<zero;i++){
      v.push(0)
  }
  return v
  
}
let arr=[0, 4, 0, 7, 2, 0, 5]
console.log(moveZeros(arr))
/**
 * Un tableau contient les nombres de 1 à n avec un seul nombre manquant.
 * Trouve et retourne le nombre manquant.
 * Exemple d'utilisation :
 * missingNumber([1, 2, 4, 5, 6])  // 3
 */

function missingNumber(arr){

  for(let i=1;i<=arr.length+1;i++)
{
  if (arr[i-1]!==i){
     return i
  }
}


}
console.log(missingNumber([1, 2, 4, 5, 6]))
