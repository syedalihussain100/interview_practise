

// function a() {
//     var b = 10
//     c()
//     function c() {
//         console.log(b)
//     }
// }
// a()

//The Scope Chain, 🔥Scope & Lexical Environment 
// function a() {

//     var sum = 20;

//     c()
//     function c() {
//         console.log(sum);
//     }

// }

// a()

// var a = 30;


// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// console.log(a)


// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function clouser(i) {
//             setTimeout(() => {     ///this is clouser
//                 console.log(i)
//             }, i * 2000);
//         }
//         clouser(i)
//     }

// }

// x()


// function outest() {
//     var c = 20;
//     function outer(b) {
//         function inner() {
//             console.log(a, b, c)
//         }
//         return inner
//     }
//     return outer
// }

// let a = 100;
// var close = outest()("hello world");
// close()


// function Anagram(string1, string2) {
//     if (string1.length !== string2.length) {
//         return false
//     }

//     let counter = {}

//     for (let letters of string1) {
//         sum = counter[letters] = (counter[letters] || 0) + 1
//         console.log(sum)
//     }
//     console.log(counter);


//     for (let items of string2) {
//         if (!counter[items]) {
//             return false
//         }
//         counter[items] -= 1
//     }
//     return true
// }

// const res = Anagram('hello', 'lleho')
// console.log(res)


// let admin = false;

// let check1 = admin === true ? 'admin here' : 'no admin';

// console.log(check1);



// setInterval(mytime, 1000)



// function mytime() {
//  const d = new Date();
//  document.getElementById('demo').innerHTML = d.toLocaleTimeString();
// }

// mytime()




// setInterval(() => {
//     let sumdata = new Date().toLocaleTimeString();
//     document.getElementById('demo').innerHTML = sumdata
// }, 1000);


// function fetchMethod() {
//     fetch(
//         "https://reqres.in/api/products/3")
//         .then(res => res.json()) 
//         .then(data => {
//             const {id,name,color,year,pantone_value} = data.data;
//             console.log(id, name, color, year, pantone_value);
//             document.getElementById('demo').innerHTML = name
//         }).catch(err => {
//             console.log(err)
//         })
// }
// fetchMethod()


// const setBg = () => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
// }

// genNew.addEventListener("click", setBg);
// setBg();




// function Anagram(string1, string2) {
//     if (string1.length !== string2.length) {
//         return false
//     }
//     let counter = {}
//     for (let letters of string1) {
//         sum = counter[letters] = (counter[letters] || 0) + 1;
//     }
//     console.log(counter);

//     for (let items of string2) {
//         if (!counter[items]) {
//             return false
//         }
//         counter[items] -= 1;
//     }
//     return true
// }

// const data = Anagram('hello', 'lleho');

// console.log(data)



// console.log(a)
var a;
if (a === undefined) {
    console.log('undifined');
} else {
    console.log('not defined')
}