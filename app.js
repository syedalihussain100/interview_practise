// let num = '23';

// let data = parseInt(num);

// console.log(typeof(data))


// let mynum = '23457';

// let myd1 = parseInt(mynum)
// console.log(typeof(myd1))




// function MyArray(arrr) {
//     let len = arrr.length;
//     let max = -Infinity;
//     while (len--) {
//         if (arrr[len] > max) {
//             max = arrr[len]         greator than value check
//         }
//     }
//     return max
// }

// const data = MyArray(mynum);
// console.log(data)
// let mynum = [40, 50, 80, 100, 20, 10,-1];

// function Mymax(arr) {
//     let len = arr.length;
//     let min = Infinity;          less than value check

//     while (len--) {
//         if (arr[len] < min) {
//             min = arr[len]
//         }
//     }
//     return min
// }

// const data = Mymax(mynum);
// console.log(data)


// let myobject = {
//     name: 'hammad',
//     email: 'hammad@gmail.com',
//     age: 23,
//     getdata: function(){
//      return this.name + " " + this.age
//     }
// }

// let data = myobject
// console.log(data)

// function data(a, b, c, ...data) {
//     console.log(arguments)
//     return a + b + c,data
// }

// const result = data(10, 20,40,50,30,90);
// console.log(result)


// var sum = function (a) {
//     console.log("Hello Developers! " + a);
//     var c = 2;
//     return function (b) {
//         return a + b + c;
//     }
// }

// var store = sum(100);
// console.log(store(5))



// function a() {
//     var a1 = 20;
//     var b1 = 20 + 30;

//     function b(num1, num2) {
//         console.log(a1);
//         return num1 * num2
//     }
//     const data = b(20, 20);
//     console.log('data', data)
//     function c() {
//         setTimeout(() => {
//             console.log(b1);
//         }, 2000);
//     }
//     c()
// }


// a(20, 20)





// class Courses {
//     constructor(name, course, age, email) {
//         this.name = name,
//             this.course = course,
//             this.age = age,
//             this.email = email
//     }

//     getDeatils() {
//         return (`The name of the person ${this.name}`)
//     }
// }

// let data1 = new Courses("Hammad", "Javascript", 20, "hammad@gmail.com");
// let data2 = new Courses("Farhan", "Html", 22, "farhan@gmail.com");


// console.log(data2.getDeatils())
// console.log(data1.email);
// console.log(data1)




// function data(a, b, c, ...data) {
//     console.log('data', data[0]);
//     console.log('Rest operator', data);
//     console.log(arguments)
//     let dt1 = data.filter(elm => {
//         if (elm > 80) {
//             return elm
//         }
//     })
//     console.log('filtering data', dt1)
//     return a + b + c
// }

// const data1 = data(10, 10, 10, 20, 80, 100, 201, 300);
// console.log(data1);



// let myObj = {
//     name: "Hammad",
//     email: "hammad@gmail.com",
//     age: 22,
//     address: "street"
// }

// const { ...data } = myObj;
// console.log(data);


// var personalObj = {
//     ...myObj,
//     age: 23,
//     name: "Abdullah",
//     email: "abdullah@gmail.com"
// }

// console.log(personalObj)


// let datas = [
//     { name: "ali", profession: "React.js" },
//     { name: "Rahul", profession: "Javascript.js" },
// ]


// function getdata() {
//     setTimeout(() => {
//         let myobj = ``;
//         datas.forEach((elm, id) => {
//             myobj += `<li>${elm.name}</li>`
//             document.body.innerHTML = myobj
//         })
//     }, 1000);
// }


// function createData(mydata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             datas.push(mydata);
//             let error = false;
//             if (!error) {
//                 resolve()
//                 console.log(datas)
//             } else {
//                 reject('Something Error');
//             }
//         }, 2000);
//     })
// }

// createData({ name: "Muhemin", profession: "Software Enginerring" }).then(getdata).catch((err) => console.log(err))



// clouser


// function myclouser(a, b, c) {
//     return {
//         getdata1: function () {
//             return a + b
//         },

//         getdata2: function () {
//            return a + b + c
//         }
//     }

// }

// const store = myclouser(1,2,3);
// console.log(store.getdata1());
// console.log(store.getdata2())




