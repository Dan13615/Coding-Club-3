let couleur = ["bleu","rouge","jaune","vert"];
let color = ["bleu","rouge","noir","jaune","vert"]; 
let len = color.lenght;

for (let col = 0; col <= len ; col++)
{ 
  switch (col)
  { 
    case 0: 
      console.log(`La couleur à l index ${col} est : ${couleur[0]} `);
      break;

    case 1: 
      console.log(`La couleur à l index ${col} est : ${couleur[1]} `); 
      break;

    case 2: 
      console.log(`La couleur à l index ${col} est : ${couleur[2]} `); 
      break; 
    
    case 3: 
      console.log(`La couleur à l index ${col} est : ${couleur[3]} `); 
      break; 

    default: console.log(`La couleur ${col} n était pas attendue `);
  }
}
