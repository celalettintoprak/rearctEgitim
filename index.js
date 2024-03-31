// console.log("Hello Node");

// var slugify = require("slugify"); ES6 öncesi import biçimi
import slugify from "slugify"; // ES6 import: package.json'a "type":"module" eklenir

// import biçimlerinden biri
// import topla from "./my-module.js";

// default olarak export edilen fonksiyon süslü parantez içine alınmaz
import hello, { topla, cikar, text, user, users } from "./my-module.js";

const title = slugify("some string and Lorem Ipsum", "_");
console.log(title);

console.log(topla(2, 4));
console.log(cikar(6, 5));
hello("Celalettin");
console.log(text);

console.log(user);
console.log(users);
