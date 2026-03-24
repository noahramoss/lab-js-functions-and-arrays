// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
  // return Math.max(a,b); librería math para calcular el máximo de dos números
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  /**
   * Creamos la variable donde vamos a guardar la palabra más larga
   * Recorremos el array
   * Comparamos la longitud de la palabra, si es mayor la guardamos en la variable
   * Finalmente devolvemos la variable donde se encuentra la palabra más larga
   */
  let result = null;
  for (let i = 0; i < words.length; i++) {
    // if(i==0){
    //     result = words[i];
    // }else{
    //     if(words[i].length > result.length){
    //         result = words[i];
    //     }
    // }
    if (i == 0) result = words[i];
    else if (words[i].length > result.length) result = words[i];
  }
  return result;
  /** OTRA SOLUCIÓN
   * if(!words.length) return null;
   * let longest = words[0];
   * for (let i = 1; i < words.length; i++) {
   *    if(words[i].length > longest.length) longest= words[i];
   * }
   * return longest;
   * 
   * PARA REDUCIRLO MAS
   * if(!words.length) return null;
   * return words.reduce((longest, current) => current.length > longest.length ? current : longest);
   */
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    /**
     * Creamos una variable en la que almacenar el resultado
     * Creamos un bucle para iterar por el arrar y en cada iteracion sumamos el resultado con el nuevo numero
     * Finalmente devolvemos el valor final del resultado
     */

    let suma = 0;
    for(let i = 0; i <numbers.length; i++){
        suma += numbers[i];
    }
    return suma;

    /**
     * OTRA SOLUCIÓN
     * return numbers.reduce((acc,num)=>acc + num, 0);
     */
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    
    let average = 0;
    
    return numbers2.length != 0 ? average=sumNumbers(numbers2)/numbers2.length : average;

    /**
     * OTRA SOLUCIÓN
     * if(!numbers.length) return 0;
     * return sumNumbers(numbers)/numbers.length;
     */
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(words2, word) {
    /**
     * Se pasa por parámetro un array y una palabra a buscar
     * Si array vacío, return null
     * Buscamos la palabra en el array, si la encontramos devolvemos true y sino false
     */
    let found = false;
    if (words2.length == 0) return null;
    words2.forEach(element => {
        if(element === word) found = true;
    });
    return found;

    /**
     * OTRA SOLUCIÓN (Recomendable usar while para búsquedas)
     * 
     * if(!words.length)return null;
     * let index = 0;
     * while (index < words.length){
     *  if(words[i] === word) return true;
     *  index++;
     * }
     * return false;
     *  
     * USANDO ARRAY METHODS
     * if(!words.length)return null;
     * return words.includes(word); //Devuelve true si la palabra word está en words, sino false
     */
}