// // call aplly bind imp topic 
// const personaldata = {
//     name: "Muhemin",
//     age: 22,
//     email: "muhemin@gmail.com",
//     address: "Street Road",
// }

// let printDeatils = function (state,skills) {
//     console.log(this.name + " " + state + " " + skills)
// }

// printDeatils.call(personaldata, "Karachi","Mern Stack Developer")

// const userDetails = {
//     name: "Bilal",
//     age: 23,
//     email: "bilal@gmail.com",
//     address: "Street Road",
// }


// printDeatils.call(userDetails, "Karachi","Front End Developer")
// printDeatils.apply(userDetails,["Karachi","BackEnd Developer"]);
// let somedata = printDeatils.bind(userDetails,"Karachi","Software Enginerring");


// somedata()



// const companies = [
//     { name: "Google", category: "Product Based", start: 1981, end: 2004 },
//     { name: "Amazon", category: "Product Based", start: 1991, end: 2008 },
//     { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
//     { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
//     { name: "Mindtree", category: "Service Based", start: 1989, end: 2010 },
// ]



// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// let somefilter = ages.filter((elm, index) => {
//     if (elm > 20) {
//         return elm
//     }
// })

// console.log(somefilter);


// let sb = companies.filter((elm, index) => {
//     if (elm.category === "Service Based") {
//         return true
//     }
// })

// console.log(sb)


// let checksomedata = companies.sort((c1,c2)=> c1.start > c2.end ? 1 : -1);
// console.log(checksomedata)

// let myages = ages.sort((a, b) => a - b );

// console.log(myages)


// reduce 


// let total1 = 0;
// for(let i = 0; i < ages.length; i++){
//     total1 += ages[i]
// }

// console.log(total1)


// let total = 0;


// let myreduce = ages.reduce((value, total) => {
//     return total += value
// }, 0)
// debugger

// console.log(myreduce)
// console.log(a);

// if (a === undefined) {
//     console.log('undefined')
// } else {
//     console.log("not Defined")
// }
// var a = "hammad";
// console.log(a)



// const companies = [
//     { name: "Google", category: "Product Based", start: 1989, end: 2004 },
//     { name: "Amazon", category: "Product Based", start: 1999, end: 2008 },
//     { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
//     { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
//     { name: "Mindtree", category: "Service Based", start: 1989, end: 2010 },
// ]





// let somedata = companies.sort((c1,c2)=> c1.start > c2.end ? 1 : -1);

// console.log(somedata)


// let myobj = {
//     name: "Ali"
// }

// console.log(myobj)




// let someobj = {
//     __proto__: myobj,
//     name: "bilal"
// }

// let someobj1 = {
//     __proto__: someobj,
//     name: "Muhemin",
//     email: "muhemin@gmail.com",
//     age: 23,
//     address: 'Street Block'
// }

// let somecheck1 = {
//     __proto__: someobj1,
//     name: "Technical Suneja"
// }

// console.log(somecheck1)


// const obj = {
//     name1: "Bilal",
//     getName: function () {
//         return this.name
//     },
//     getRoll: function () {
//         return this.roll
//     },
//     getEmail: function () {
//         return this.email
//     }
// }






// Array.prototype.show = function () {
//     return this
// }

// const cities = ["Karachi", "Lahore", "Multan", "Queeta"];

// console.log(cities.show())



// Array.prototype.coverObject = function () {
//     let newObj = {};
//     this.forEach(elment => {
//         newObj[elment] = elment
//     })
//     return newObj
// }

// console.log('cities', cities.coverObject())


// function object1(name, email, roll) {
//     this.name = name,
//         this.email = email,
//         this.roll = roll
// }

// let somedata1 = object1.prototype = obj
// console.log(somedata1.name1)
// const somedata = new object1("Hamza", 'hamza@gmail.com', 101);
// console.log(somedata.getRoll())



// const obj = {
//     name: 'xyz',
//     getName: function () {
//         return this.name
//     },
//     getEmail: function () {
//         return this.email
//     },
//     getAddress: function () {
//         return this.address
//     }
// }

// function MyObj(name, email, address) {
//     this.name = name,
//         this.email = email,
//         this.address = address
// }

// let underdata = MyObj.prototype = obj;
// const data1 = new MyObj("Bilal", "bilal@gmail.com", "Bilal Street Road");

