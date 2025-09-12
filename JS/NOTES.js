// // **************** DOM ****************
// // - DOM = Document Object Model (tree structure of HTML page).
// // - Access elements → getElementById, querySelector, querySelectorAll
// // - Modify → innerHTML, textContent, style, setAttribute
// // - Create/Remove → createElement, appendChild, remove()

// // **************** Events ****************
// // - Events = user/system actions (click, input, submit, etc.)
// // - Bad way: element.onclick = function(){}   (overwrites events)
// // - Good way: element.addEventListener("event", callback)
// // - e.preventDefault() → stop default action
// // - e.target → which element triggered the event

// // Example:
// document.getElementById("ev").addEventListener("mouseenter", function () {
//     this.style.borderRadius = "50%";
//     this.style.backgroundColor = "blue";
// });

// document.getElementById("ev").addEventListener("mouseleave", function () {
//     this.style.borderRadius = "10px";
//     this.style.backgroundColor = "red";
// });

// document.getElementById("ev").addEventListener("blur", function () {
//     this.style.borderRadius = "10px";
//     this.style.backgroundColor = "yellow";
// });

// // Form Example:
// document.getElementById("fm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let number = document.getElementById("number").value;
//     let passwd = document.getElementById("paswd").value;

//     console.log({ name, email, number, passwd });
// });

// // Handling input changes:
// let formdata = {};
// function handlechange(e) {
//     formdata = { ...formdata, [e.target.name]: e.target.value };
//     console.log(formdata);
// }
// document.querySelectorAll("input").forEach((item) => {
//     item.addEventListener("input", handlechange);
// });

// // **************** Async JS ****************
// // - JS is single-threaded → async prevents blocking
// // - setTimeout → run once after delay
// // - setInterval → run repeatedly after delay
// // - clearInterval(id) → stop interval

// let tm = setTimeout(() => {
//     console.log("setTimeout runs once after 5 sec");
// }, 5000);

// let cm = setInterval(() => {
//     console.log("setInterval runs every 5 sec");
// }, 5000);

// // clearInterval(cm); // stops the interval

// // **************** Promises ****************
// // - Promise = object representing future value of async operation
// // - States: pending → fulfilled → rejected
// // - .then() for success, .catch() for error

// function fetchData() {
//     let data = { name: "pankaj", lastname: "joshi" };
//     return new Promise((resolve, reject) => {
//         let rd = Math.floor(Math.random() * 100);
//         console.log("Random:", rd);
//         setTimeout(() => {
//             if (rd % 2 === 0) {
//                 resolve(data);
//             } else {
//                 reject("Error in fetching data");
//             }
//         }, 2000);
//     });
// }

// fetchData()
//     .then(res => console.log("Resolved:", res))
//     .catch(err => console.error("Rejected:", err));

// // **************** Fetch API ****************
// // - fetch(url) returns a promise
// // - First .then(res => res.json())
// // - Second .then(data => console.log(data))

// fetch("https://fakestoreapi.com/products/1")
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));

// // **************** Async / Await ****************
// // - Cleaner way to handle promises using await inside async function
// const getProducts = async () => {
//     try {
//         let res = await fetch("https://fakestoreapi.com/products");
//         let data = await res.json();
//         console.log(data);
//     } catch (err) {
//         console.error("Error:", err);
//     }
// };
// getProducts();

// // **************** Event Loop ****************
// // - JS executes sync code first (call stack).
// // - Async tasks (setTimeout, fetch, promises) go to "Web APIs".
// // - Event loop checks if call stack is empty, then pushes async results back.
// // - This is how JS handles concurrency (non-blocking).


// // **************** DOM ****************
// // - DOM = Document Object Model (tree structure of HTML page).
// // - Access elements → getElementById, querySelector, querySelectorAll
// // - Modify → innerHTML, textContent, style, setAttribute
// // - Create/Remove → createElement, appendChild, remove()

// // **************** Events ****************
// // - Events = user/system actions (click, input, submit, etc.)
// // - Bad way: element.onclick = function(){}   (overwrites events)
// // - Good way: element.addEventListener("event", callback)
// // - e.preventDefault() → stop default action
// // - e.target → which element triggered the event

// // Example:
// document.getElementById("ev").addEventListener("mouseenter", function () {
//     this.style.borderRadius = "50%";
//     this.style.backgroundColor = "blue";
// });

// document.getElementById("ev").addEventListener("mouseleave", function () {
//     this.style.borderRadius = "10px";
//     this.style.backgroundColor = "red";
// });

