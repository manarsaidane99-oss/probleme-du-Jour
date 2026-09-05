
// Créer une classe Commande

// Les commandes doivent avoir les propriétés suivantes :
// - Un numéro de commande
// - Un tableau contenant tous les plats
// - Nombre de plats prêts
// - Nombre de plats en attente
// - Le prix total de la commande
// - Un état indiquant si la commande est payée (true ou false)
class commande{

 constructor(numero,plats,PlatsPrets,platsAttente,payee){
  this.numero=numero
  this.plats=plats
  this.PlatsPrets=PlatsPrets
  this.platsAttente=platsAttente
  this.payee=payee

 }



}

// Créer une autre classe appelée Plat

// Chaque Plat doit avoir plusieurs propriétés :
// - Nom
// - Prix
// - Quantité
// - Prêt (true ou false)

// Chaque Commande doit avoir quelques méthodes :

// .ajouter(plat)
// → doit ajouter un plat à la commande.
// → augmenter le nombre de plats en attente.

// .preparerPlat(nom)
// → doit rechercher le plat grâce à son nom.
// → s'il existe et qu'il n'est pas encore prêt,
//    le marquer comme prêt.
// → augmenter le nombre de plats prêts.
// → diminuer le nombre de plats en attente.

// .calculerTotal()
// → doit calculer le prix total de la commande.
// → le total d'un plat est : prix × quantité.
// → enregistrer le résultat dans la propriété "total".

// .payer()
// → doit vérifier que tous les plats sont prêts.
// → si ce n'est pas le cas, retourner
//    "Impossible de payer : tous les plats ne sont pas prêts."
// → sinon,
//    calculer le total,
//    marquer la commande comme payée,
//    retourner "Paiement effectué."

class Plat{

 constructor(nom,prix,quantite,pret){
  this.nom=nom
  this.prix=prix
  this.quantite=quantite
  this.pret=pret

 }
 ajouter(plat){
    this.plats.push(plat)
    this.platsAttente++

 }
 preparerPlat(nom){
  for(let i=0;i<plats.length;i++){
    if(this.plats[i].nom===nom  && this.plats[i].pret===false){
      this.plats[i].pret===true
      this.PlatsPrets++
      this.platsAttente--

    }
    return "plat est pret"
  }

 }
 calculerTotal(){
  let total
  for(let i=0;i<plats.length;i++){
    total+=this.plats[i].prix*this.plats[i].quantite

  }

  
  return total
 }


 Payer() {
  if (this.platsAttente>0){
    return "Impossible de payer : tous les plats ne sont pas prêts."
  }
  calculerTotal()
  this.payee=true
  return "Paiement effectué."
  
}

}
let commande1= new Commande(1,[],0,0,0,false)
let pizza=new Plat("Pizza", 20, 2, false)
let couscous=new Plat("couscous", 10, 1, false)
console.log(commande1.ajouter(couscous))
console.log(commande1.ajouter(pizza))
console.log(commande1.preparerPlat("Pizza"))
console.log(commande1.preparerPlat("couscous"))
console.log(commande1.calculerTotal())
console.log(commande1.Payer())
