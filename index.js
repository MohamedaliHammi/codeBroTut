console.log('ola');

//*  ----counter----


let count = 0;
document.getElementById("decreasebtn").onclick = function () {
    count -= 1;
    document.getElementById('number').innerHTML = count;
};
document.getElementById("resetbtn").onclick =function () {
    count = 0;
   document.getElementById('number').innerHTML = count; 
};

document.getElementById("increasebtn").onclick = function () {
    count += 1;
    document.getElementById('number').innerText = count;
};






//* rolle the dice section 


document.getElementById("roller").onclick = function(){
let dicenum1 = Math.floor(Math.random() * 6 + 1);
let dicenum2 = Math.floor(Math.random() * 6 + 1);
let dicenum3 = Math.floor(Math.random() * 6 + 1);

    document.getElementById("dice1").innerHTML = dicenum1;
    document.getElementById("dice2").innerHTML = dicenum2;
    document.getElementById("dice3").innerHTML = dicenum3;

   if(gusses === 8){
    console.log('you win');
    alert ('it took you ' + gusses + 'to get the correct dices');
   }else{
    console.log('contunie playing');
   } 
 
   };


 //* Return statement 
 
 // calculate the rectangle area 
/*
 let area;
 let width;
 let height;

 width = prompt('enter width');
 height = prompt('enter height');




 function  getArea (width, height){
    return width * height 
 }
 area = getArea(width, height);

 alert('your rectangle area = ' + area)

 */

 // * number generator mini game

 const answer = Math.floor(Math.random() * 10 + 1 );
 let guesses = 0;
 document.getElementById('submitButton').onclick = function () {
   
   let guess = document.getElementById('guessField').value;
   guesses += 1;
   if(guess == answer){
    alert(`${answer} is the number. It took you ${guesses} guesses`);;
   }else if (guess < answer){
     alert('too small!');
   }else{
    alert('too large');
   }

 }

 //* tempurature converter 
 
// our logic

document.getElementById('convertButton').onclick = function (){
let temp;

if (document.getElementById('Cbutton').checked){
    temp =document.getElementById('textBox').value
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById('tempLabel').innerHTML = temp + "°C" // alt 0176

}else if(document.getElementById('Fbutton').checked){
    temp = document.getElementById('textBox').value
    temp = Number(temp);
    temp = toFrenheit(temp);
    document.getElementById('tempLabel').innerHTML = temp + "°F"
}else{
  document.getElementById('tempLabel').innerHTML = 'select a unit'
}


}




    function toCelsius(temp){
        return (temp - 32) * (5 / 9);
    }

    function toFrenheit (temp){
        return temp * 9 / 5 + 32;
    }


  // * Timer  (my try to finish later)




  // * arrays 

  let prices = [200, 300, 400, 700, 1000];
// navigate insice an arr backword
/*
  for(let i = prices.length - 1; i  >= 0; i--){
    console.log(prices[i])
  }
  */
// using for of

for(let price of prices){
  console.log(price);
}

// sort() alphabateque order 

let cars = ['Lambo', 'Golf','Ferrari','Megane'];
cars = cars.sort().reverse();
for(let car of cars){
  console.log(car);
}

// 2D array = an array of arrayys

let fruits = ['appeles', 'bananas', 'dates'];
let vegtebales = ['onion', 'pepper', 'tomato'];
let meats = ['steak', 'chicken', 'fish'];
let groceryList = [fruits, vegtebales, meats];

groceryList[1][0] = 'potato' // lines & columns


for(let list of groceryList){
  for(let food of list){
    console.log(food);
  }
}

// spread operators allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected (unpack the elements)


let class1 = ['sabri', 'amine', 'ahmed'];
let class2 = ['achref', 'lotfi', 'saber'];
// ! no to do 
/*
class1.push(class2);
console.log(class1);
*/
// how to do it
class1.push(...class2);
console.log(class1);


//* rest parameters 

