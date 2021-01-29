/* Write a function that properly extracts a "Product ID" from a URL. This ID is encoded in the URL in the following way:
 
It immediately follows -p-
It is terminated with -
Your function should return a string.
 
For example, given the following URL example.com/product-p-8099-index.html, your function should return '8099', as it satisfies the above rules. Given example.com/products/gift-p-door801933-edit.html, your function should return 'door801933'. */

//split on -p- -> gives two arrays
//split second array on dash, want first item of split

/* "Hello world!".split("-") // ["Hello", "world!"]*/

const extractProductId = (url) => url.split("-p-")[1].split("-")[0];

// console.log(extractProductId("example.com/product-p-8099-index.html"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Given a letter, return its position in the alphabet. */
/* For example, given 'a', return 1, given 'y', return '25' */

function getLetterPosition(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabet.indexOf(letter.toLowerCase()) + 1;
}
// getLetterPosition("a"); //1
// getLetterPosition("d"); //4 */

// console.log(getLetterPosition("a"));
// console.log(getLetterPosition("A"));
// console.log(getLetterPosition("d"));
