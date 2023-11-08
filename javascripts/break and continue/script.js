let i;

let count = "<h2>";

for (i = 0; i<=100; i++){


    count = count+i+"<br>";


    if (i % 2 === 0){
        continue; //it will eliminate the even numbers and print out the odd numbers only
    }
   
    console.log("the odd number is  :  "+i)
}
count = count + "</h2>";

document.getElementById("just").innerHTML = count



let j;
for (j = 0 ; j<= 100; j+=3){
    if ( j === 30){
        break;
    }
    
}