
// constant variables values can not be change during the program


const pi = 3.142
let radius
let circumference = 0;



document.getElementById("submit").onclick = function(){
    radius = document.getElementById("value").value;
    // console.log (radius)


    let i, temp;
    temp = radius.length;
    console.log (temp)

    if (temp > 4){
        window.alert("Can not evalute more hen 4 digits")
    }
    else {


        circumference = pi * 2 * radius;
        // console.log(circumference)
        if (circumference!=0){
            var fixedNum = circumference.toFixed(2);
            document.getElementById("change").innerHTML = "The circumference of the circle is : " + fixedNum;
        }
         else{
             window.alert("Enter the radius for the circle")
         }
    
    }
    

}

