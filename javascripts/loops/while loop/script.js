// let username = "";

// while (username == ""){
//     username = window.prompt ("what is your name")

// }
// console.log (username)



// while ( 1 == 1 ){
//     console.log ("i am stucked in javascript");
// }

// while (2 == 2 ){
    
//     console.log ("just for fun");
//     // window.alert(" window crashed");
//     // window.prompt ("i love this college toilet");
// }





const old_password = "sanskar";

document.getElementById ("submit").onclick = function(){

    console.log(old_password)

    let password = document.getElementById("password").value;
    console.log (password)

if (old_password === password){
    count = 0;
    // let x = 0;
    x = "";
    for (count = 0 ; count!=40 ; count++){
        x = x+ "<h> pop </h><br>";
        document.getElementById("content").innerHTML = x;
        // count ++;
        console.log (count);
    }
}
else{
    window.alert("reenter the password")
    document.getElementById ("password").value = "";
}
}


// == === reference for (===) value for (== || ===)