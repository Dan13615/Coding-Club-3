const color = (tab) =>
{
  let result = ""; 
  for (let i = 0; i < 5; i++) 
  { 
    result += `la couleur ${tab[i]} à l index ${i} `; 
    if (i !== 5 - 1) 
    {
      result += "\n";
    } 
  } 
  return (result); 
} 
console.log(color(["rouge","bleu","jaune","vert","violet"]));