// document.getElementById("ev").addEventListener("blur", function () {
//     this.style.borderRadius = "10px";
//     this.style.backgroundColor = "yellow";
// });

// // Form Example:
// document.getElementById("fm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let number = document.getElementById("number").value;
//     let passwd = document.getElementById("paswd").value;

//     console.log({ name, email, number, passwd });
// });

// // Handling input changes:
// let formdata = {};
// function handlechange(e) {
//     formdata = { ...formdata, [e.target.name]: e.target.value };
//     console.log(formdata);
// }
// document.querySelectorAll("input").forEach((item) => {
//     item.addEventListener("input", handlechange);
// });

// // **************** Async JS ****************
// // - JS is single-threaded → async prevents blocking
// // - setTimeout → run once after delay
// // - setInterval → run repeatedly after delay
// // - clearInterval(id) → stop interval

// let tm = setTimeout(() => {
//     console.log("setTimeout runs once after 5 sec");
// }, 5000);

// let cm = setInterval(() => {
//     console.log("setInterval runs every 5 sec");
// }, 5000);

// // clearInterval(cm); // stops the interval

// // **************** Promises ****************
// // - Promise = object representing future value of async operation
// // - States: pending → fulfilled → rejected
// // - .then() for success, .catch() for error

// function fetchData() {
//     let data = { name: "pankaj", lastname: "joshi" };
//     return new Promise((resolve, reject) => {
//         let rd = Math.floor(Math.random() * 100);
//         console.log("Random:", rd);
//         setTimeout(() => {
//             if (rd % 2 === 0) {
//                 resolve(data);
//             } else {
//                 reject("Error in fetching data");
//             }
//         }, 2000);
//     });
// }

// fetchData()
//     .then(res => console.log("Resolved:", res))
//     .catch(err => console.error("Rejected:", err));

// // **************** Fetch API ****************
// // - fetch(url) returns a promise
// // - First .then(res => res.json())
// // - Second .then(data => console.log(data))

// fetch("https://fakestoreapi.com/products/1")
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));

// // **************** Async / Await ****************
// // - Cleaner way to handle promises using await inside async function
// const getProducts = async () => {
//     try {
//         let res = await fetch("https://fakestoreapi.com/products");
//         let data = await res.json();
//         console.log(data);
//     } catch (err) {
//         console.error("Error:", err);
//     }
// };
// getProducts();

// // **************** Event Loop ****************
// // - JS executes sync code first (call stack).
// // - Async tasks (setTimeout, fetch, promises) go to "Web APIs".
// // - Event loop checks if call stack is empty, then pushes async results back.
// // - This is how JS handles concurrency (non-blocking).


// **************** DOM ****************
// - DOM = Document Object Model (tree structure of HTML page).
// - Access elements → getElementById, querySelector, querySelectorAll
// - Modify → innerHTML, textContent, style, setAttribute
// - Create/Remove → createElement, appendChild, remove()

// **************** Events ****************
// - Events = user/system actions (click, input, submit, etc.)
// - addEventListener("event", callback)
// - e.preventDefault() → stop default action
// - e.target → which element triggered the event

// **************** Async JS ****************
// - JS is single-threaded → async prevents blocking
// - Examples: setTimeout, setInterval, fetch API
// - Async tasks run in background, results handled later

// **************** Promises ****************
// - Promise = object representing future value of async operation
// - States: pending → fulfilled → rejected
// - .then() for success, .catch() for error

// Example:
function fetchData() {
    let data = { name: "pankaj", lastname: "joshi" };
    return new Promise((resolve, reject) => {
        let rd = Math.floor(Math.random() * 100);
        console.log("Random:", rd);
        setTimeout(() => {
            if (rd % 2 === 0) {
                resolve(data);
            } else {
                reject("Error in fetching data");
            }
        }, 2000);
    });
}

fetchData()
    .then(res => console.log("Resolved:", res))
    .catch(err => console.error("Rejected:", err));

// **************** Fetch API ****************
// - fetch(url) returns a promise
// - First .then(res => res.json())
// - Second .then(data => console.log(data))

// Example:
fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));

// **************** Async / Await ****************
// - Cleaner way to handle promises using await inside async function
// Example:
const getProducts = async () => {
    try {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.error("Error:", err);
    }
};
getProducts();

// **************** Event Loop ****************
// - JS executes sync code first (call stack).
// - Async tasks (setTimeout, fetch, promises) go to "Web APIs".
// - Event loop checks if call stack is empty, then pushes async results back.
// - This is how JS handles concurrency (non-blocking).
