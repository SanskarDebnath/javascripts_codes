const kelvin_fixed_value = 273.15;


var x = document.getElementById("first_select").value;
var y = document.getElementById("second_select").value;



document.getElementById("first_select").addEventListener("change", function(){
    x = this.value;
    if (x == 1){
        document.getElementById("first_temp").placeholder = "° C";
    }
    else if (x == 2){
        document.getElementById("first_temp").placeholder = "° F";
    }
    else if (x == 3){
        document.getElementById("first_temp").placeholder = " K";
    }
    else {
        document.getElementById("first_temp").placeholder = "";
    }
});
document.getElementById("second_select").addEventListener("change", function(){
    y = this.value;
    if (y == 1){
        document.getElementById("second_temp").placeholder = "° C";
    }
    else if (y == 2){
        document.getElementById("second_temp").placeholder = "° F";
    }
    else if (y == 3){
        document.getElementById("second_temp").placeholder = " K";
    }
    else {
        document.getElementById("second_temp").placeholder = "";
    }
});

function celcius_to_fahrenhite(a,b){
    let result = 0;
    result = (a * (9/5)  + 32);
    return result;
}

document.getElementById("submit").onclick = function() {
    if ( x == y){
        window.alert("Same type of Tempreture will not converted")
    }
    else if (x == 1 && y == 2){
        let var1 = celcius_to_fahrenhite(x,y);
        console.log(var1)
    }
    else if (x == 1 && y == 3){
        
    }
}