// console.log(data1.getAddress())


// function CheckSumZero(array) {
//     for (let number of array) {
//         for (let j = 1; j < array.length; j++) {
//             if (number + array[j] === 0) {
//                 return [number, array[j]]
//             }
//         }
//     }
// }

// let data = CheckSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8])
// console.log(data)


// REST OPERATOR && SPERATOR OPERATOR || ARRAY OBJECT


// function addNumbers(a, b, c, ...other) {
//     console.log(arguments)
//     return a + b + c ;
// }

// const data = addNumbers(10, 10, 10, 20, 30, 40, 50);
// console.log(data)


// const datas = [
//     { name: 'ali', email: 'ali@gmail.com', age: 23 },
//     { name: 'hammad', email: 'hammad@gmail.com', age: 24 },
// ]


// function getdata() {
//     setTimeout(() => {
//         let output = ``;
//         datas.forEach((elm, id) => {
//             output += `<li>${elm.email}</li>`
//             document.body.innerHTML = output
//         })
//     }, 1000);
// }

// function createData(newdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             datas.push(newdata);
//             let error = false;
//             if (!error) {
//                 resolve()
//             } else {
//                 reject("Something Error!")
//             }
//         }, 2000);
//     })
// }

// async function start() {
//     await createData({ name: "Muhemin", email: 'muhemin@gmail.com', age: 22 });
//     getdata()
// }

// start()




// var sum = function (a, b, c) {
//     return {
//         getdata1: function () {
//             return a + b
//         },
//         getdata2: function () {
//             return a + b + c
//         }
//     }          ///clouser
// }


// var store1 = sum(10, 20);
// var store2 = sum(10, 20, 30);
// console.log(store1.getdata1());
// console.log(store2.getdata2());


let myObj1 = {
    name: "Syed Muhemin ALi",
    email: 'muheminali@gmail.com',
    age: 21,
    date: new Date().toLocaleTimeString(),
    // printDetails: function () {
    //     console.log(this.name)
    // }
}

let printDetails = function (city, country, thirt) {
    console.log(this.name + " " + city + " " + country + " " + thirt)
}

//  function borrowing
// printDetails.call(myObj1, "Karachi", "Pakistan",'anydat')
//  function apply
// printDetails.apply(myObj1, ["Lahore", "Pakistan", "lo"])

// function bind calling the copy then run
let checks = printDetails.bind(myObj1, 'Queetta', "Pakistan", "My Wishes");
checks()



let user2 = {
    name: "Takla BHai",
    email: 'takla@gmail.com',
    age: 21,
    date: new Date().toLocaleTimeString()
}

// printDetails.call(user2, "Karachi", "Pakistan",'some data')

let check = printDetails.bind(user2, 'Queetta', "Pakistan", "My Wishes");
check()


// HIGH_ORDER FUNCTION
const companies = [
    { name: "Google", category: "Product Based", start: 1989, end: 2004 },
    { name: "Amazon", category: "Product Based", start: 1999, end: 2008 },
    { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
    { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
    { name: "Mindtree", category: "Service Based", start: 1989, end: 2010 },
]

const ages = [10, 11, 14, 15, 16, 18, 20, 21, 22, 23, 24, 17, 25, 30, 32, 45];


// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 20){
//         console.log(ages[i])
//     }
// }


// const age = ages.filter((elm) => elm >= 30);
// console.log(age)

// let check1 = companies.filter(function (elm) {
//     if (elm.category === "Product Based") {
//         return true
//     } else {
//         return false
//     }
// })

// console.log(check1)

// let check2 = companies.filter((elm)=> elm.category === "Product Based");
// console.log(check2)

// let checka = companies.map((elm)=>{
//     return elm.name
// })

// console.log(checka)


// let sorted = companies.sort((c1,c2)=> (c1.start < c2.start ? 1 : -1));
// console.log(sorted)

// let agesorted = ages.sort((a,b)=> (b - a));
// console.log(agesorted)


// REDUCE

// let total = 0;
// for (let i = 0; i < ages.length; i++) {
//     total += ages[i]
// }
// console.log(total)


// let reduceage = ages.reduce((elm, index) => {
//     return elm + index
// }, 0)

// console.log(reduceage)

//UNDEFINED && NOT DEFINED


