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
document.getElementById("dice1").innerHTML = Math.floor(Math.random() * 6 + 1);

document.getElementById("dice2").innerHTML = Math.floor(Math.random() * 6 + 1);

document.getElementById("dice3").innerHTML = Math.floor(Math.random() * 6 + 1);

   }