let a = 1;
let b = 2;
let c = 3;
let d = 8; 
let j = 8;

function sum(...chiffres){
  let total = 0;
  for(let digit of chiffres){
    total +=  digit;
  }
  return total;
}
/*
console.log(sum(a,b,5,j))
*/


//* Call back functions 
//* call back functions = a function passed as an argument 
// *    ensure that a function is not going to run before the task is completetd ex wait for a file to download then do something 

/*
substriction (3,3,displayConsole);
function substriction (x, y, callBack){
  let result = x - y;
  callBack(result);
}



function displayConsole(output){
  console.log(output);
}

*/

//* Array.map() = excute a providede call back function once for each array element And creates a new array


let multipleNumbers = [2, 4, 6, 8, 10, 50, 60, 70, 90 ];

let multipleNumbersPower2 = multipleNumbers.map(powerBytwo);
multipleNumbersPower2.forEach(printPower2);
let cubes = multipleNumbers.map(cube);
cubes.forEach(printCube);

function powerBytwo(elements){
   return Math.pow( elements, 3);  
}
console.log(multipleNumbersPower2);

function printPower2(elements){
  console.log(`this is the square result ${elements}`)
}

function cube(element){
  return Math.pow(element, 4);
}

function printCube(element){
  console.log('this is the cube result '  + element)
}

//* array.filter() = create a new array with all elements that pass the test provided by a fucntion 

let studentAges = [18, 21, 15, 17, 33, 11, 5, 4];
let studentAge18 = studentAges.filter(checkAge);
studentAge18.forEach(printAges);

function checkAge(element){
return element >= 18
}
function printAges(elements){
  console.log(elements)
}

//* arrays.reduce = reduce an array to a single value.

let pricesInStore = [5, 75, 200, 93, 55, 12, 20, 50];
let total = pricesInStore.reduce(checkOut);
console.log(`your total is $${total}`);
function checkOut(total, elements){
  return total + elements;
};

//* array.sort() sort numbers

let grades = [90, 100, 50, 40, 60, 80, 10, 20, 5];
grades = grades.sort(desendInSort);
grades.forEach(printGrades)



function desendInSort(bigger, smaller){
  return smaller - bigger; // small num to bigger num
}



function printGrades (elements){
  console.log(elements)
}


//* function expression = function a name     (anynymous  avoid polluting the global with scope, write it and forget it!)

//* const function (){}



//*  Arrow functions 

const percent = (x,y) => x / y * 100;

console.log(`${percent(37,50)}%`)

//* shuffles an arrays ( go back to this)

let cards = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'Joker'];

shuffle(cards);
console.log(cards.forEach(printCards));


function shuffle(array){
let cureentIndex = array.length;
while(cureentIndex != 0){
  let randomIndex = Math.floor(Math.random() * array.length);
  cureentIndex -= 1;
  let temp = array[randomIndex];
  array[cureentIndex] = temp;
}
return array;

 }

 function printCards(elements){
  console.log(elements);
 }


 //* map() = object that gold key-value of any data type 

 const store = new Map ([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 25],
  ["underwear", 50]
 ]);
 
 //* console.log(store.get("t-shirt"));
  //* store.set("pull", 30);
  //*  console.log(store.has("under"));
   //* store.delete("pull");


 store.forEach((value, key) => console.log(`${key} $${value}`));



 //* this = reference to a particular object the object depends on the immediate context

 let car1 = {
  model : 'golf',
  color : 'black',
  passengers : 5,
  confortable : false,
  fuel : 0,
  checkFuel : function(){
     if (this.fuel <= 0 ){
      console.log('refeel the car');
     }else{
      console.log('the car is ready to go');
     }
  }
 }
 car1.fuel = 10;
 car1.checkFuel();


 //* class : a blueprint for creating objects define what properties and methods they have  // use a constructor for unique propertiess

 class Player {

  score = 0;

  pause(){
   console.log(`you paused the game`);
  }
  exit(){
    console.log(`you exited the game`);
  }
 }

 const player1 = new Player();
 const player2 = new Player();

 player1.score += 3;
 console.log(player1.score);
 player1.pause();
 player2.exit();

 //* constructor = a special method of a class, accepts arguments and assigns properites

 class Student {
  constructor(name, age, gpa){
    this.name = name;
    this.age = age;
    this.gpa = gpa;
 }
  studyHard(){
    // used this in the function to refere to the imediate name in the class
    console.log(`${this.name} is studying hard to achieve his goals`)
  }
}

