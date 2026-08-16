 // 1 - Écris une fonction nommée removeElement qui prend un tableau et une valeur
 // en paramètres et retourne un nouveau tableau avec la première occurrence
 // de cette valeur supprimée. Si la valeur n’est pas trouvée, retourne le tableau original.
function removeElement(t,valeur){
  let i=t.indexOf(valeur)
  if(i===-1){
    return t
  }
  let v=t.slice(0,i).concat(t.slice(i+1))
  return v
}
console.log(removeElement([1,2,3],2))



 // 2 - Écris une fonction appelée reverseStr qui prend une chaîne de caractères
 // en entrée et retourne l’inverse de chaque lettre suivie d’un nombre
 // en commençant par zéro (à résoudre avec une boucle while).
 // exemple : reverseStr('hello'); ==> "o0l1l2e3h4"
function reverseStr(ch){
  let ch1=""
  for(let i=ch.length-1;i>=0;i--){
    ch1+=ch[i]+String(ch.length-1-i)
  }
  return ch1
}
console.log(reverseStr("hello"))


 // 3- Écris une fonction nommée objKey qui prend un objet en paramètre
 //  et retourne un tableau contenant les clés de l’objet.
 // objKey({name:'ahmed', age:20}) ==> ['name','age']
function objKey(obj){
return Object.keys(obj)
}
console.log(objKey({name:'ahmed', age:20}))

// 4- Prends un tableau et supprime chaque deuxième élément de ce tableau.
// Garde toujours le premier élément et commence à supprimer à partir de l’élément suivant.
// Exemple :
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther(myArr) ==> ['Keep', 'Keep', 'Keep']
function supprimer(t){
  let v=[]
 for(let i=0;i<t.length;i+=2){
  v.push(t[i])
 }
 return v
}
console.log(supprimer(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']))