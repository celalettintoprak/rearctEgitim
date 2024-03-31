// geleneksel fonksiyon tanımlama biçimi
/*
function topla(a, b) {
  return a + b;
}
*/

// fonksiyonları aşağıdaki gibi ayrı ayrı da export edebiliriz
// export const hello = () => console.log("hello");
// export const topla = (a, b) => a + b;
// export const cikar = (a, b) => a - b;

// const hello = () => console.log("hello");
// const hello = (name) => console.log("hello " + name);
const hello = (name) => console.log(`hello ${name}`);
const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;
const text = "Text";

const user = {
  name: "Celalettin",
  surname: "Toprak",
};

const users = [
  {
    name: "Ahmet",
    surname: "Tarık",
  },
  {
    name: "Mehmet",
    surname: "Dinçer",
  },
];

// export biçimlerinden biri
// export default topla;
export { topla, cikar, text, user, users };
export default hello;
