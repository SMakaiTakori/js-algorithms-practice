/* Write a function that properly extracts a "Product ID" from a URL. This ID is encoded in the URL in the following way:
 
It immediately follows -p-
It is terminated with -
Your function should return a string.
 
For example, given the following URL example.com/product-p-8099-index.html, your function should return '8099', as it satisfies the above rules. Given example.com/products/gift-p-door801933-edit.html, your function should return 'door801933'. */
 
//split on -p- -> gives two arrays
//split second array on dash, want first item of split
 
/* "Hello world!".split("-") // ["Hello", "world!"]

