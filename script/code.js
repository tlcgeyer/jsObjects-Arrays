// named function
// function greeting() {
//     console.log("Hello there");
// }
//Calling a function
// greeting ()
//const btnSubmit =
//document.getElementById('btnClick')
///btnSubmit.addEventListener('click', greeting)
//btnClick.addEventListener('click', greeting)

// const btnSubmit =
// document.querySelector('[data-submit]')
// btnSubmit.addEventListener('click', greeting)


// let firstName = 'Joel'
//console.log(firstName+ 'is working at Lifechoices');
//firstName = 'David'
//console.log(firstName+ 'stay in plumstead');

//let numb1 =3
//let numb2 =4
//console.log(numb1+numb2)
//console.log(numb1*numb2)
//console.log(numb1-numb2) //variables

//--------------------------------------------A R R A Y S----------------------------------------------------------
/* 
- primitive data type: string, number, boolean, undefined,
- dynamic data type: array, object and function
*/
//let numb1 = 'Three' //string-sequence of characters used to represent text
//let numb1 //undefined
//let numb2 = null //null
//console.log(numb1) //undefined-create a value without a variable
//console.log(numb2) //null-create a variable and assign it to nothing
//const isMale = true  //boolean
//console.log(numb1)  //string
//console.log(typeof numb1) //string
//console.log(!isMale) //boolean
//console.log(typeof isMale) //boolean

// Initializing a variable 
// let numb1 = 6

//Difference between var, let & const

//let numb1 = '24'
//console.log(numb1)


//let data = 8+ 2 + "Leigh"
//console.log(data);

//let data = "Leigh"+ 8+ 2 //it converted everything to a string then concat everything together
//console.log(data) //thus making it no Leigh10 but Leigh82

//let numb1 = "3" //because its a string it will combine everything together
//let numb2 = "4"
//console.log(numb1+numb2); //34

//let numb1 = "3" //use if u want it to remain a string but it to add up
//let numb2 = "4"
//console.log(
//    eval(`${numb1} + ${numb2}`)
//)
//console.log(parseInt(numb1)); //integer
//console.log(parseFloat())  //float(decimal)

//addition button (EXErCISE EXAMPLE)
/*const btnAdd = document.querySelector(`[data-submit]`)
const lblOutput = document.querySelector(`#output`)



//ARRAYSSSS--------------------------------------------------->

/*let numbers = [
    3,5,8
    'Leigh',                  //--string within our numbers
    'Keefah'                   // --arrays start counting from 0        and if you want to
                               // specifically get a position 
]*/
//console.log(table) **to find the position of the number u need
//console.log(`Element at position 3: $ {numbers[3]}`);
//console.log(numbers.at(-1)) //specify the variable name, @ and -1


/*console.log(`Array's size : $ {data.length}`);
console.log(`Element at position 3 : $ {data[3]}`);
data.push('Matthew')*/ //will display everything but this will now be the last displayed variable
//console.log(data.at(-1)); **the push method allows you to add new elements to the end of the array
//data.push(`Shawn`, 'Simba')

//data.unshift('new', 'element') 
//console.log(data);//unshift allows you to add elements at the beginning of an array

//to remove the last element from the array--
//data.pop 
//return the last element that was removed---
//let lastRemovedElement = data.pop ()
//console.log(lastRemovedElement); //concat can combine two arrays into one variable

// to create a new array------------------
// console.log(newArr);

// removing the first element
// data.shift()
// console.log(data);

// adding using splice ------changes the contents of an array by removing or replacing existing elements/ or adding new elements in place.  To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced() .

// data.splice(2,0, 'Joel')
// console.log(data);

//--------------------S T R I N G    M E T H O D S----------------------------

// let sentence = 'I love programming'
// console.log(sentence.length);

// array of characters using a string method---------------------
// function arOfChars(sentence) {
//     let characters = []
//     for(let c of sentence) {
//         characters.push(c)
//     }
//     return characters
// }
// console.log(arrOfChars(sentence));

// to split a paragraph: 
// console.log(sentence.split(" ")); //to split it
// console.log(sentence.replace("love" , "hate"));

// /list of methods: 
// sentence.lastIndexOf() //returns the index of the last occurrence of a specified value in a string.  
// sentence.endsWith() //returns true if a string ends with a specified string. 
// sentence.startsWith()
// sentence.includes()
// sentence.indexOf()
// sentence.concat()
// sentence.match()

// how to repeat a specific word in a sentence:  
// console.log(" Love ".repeat(4));

// how to add a emoji: 
// console.log("Love❤️"); //windows then . 

// removing element using splice: 
// data.splice(3,2)
// console.log(data);

// let data = [7, 3, 'Abc', 1, 'abc']
// //reverse ----to reverse an array
// //data.reverse()
// //console.log(data);
// console.log(data(reverse))

// //sorting
// console.log(data.sort());

// //Return only numbers
// data.push(23,7.4)
// let numbers = 
// data.filter(a=> typeof a == 'number')
// function onlyNumbers(arr) {  //what info are we selling to the function
//     return typeof a == 'number' //a specific element within an array
// }


