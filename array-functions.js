const users = ["Mehmet", "Ahmet", "Murat"];

const users2 = [
  { name: "Name 1", age: 20 },
  { name: "Name 2", age: 10 },
  { name: "Name 3", age: 15 },
];

/*
  push      - mevcut array sonuna yeni bir eleman ekler
  map       - for loop gibi çalışır, tüm elemanları gezer
  find      - koşula uyan ilk elemanı döndürür, koşul sağlanmazsa undefined
  filter    - koşula uygun elemanları array olarak döndürür
  some      - elemanlardan biri koşula uyuyorsa true, yoksa false döndürür
  every     - elemanların tamamı koşula uyuyorsa true, yoksa false döndürür
  includes  - verilen değer array içinde mevcutsa true, yoksa false döndürür
*/

// push
users.push("Necati");
users.push("Hatice");

console.log(users);

// map
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

users2.map((user) => {
  console.log(user.name);
});

// find
const result = users2.find((user) => user.name === "Name 1" && user.age > 19);
console.log(result);

//fonksiyonun farklı bir yazılış biçimi
const result1 = users2.find(({ name, age }) => name === "Name 1" && age > 19);
console.log(result1);

// filter
const filtered = users2.filter((user) => user.age > 12);
console.log(filtered);

// some
const some = users2.some((item) => item.age === 11);
console.log(some);

// every
const every = users2.every((item) => item.age > 5);
console.log(every);

// includes
const meyveler = ["elma", "armut", "muz"];
const isIncluded = meyveler.includes("muz");
console.log(isIncluded);
