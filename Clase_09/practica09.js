// Codifique un programa que verifique si una para es un palindromo.

//Input 
const word = "reconocer";
let wordReverse = "";
const wordLength = word.length;

// Output Log
// --> La palabra ${word} SI es un palindromo.
// --> La palabra ${word} NO es un palindromo.


for (let letra = wordLength -1; letra >= 0 /* >= mayor o igual a 0 */ ; letra--) {
    wordReverse = wordReverse + word.charAt(letra);
}
    console.log(wordReverse);
if (word === wordReverse) {
    console.log (`La palabra ${word} SI es un palindromo.`);
} else {
    console.log (`La palabra ${word} NO es un palindromo.`);
} 