// to display the size of the array 
// length //property(a feature what you are looking for) of an array

// return the elements from a range
// console.log(data.slice(1,4)); 

// /* splice = add or remove
// 0=> adding
// 1=> removing an element from that specific position*/

// //difference between splice and slice 

// let data = [7, 3, 'Abc', 2, 1, 9, 'abc', 6, -1]
// console.log(
//     data.slice(2,4)); //2 & 4 indicates the start and end. 

// data.splice(3,0, 'Leigh') //where we gonna start from, where we deleting and the last the value
// console.log(data);

// data.splice(4,2)
// console.log(data)

// //how to get the last character in arrays 
// let size = sentence.length 
// console.log(size);
// console.log(sentence[size-1]);
// console.log(sentence,slice(0,-1));

// if we want to make use of uppercase
// console.log(sentence.
//     toUpperCase ());

// OBJECTS AND ARRAYS-----------CONTINUING 
//------an object has a index which has a key --if your key is "___" you would need to specify it
// let person = {
//     name: 'Tamlin',
//     surname: 'Geyer',
//     age: 19,
//     subjects: ['HTML', 'CSS', 'JavaScript']
// }

// // Display the object to the console 
// console.log (person);
// console.table(person);

// ---Dynamic nature of an object 
// let person = {
//     firstName: 'Leigh'
//     lastName: 'San'
// }
// console.log(person);
// person.firstName = 'Tamlin'
// console.log(person);

// Add a new property to the current object
// person.age = 20
// console.log(person);
    

//----------------------------------------------------------------------------------------------------//
// //console.log(Object.keys(laptop));
// //console.log(Object.values(laptop));
// Object.keys(laptop).forEach( (key) => {
//     console.log(`${key}-> ${laptop[key]}`);
// })



// Object.values(laptop).forEach( (value)=> {
//     console.log(`${value}`);
// })

//Cloning an object(so that you don't disturb the original) using (spread operator, Object.assign(), JSON.parse(),)
// let car1 = {
//     make: 'Toyota',
//     year: 2023
// }

// let car2 = car1
// console.log("==car1==");
// console.log(car1);
// console.log("==car2==");
// console.log(car2);
// console.log("Change the value of car2");
// car2.year = 2024
// console.log(car1, car2);


// Object.assign()
// let car3 = Object.assign( {}, car1) //
// console.log("===car3===")
// console.log(car3);

// JSON.parse(): is to exchange data to/from a web server.

// --When receiving data from a web server, the data is always a string.

// -- Parse the data with JSON.parse(), and the data becomes a JavaScript object.
// let car4 = JSON.parse(JSON.stringify(car1)) //converting your object to a string
// console.log(car4);

// map and reduce   //reduce takes two arguments x & y and combines all the values and gives u a single value.  Reduce right means it starts from the right side. It returns only a single value.
// map allows you to show only specific data that you request to see, eg. 'id' 
// let modify = numbers.map( (x)=> {
//     return x*2             //returning the product of the elements 
// })

// console.log(modify);
// let sum = numbers.reduce((a, b)=> a + b)
// console.log(sum);

// Constructor (number, array, object)
// let x = Number(2)
// console.log(x);

// let myArr = new Array(3, 5, 11)
// console.log(myArr);

// let firstName = String("") //because you specifying an empty string
// console.log(firstName);



// Create two objects and add the objects into an array, log the objects as well:
// let person1 = {
//     firstName: 'Thimna'
// }

// let person2 = {
//     firstName: 'Veronique'
// }
// //Create an empty array
// let personDetails = []
// personDetails.push(person1)
// personDetails.push(person2)
// console.log(personDetails);
// console.log(person1);
// console.log(person2);

// When to use an 'if' statement? 
// --- Use 'if' to specify a block of code to be executed, if a specified condition is true. Use else to specify a block of code to be executed, if the same condition is false. Use else if to specify a new condition to test, if the first condition is false.

// let firstName = 'Zubair'
// if(firstName) {
//     console.log("Present");
// }else {
//     console.log("Absent");
// }


// let firstName = 'Zubair'
// let state = 'late'
// if(state == 'present') {
//     console.log("present");
// }else if(state){    //checking the value of state, if theres no value it will look for another 'else if' 
//     console.log("late");
// }else if(state){
//     console.log("late -> Final warning");
// }else {
//     console.log("absent");
// }

//switch and case(checking for a condition) : switch can return multiple conditions 
// switch(true) {
//     case state == 'present': 
//     console.log("present");
//     break; 
//     case state !="": //checking if state is not empty
//     console.log("late");
//     case state !="": 
//     console.log("late -> Final warning");
//     break; 
//     default: 
//     console.log("absent");
//     break; 
// }


//Purpose of having an object

// let firstName = 'Leigh'
// let lastName = 'San'

// const person = {
//     firstName, 
//     lastName
// }
// console.log(person);

//Destructuring : the fact of retrieving a value or a property from a dynamic or reference object

