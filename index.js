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



