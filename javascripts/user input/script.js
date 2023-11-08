// let userinput;

// // userinput = window.prompt("what is your name")

// // console.log(userinput)

// easy method it was


let username;

document.getElementById ("myButton").onclick = function(){
    username = document.getElementById ("myInputText").value;
    console.log(username)

    // document.getElementById("text").innerHTML = "welcome" + " "+username +" to the world of javascripts";
    window.alert("the username is : "+username)
    
    document.getElementById ("myInputText").value = null;
    

}