// let data = ['Leigh', 'San']
// let [firstName, lastName] = data
// // console.log(firstName);
// // console.log(lastName);
// //OR 
// console.log(`My name is ${firstName} and last name is ${lastName}`);


//Array of objects: each object needs to have an id, name and amount.

// let products = [
//     {
//         id: 1,
//         name: 'table',
//         amount: 700
//     },
//     {
//         id: 2,
//         name: 'mobile',
//         amount: 10000
//     }
// ]
// let [product1, product2 ] = data


//Objects of objects,, getting the properties 
// let person = {
//     firstName: 'Leigh',
//     lastName: 'San',
//     age: 19
// }
// const {firstName,lastName,age} = person //needs to be implemented 
//  console.log(`My name is ${person.firstName} ${person.lastName}, and I am ${person.age} year's old.`);

///or --> quicker way: 
// console.log(`My name is ${firstName} ${lastName}, and I am ${age} year's old.`);

//How to get the remaining element in an array
// let [first, second, ...remaining] = [23, 5, 9, 11, 24, 32]
// console.log(first, second, remaining);

// Exception handling using try .. and catch
// function division(fOp) {
//     try{
//         let result = fOp / sOp
//         console.log(result);
//     }catch(e) {
//         console.log("Please try again next time"); 
//     }
// }
// division(4)
/*
When to use an exception handling: when to use 'TRY' and 'CATCH' 
- Retrieving a value from an input element
- Handling arguments
- Accessing a file
- Accessing data from a table (in a database)
- Etc..
- when you think you might get an error
*/

// Make use of throw : if its not what is specified , its gonna give out an error and crash the program
// function addition(...args) {
//     let totalOfNumbs = 0 
//     args.forEach( item=> {
//         if(typeof item != 'number') 
//             throw new Error(`${item} is not a number`)
//         else totalOfNumbs += item
//     })
//     return totalOfNumbs
// }
// try{  //used to prevent the program from crashing
//     console.log(addition(4, 8, 'Joel', 9));
// }catch(e) {
//     console.log(e.message);
// }

// Getter and setter


/* Local storage
- .getItem(key)
- .setItem(key, value : string)
- .removeItem(key): Remove the key
- .clear(): Remove all the keys
*/

// Explain promise: 
// let myPromise = new Promise((resolve, reject)=> {
//     let numb1 = 12
//     let numb2 = 2
//         For division
//     if(numb2 > 0 ) 
//         resolve(`Result is: ${numb1 / numb2}`) 
//     reject(`You can't divide ${numb1} by ${numb2}`)
// })

// myPromise.then(
//     (correct)=>{
//         console.log(correct);
//     },
//     (denied)=> {
//         console.log(denied);
//     }
// )

// Fetch API
// let cardContainer = document.querySelector('[data-cards]') 
// fetch('https://randomuser.me/api?results=50')
// .then(data=> data.json())
// .then(result=> {
//     let {results} = result 
//     results.forEach( people =>{
//         console.log(people);
//         cardContainer.innerHTML += 
//         `
//         <div class="card" style="width: 18rem;">
//             <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
//             <div class="card-body">
//             <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
//             <p class="card-text">Age: ${people.registered.age}</p>
//         </div>
//         `
//     })
// })

// Asynchronous(ASYNC) function 
// async function getData() {
//     let data = await fetch('https://randomuser.me/api?results=50')
//     return data.json()
// }
// async function display() {
//     let cardContainer = document.querySelector('[data-cards]') 
//     cardContainer.innerHTML = ''
//     let {results} = await getData()
//     results.forEach( people => {
//         cardContainer.innerHTML += `
//         <div class="card" style="width: 18rem;">
//             <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
//             <div class="card-body">
//             <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
//             <p class="card-text">Age: ${people.registered.age}</p>
//         </div>
//         `
//     })
// }
// display()

// Host JSON file to GitHub


// Revision: Promise and fetch
// let myPromise = new Promise() 
// function args(resolve, reject) {
//    let numb1 = prompt ("Enter only a number")
//     if(typeof numb1 == 'number')
//       resolve(`The entered number is ${numb1}`) //if it  was resolved it will display that 
//     reject(`Unfortunately ${numb1} is not a number`) //if its not a number or what was specified, it will reject it. 
// }
// //You made a promise, then what? (Making use of the then method afterwards)
// myPromise.then(
//     completed=> console.log(completed), //one arg. //if it was resolved its gonna catch it from here
//     rejected=> console.log(rejected)
  
    
// )

//-----------------------------------Local Storage -------------------------------------
//local storage: allows us to save data  permanently on the browser. 
//*stores data as key-values pairs & both key & values are stored as strings

//Data types:
//*only supports key-value pairs
//*to store non-string data types, you need to serialize & deserialize them

//Domain specific:
//*Data on the domain cannot be directly accessed by different domain due to the same origin policy 

//How to convert an array into 
//*to convert an array into a string using JSON.stringify()

//Cleaning & removing items: 
//to retrieve item== local storage.get item(getting the item)
//to remove all the keys == .clear
//to remove a specific key == remove item 


