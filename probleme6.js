// 1-Écris une fonction removeByIndex qui supprime l’élément à l’index donné et retourne le nouveau tableau.

function removeByIndexf(t,i){
  let v=[...t]
  v.splice(i,1)
  return v
}
console.log(removeByIndexf([1,2,3],1))


// 2-Écris une fonction pick qui prend un objet et un tableau de clés, et retourne un nouvel objet avec seulement ces clés.

function pick(o,t){
  let o1={}
  for(let i=0;i<t.length;i++){
    if (o.hasOwnProperty(t[i])){
       o1[t[i]]=o[t[i]]
    }
  }
  return o1
}
console.log(pick({a:"1",b:"2",c:"3"},['a','c']))


//3- Écris une fonction mostFrequent qui prend un tableau et retourne la valeur qui apparaît le plus souvent dans un tableau.
function mostFrequent(t){
   let v= t[0]
  let max=0
  for (let i =0; i<t.length;i++) {
        let c=0
        for (let j=0;j<t.length;j++) {
            if (t[i]===t[j]) {
                c++
          }
        }
        if (c>max) {
            max=c
            v=t[i]
     }
  
}
return v}
console.log(mostFrequent([1,1,1,2,2,3]))