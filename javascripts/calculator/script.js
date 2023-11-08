let answer = 0;
// let a, b, opcode;

document.getElementById("submit").onclick = function(){
    let a = Number(document.getElementById("firstDigit").value);
    console.log(a)

    let opcode = document.getElementById ("opcode").value;
    console.log (opcode)

    let b = Number(document.getElementById("secondDigit").value);
    console.log (b)

    switch (opcode) {
        case '+':
            answer = a+b;
            console.log(answer)
            document.getElementById("display").innerHTML = "The Calculated value of " +a+" and "+b+ " is : "+answer
            break;
        
        case '-':
            answer = a-b;
            console.log(answer)
            document.getElementById("display").innerHTML = "The Calculated value of " +a+" and "+b+ " is : "+answer
            break;
        
        case '*':
            answer = a*b;
            console.log(answer)
            document.getElementById("display").innerHTML = "The Calculated value of " +a+" and "+b+ " is : "+answer
            break;


        case '/':
            if (b!=0){
                answer = a/b;
                console.log(answer)

                var div_result = answer.toFixed(2);
                
                console.log("answer"+answer)
                document.getElementById("display").innerHTML = "The Calculated value of " +a+" and "+b+ " is : "+div_result
            }

            else{
                window.alert ("can not divide by 0")
            }
            break;

        case '%':
            result = a%b
            console.log(answer)
            document.getElementById("display").innerHTML = "The Calculated value of " +a+" and "+b+ " is : "+answer
            break;


        default:
            window.alert("something went wrong please retry after sometime");
            break
    }
}



// pow

document.getElementById("button2").onclick = function(){
    let a1 = document.getElementById("NumberForPower").value;
    console.log (a1)

    let p1 = document.getElementById("Power").value;
    console.log(p1)


    if (p1 <= 10 )
    {
        
    let power = Math.pow (a1, p1)
    console.log(power)
    document.getElementById("display2").innerHTML = "The result is : "+power;
    }
    else {
        // console.log ("not possible")
        window.alert("The power limit is only 10")
        document.getElementById("Power").value = 10
    }
  
}
// counter program
let counter = 0;

document.getElementById("decreaseBtn").onclick = function(){
    // window.alert(" function 1");
    counter--;
    document.getElementById("value").innerHTML = counter;
};

document.getElementById("resetBtn").onclick = function(){
    counter = 0;
    // window.alert(" function 2");
    document.getElementById("value").innerHTML = counter;
};

document.getElementById("increaseBtn").onclick = function(){
    // window.alert(" function 3");
    counter++; 
    document.getElementById("value").innerHTML = counter;
};

