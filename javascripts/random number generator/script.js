random_number = Math.random()
console.log (random_number)
document.getElementById("random1").innerHTML = random_number

// lets take as 1 to 6 random number

random_number2 = (Math.random() * 6)
console.log (random_number2)
document.getElementById("random2").innerHTML = random_number2
// the out put contain float value like 0.3333333352355665 etc


// to reduce it

random_number3 = Math.floor(Math.random() * 6)
console.log (random_number3)
document.getElementById("random3").innerHTML = random_number3

// initialy it starts with 0 to get the result from 1 to 6 
random_number4 = Math.floor(Math.random() *6) + 1

console.log(random_number4)
document.getElementById("random4").innerHTML = random_number4

// random number between 10 to 20
random_number5 = Math.floor(Math.random() *20) +1
document.getElementById("random5").innerHTML = random_number5


// for loop 

let i;
for (i = 0; i<=100; i++){
    let random_number6 = Math.floor(Math.random()*100) +1;
    // console.log (random_number6)
    
    let arr = [random_number6];
        for (let j = 0; j< arr.length ; j++){
            console.log (arr [j])
            document.getElementById("random6").innerHTML = arr [j];
        }
}


var x,y;

document.getElementById ("button").onclick = function (){
    x = Math.floor(Math.random() *6) +1;
    y = Math.floor(Math.random() *6) +1;

    document.getElementById ("display1").innerHTML = x;
    document.getElementById ("display2").innerHTML = y;
}