const student1 = new Student('patrick', 21, 3.5);
const student2 = new Student('spongbob', 55, 3.8);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.studyHard();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.studyHard();

//* inherit = a child class can inherit all the methods from the parent to the childs to avoid writing the same code multiple time

// parent 
class Animal {
  alive = true;

  eat(){
    console.log(`${this.name} is eating`);
   }

}



// childs
class Fish extends Animal {
 name = "fish";
 swim(){
  console.log(`this ${this.name} is swimming`);
 }
 
}

class Hawk extends Animal  {
  name = "hawk";
 alive = true;
  fly(){
   console.log(`this ${this.name} is flying}`);
  }
  eat(){
   console.log(`${this.name} is eating`);
  }
 }

 class Rabbit extends Animal {
  name = "rabbit";
  run(){
   console.log(`this ${this.name} is runing`);
  }
  eat(){
   console.log(`${this.name} is eating`);
  }
 }

 const rabbit = new Rabbit();
 const fish = new Fish();
 console.log(fish.alive);
 console.log(rabbit.alive);
fish.eat();
rabbit.eat()

//* super ) refers to the parent class commonly used to invok constructor class
class FarmAnimal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}


class Sheep extends FarmAnimal {

  constructor(name, age, runSpeed){
super(name, age); // replcae multiple code with less code from the parent
  this.runSpeed = runSpeed ;
}
}

const sheep = new Sheep('fethi', '6months',5 );
console.log(sheep.name);
console.log(sheep.age);
console.log(sheep.runSpeed);

//* get = binds an object property to a function when that property is accessed getter
//* setter 


//* error = object with a description of something went wrong can't open a file lose connection user types incorrect input typeEror
//* throw = excute a user-defined error

//* finally work for the cleanup if you open a file and get an error for exampel it's always excute

 
try {
 //let x = window.prompt("enter a number");
// x = Number(x);

if(isNaN(x)) throw "that wasn't a number!";
if (x == "") throw "that was empty!";
console.log(`${x} is a number`)

}
catch (error){
  console.log(error);
}   
 finally {
  console.log('pizza')
 }

 //* setTimeOut() = invokes a function after a number of milleseconds asynchronous function doesn't pause excuestion.

 //* to clear the setTimeOut()
 //* creat a function and put inside the block code this clearTimeout(timerNumber1) etc
 
/*
let price = 420.69;
let item = 'crypto currency'

 let timerNumberOne = setTimeout(firstMessage, 3000,price,item);
 let timerNumberTwo = setTimeout(secondMessage, 6000);

 let timerNumberThree = setTimeout(thirdMessage, 9000, item);


 function firstMessage(price, item){
  alert(`buy this ${item} for ${price}`);
 }
 function secondMessage () {
  alert(`this is not a scam buy now`);
 }
 function thirdMessage(item){
  alert(`please buy this ${item}`);
 }
 */


 //* setInterval() = invokes a function repeatedly after number of a millis of seconds asynchronous function (doesn't pause the function);
/*
 let countTo10 = 0;
 max = window.prompt('enter your starting number')
 max = Number(max);

 let intervale = setInterval(countUp, 1000);

 function countUp(){
  countTo10 ++ ;
  console.log(countTo10)
  if(countTo10 >= 10){
    clearInterval(intervale)
  }
 }
 */


 //* date object is used to work with dates & times

 date = new Date();
 date = date.toLocaleString();
document.getElementById('timeDisplay').innerHTML = date;
