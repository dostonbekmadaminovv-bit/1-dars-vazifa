import { users } from "./data.js";
// // // let matem = {
// // //   floor: (num) => {
// // //     if (num > 0) {
// // //       return num - (num % 1);
// // //     } else {
// // //       return num - (num % 1) - 1;
// // //     }
// // //   },
// // // let matem = {
// // //   ceil: (num) => {
// // //     if (num > 0) {
// // //       return num - (num % 1) + 1;
// // //     } else {
// // //       return num - (num % 1);
// // //     }
// // //   },
// // // };
// // // let res = matem.ceil(11.8);
// // // console.log(res);
// // // let hisobla = {
// // //   round: (num) => {
// // //     let butun = num - (num % 1);
// // //     let qoldiq = Math.abs(num % 1);
// // //     if (qoldiq > 0.5) {
// // //       return butun;
// // //     } else {
// // //       return butun - 1;
// // //     }
// // //   },
// // // };
// // // let result = hisobla.round(11.4);
// // // console.log(result);
// // // console.log(Math.round(11.7));
// // //==================================
// // // let titleEl = document.getElementsByClassName("title");
// // // let titleEl2 = document.getElementsByTagName("h1");
// // // let textEl = document.getElementsByClassName("text");
// // // let h2El = document.getElementById("h2");
// // // // console.log(h2El);

// // // titleEl[0].textContent = "world2";
// // //===============================
// // const titleEl = document.getElementById("title");
// // const plusEl = document.getElementById("plus");
// // const minusEl = document.getElementById("minus");
// // const resetEl = document.getElementById("reset");

// // titleEl.style.color = "green";
// // plusEl.style.background = "blue";
// // plusEl.style.color = "white";
// // plusEl.style.borderRadius = "8px";
// // plusEl.style.border = "none";
// // //
// // minusEl.style.background = "red";
// // minusEl.style.color = "white";
// // minusEl.style.borderRadius = "8px";
// // minusEl.style.border = "none";
// // //
// // resetEl.style.background = "black";
// // resetEl.style.color = "white";
// // resetEl.style.borderRadius = "8px";
// // resetEl.style.border = "none";
// // window.plus = function () {
// //   //code
// //   titleEl.textContent = Number(titleEl.textContent) + 1;
// // };
// // window.minus = function () {
// //   //code
// //   titleEl.textContent = Number(titleEl.textContent) - 1;
// // };
// // window.reset = function () {
// //   //code
// //   titleEl.textContent = Number((titleEl.textContent = 0));
// // };
// //--------------------------------------------------------
// //--------------------------------------------------------
// ///////////////////////////   vazifa  \\\\\\\\\\\\\\\\\\\\\\\

// const users = [
//   {
//     id: 1,
//     name: "Ali Valiyev",
//     age: 22,
//     role: "admin",
//     isActive: true,
//     salary: 1200,
//   },
//   {
//     id: 2,
//     name: "Sardor Rahimiv",
//     age: 19,
//     role: "user",
//     isActive: false,
//     salary: 600,
//   },
// ];

// function addUser(newUser) {
//   if (!newUser.name?.trim() || !newUser.role?.trim()) {
//     return "name va role bo‘sh bo‘lmasligi kerak";
//   }

//   const id = users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1;

//   const user = { ...newUser, id };
//   users.push(user);
//   return user;
// }

// function readUsers(filterObj = {}) {
//   return users.filter((user) => {
//     if ("isActive" in filterObj && user.isActive !== filterObj.isActive) {
//       return false;
//     }
//     if (filterObj.role && user.role !== filterObj.role) {
//       return false;
//     }
//     return true;
//   });
// }

// function updateUser(id, updatedFields) {
//   const index = users.findIndex((user) => user.id === id);

//   if (index === -1) {
//     return "User topilmadi";
//   }

//   users[index] = { ...users[index], ...updatedFields, id };
//   return users[index];
// }

// function deleteUser(id) {
//   const user = users.find((user) => user.id === id);

//   if (!user) {
//     return "User topilmadi";
//   }

//   const index = users.findIndex((user) => user.id === id);
//   users.splice(index, 1);

//   return `User o‘chirildi: ${user.name}`;
// }

// console.log(
//   addUser({
//     name: "Madina Karimova",
//     age: 25,
//     role: "user",
//     isActive: true,
//     salary: 800,
//   }),
// );

// console.log(readUsers());
// console.log(readUsers({ isActive: true }));
// console.log(readUsers({ role: "admin" }));
// console.log(updateUser(2, { age: 20, isActive: true }));
// console.log(deleteUser(1));
///////////////////////////////////////
// function searchUsersByName(keyword) {
//   const qidiruvSozi = keyword.toLowerCase();

//   return users.filter((user) => user.name.toLowerCase().includes(qidiruvSozi));
// }

// function getUserStats() {
//   const jamiMaosh = users.reduce((sum, user) => sum + user.salary, 0);
//   const engKatta = users.reduce((oldest, user) =>
//     user.age > oldest.age ? user : oldest,
//   );

//   return {
//     totalUsers: users.length,
//     averageSalary: users.length ? jamiMaosh / users.length : 0,
//     oldestUser: users.length ? engKatta : null,
//     activeUsers: users.filter((user) => user.isActive).length,
//   };
// }

// function sortUsersBy(key, order = "asc") {
//   const yonalish = order === "desc" ? -1 : 1;

//   return [...users].sort((a, b) => {
//     if (a[key] < b[key]) return -1 * yonalish;
//     if (a[key] > b[key]) return 1 * yonalish;
//     return 0;
//   });
// }
// console.log(searchUsersByName("ali"));
// console.log(getUserStats());
// console.log(sortUsersBy("age", "asc"));
// console.log(sortUsersBy("salary", "desc"));
//////////////////////////////
// function addUser(newUser) {
//   if (!newUser.name?.trim() || !newUser.role?.trim()) {
//     return "name va role bo‘sh bo‘lmasligi kerak";
//   }

//   const id = users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1;

//   const user = {
//     ...newUser,
//     id,
//     isActive: newUser.isActive ?? true,
//   };

//   users.push(user);
//   return user;
// }

// function getUserStats() {
//   let jamiMaosh = 0;
//   let activeUsers = 0;
//   let oldestUser = null;

//   for (const user of users) {
//     jamiMaosh += user.salary;

//     if (user.isActive) {
//       activeUsers++;
//     }

//     if (oldestUser === null || user.age > oldestUser.age) {
//       oldestUser = user;
//     }
//   }

//   return {
//     totalUsers: users.length,
//     avgSalary: users.length ? jamiMaosh / users.length : 0,
//     activeUsers,
//     oldestUser,
//   };
// }

// function deleteUser(id) {
//   const user = users.find((user) => user.id === id);

//   if (!user) {
//     return "User topilmadi";
//   }

//   const index = users.findIndex((user) => user.id === id);
//   users.splice(index, 1);

//   return {
//     success: true,
//     message: `User o‘chirildi: ${user.name}`,
//   };
// }
// console.log(
//   addUser({
//     name: "Laylo Aliyeva",
//     age: 25,
//     role: "user",
//     salary: 900,
//   }),
// );

// console.log(updateUser(1, { salary: 1500, role: "lead" }));
// console.log(searchUsersByName("sardor"));
// console.log(getUserStats());
// console.log(deleteUser(2));
