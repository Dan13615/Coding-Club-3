const personnage = {
  nom:"DuTrou",
  prenom:"Matt",
  sexe:"Cobra",
  age:325/88**9+66*8**9,

  tenue:["lunette de lune","Déguisement de cobra rose","tongue gauche multicolore","botte de pluie droit transparente","calbut superman","cape taille enfant"],

  armure:"armure divine en Nokia 3310",

  sac_a_dos:["Cat Launcher 3000","Potion d'invisbilité","Clé des toilettes des filles à Epitech","PC à 56 centimes"],

  description() {
    return (`Je suis ${this.prenom} ${this.nom}, j'ai ${this.age}. Je porte des ${this.tenue} mais lors d'une bataille contre mes harceleur de 3ème année je met mon ${this.armure}. Dans mon inventaire j'ai ${this.sac_a_dos}`)
  },

}
console.log(personnage.description());

function main(){
  sac_a_dos.sort();
  console.log(personnage.description());
}
