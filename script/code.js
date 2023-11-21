// named function
function greeting() {
    console.log("Hello there");
}
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

// //to create a new array------------------
// console.log(newArr);

// removing the first element
// data.shift()
// console.log(data);

// adding using splice ------changes the contents of an array by removing or replacing existing elements/ or adding new elements in place.  To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced() .

// data.splice(2,0, 'Joel')
// console.log(data);

// //removing element using splice
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


// //to display the size of the array 
// length //property(a feature what you are looking for) of an array

// //return the elements from a range
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

// //if we want to make use of uppercase
// console.log(sentence.
//     toUpperCase ());

// //OBJECTS AND ARRAYS-----------CONTINUING 
// //an object has a index which has a key --if your key is "___" you would need to specify it
// let person = {
//     name: 'Tamlin',
//     surname: 'Geyer',
//     age: 19,
//     subjects: ['HTML', 'CSS', 'JavaScript']
// }

// // Display the object to the console 
// console.log (person);
// console.table(person);

// //Dynamic nature of an object 
// let person = {
//     firstName: 'Leigh'
//     lastName: 'San'
// }
// console.log(person);
// person.firstName = 'Tamlin'
// console.log(person);


// //Add a new property to the current object
// person.age = 20
// console.log(person);
    
// // Make use of the dot operator
//  console.log(person.name);

// // Make use of square bracket 
//  console.log(person['surname']);

// // What if the key wasn't found 
// console.log(person['surnames']);
//  console.log(person.subjects.at(-1));

// // With the dot operator
//  console.log(person.ages);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// 
//you can use an object : it does represent a thing, person or place. Such as a phone, car, etc
/* --------------------------------------------O P E R A T O R S-------------------------------------------------------------------
-Operators
- Arithmetic
- Assignment (=) 
- Comparison 
- Logical operators: when we want to combine conditions 

- Conditional operator: 
we make use of the if statement to compare*/

//outer if statement


//switch -- we want to evaluate a variable 
//alternative statement -->/
//

//--------------------------------------L O O P S ------------------------------------------------
//Looping through arrays


//Looping through a object 
// let laptop = {
//     make: 'Dell',
//     cpu: '3Ghz',
//     ram: '16GB'
    
// } 
// /* console.log(laptop.make);

// console.log(laptop.cpu);
// console.log(laptop.ram);
// console.log(laptop)

// //to display all the keys in a loop
// for (const key in laptop) {
//     console.log(laptop[key])
// }

// let laptop = {

// }
// console.log(laptop);

// //console.log(Object.keys(laptop));
// //console.log(Object.values(laptop));
// Object.keys(laptop).forEach( (key) => {
//     console.log(`${key}-> ${laptop[key]}`);
// })



// Object.values(laptop).forEach( (value)=> {
//     console.log(`${value}`);
// })

//CLoning an object using (spread operator, Object.assign(), JSON.parse(),)
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

//spread operator: it copies all the properties vs assignment operator: used to assign the value, variable and function to another variable
// let car2 = {...car1}
// console.log(car1, car2);
// console.log("Change the value of car2"); 
// car2.year = 2024
// console.log(car1, car2); 

// //Object.assign()
// let car3 = Object.assign( {}, car1) //
// console.log("===car3===")
// console.log(car3);

// //JSON.parse(): is to exchange data to/from a web server.

// // When receiving data from a web server, the data is always a string.

// // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
// let car4 = JSON.parse(JSON.stringify(car1)) //converting your object to a string
// console.log(car4);

/*Math methods : allows us to modify*/
// let numbers = [2, 4, 11, 1]
// let a = 3
// let b = 2
// console.log(`Highest number: ${Math.max(...numbers)}`); //... is the spread operator 
// console.log(`Lowest number: ${Math.min(...numbers)}`);
// // 3^2 = 3 * 3
// console.log(`pow(x,y): ${Math.pow(a, b)}`);
// console.dir(Math);
//continuing..........
let numbers = [9, 4, 2, 5, 10]

// function highestNumber(arguments) {
//     for(let number in arguments) {   //for 'of' will display the elements whereas  for 'in' will the index
//         console.log(number);
//     }
// }
// highestNumber(numbers)

//longer method: 
function highest(args) {
    let x = args[0];
    for(let m in args) {
        if(args[m]>x) {
            x=args[m]
        }
        //console.log(m);
    }
    console.log(x)
}
highest(numbers)

//shorter method
//numbers called a spread operator(...)
console.log(Math.max(...numbers));

Math.round() //is gonna round it off to the nearest integer
//Strings
// let firstName = 'Tamlin'
// console.log(firstName.split("").reverse().join(""));

/*
Exercises on the below methods
- charAt()
- endsWith()
- includes()
- lastIndexOf()
- indexOf()
- replace()
- repeat()
- startWith()
- subString()
- trim()
- trimEnd()
- trimStart()
- slice()
- split() */

// let rIdx = Math.floor(Math.random() * (numbers.length -1))
// console.log(numbers);
// console.log(rIdx);
// console.log(numbers[rIdx]);

// //map and reduce   //reduce takes two arguments x & y.  Reduce right means it starts from the right side. It returns only a single value.
// // map allows you to show only specific data that you request to see, eg. 'id' 
// let modify = numbers.map( (x)=> {
//     return x*2             //returning the product of the elements 
// })

// console.log(modify);
// let sum = numbers.reduce((a, b)=> a + b)
// console.log(sum);

// //Constructor (number, array, object)
// let x = Number(2)
// console.log(x);

// let myArr = new Array(3, 5, 11)
// console.log(myArr);

// let firstName = String("") //because you specifying an empty string
// console.log(firstName);


// //Fetch API









// //Create two objects and add the objects into an array, log the objects as well
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

// //When to use an 'if' statement? 
// // Use 'if' to specify a block of code to be executed, if a specified condition is true. Use else to specify a block of code to be executed, if the same condition is false. Use else if to specify a new condition to test, if the first condition is false.

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

