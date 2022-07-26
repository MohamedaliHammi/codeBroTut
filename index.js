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

    function toCelsius(temp){
        return (temp - 32) * (5 / 9);
    }

    function toFrenheit (temp){
        return temp * 9 / 5 + 32;
    }








