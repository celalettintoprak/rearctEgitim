// CALLBACK FUNCTIONS / ASYNC-AWAIT

// setTimeout(() => {
//   console.log("Merhaba ben 5000 ms sonra çalışacağım.");
// }, 5000);

// setInterval(() => {
//   console.log("Merhaba, ben her saniye çalışacağım.");
// }, 1000);

// const sayHi = (cb) => {
//   cb();
// };

// sayHi(() => {
//   console.log("Hello");
// });

import fetch from "node-fetch";

// Kod blokları hiyerarşiye göre çalışır.
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((data) => data.json())
//   .then((user) => {
//     console.log("User 1 yüklendi! ", user);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((post) => {
//         console.log("Post 1 yüklendi!", post);
//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//           .then((data) => data.json())
//           .then((user) => console.log("User 2 yüklendi! ", user));
//       });
//   });

// Kod blokları yazıldığı sıraya göre çalışır.
// async function getData() {
//   const user1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/users/1")
//   ).json();

//   const user2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/users/2")
//   ).json();

//   const user3 = await (
//     await fetch("https://jsonplaceholder.typicode.com/users/3")
//   ).json();

//   console.log(user1);
//   console.log(user2);
//   console.log(user3);
// }

// getData();

// async ve await yapısını anonim foknsiyon şeklinde oluşturma
// .json() ifadesinden dolayı içeride tekrar await gerekmekte
// (async () => {
//   const user1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/users/1")
//   ).json();

//   const user2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/users/2")
//   ).json();

//   const user3 = await (
//     await fetch("https://jsonplaceholder.typicode.com/users/3")
//   ).json();

//   console.log("User 1", user1);
//   console.log("User 2", user2);
//   console.log("User 3", user3);
// })();

// PROMISES
import axios from "axios";

// (async () => {
//   const { data: user1 } = await axios(
//     "https://jsonplaceholder.typicode.com/users/1"
//   );

//   const { data: user2 } = await axios(
//     "https://jsonplaceholder.typicode.com/users/2"
//   );

//   const { data: user3 } = await axios(
//     "https://jsonplaceholder.typicode.com/users/3"
//   );

//   console.log("User 1", user1);
//   console.log("User 2", user2);
//   console.log("User 3", user3);
// })();

// resolve-reject yapısı ile birlikte promise
// const getComments = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Comments");

//     resolve("Bu parametre than'e düşmekte");
//   });
// };

// getComments()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// -----------------------------------------

// const getComments = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number === 1) {
//       resolve("Bu parametre ile than çalışmakta.");
//     }
//     reject("Bu parametre ile catch çalışmakta.");
//   });
// };

// getComments(2)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// -----------------------------------------

// Asenkron bağımsız olarak çalışan iki fonksiyon tanımı

// await daima async bir fonksiyonla kullanılmalı
// bu yüzden Promise içindeki callback'e async eklenir
const getUser = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );
    // resolve(data);
    reject("Bir sorun oluştu! User okunamadı.");
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );
    resolve(data);
    // reject("Bir sorun oluştu! Post okunamadı.");
  });
};

// Bu bölümde iki fonksiyon asenkron çalışır
// getUser(1)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// getPost(1)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// Bu bölümde iki fonksiyon sıralı olarak çalışır
// (async () => {
//   await getUser(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));

//   await getPost(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
// })();

// then ve catch ifadelerini kullanmamak için;
// (async () => {
//   try {
//     const user1 = await getUser(1);
//     const post1 = await getPost(1);

//     console.log(user1);
//     console.log(post1);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// Sıralı olarak birden fazla Promise çalıştırmak için
Promise.all([getUser(1), getPost(1)])
  .then(console.log)
  .catch(console.log);
