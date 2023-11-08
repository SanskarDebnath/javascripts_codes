// calling functions with out an arguments;

sanskar ();

function sanskar (){
    let username = 'sanskar'
    console.log (username)
}

// calling functions with an arguments

main ();


function main (){
    let student_name = "sanskar Debnath"
    let student_id = 2130401060;
    let student_branch = "Cse";

    first_child_function(student_name, student_id, student_branch);
};

function first_child_function (a,b,c)
{
    document.getElementById("name").innerHTML = "<h5>Name : <?h5>" + a;
    document.getElementById("id").innerHTML = "<h5>ID : <?h5>" +b;
    document.getElementById("branch").innerHTML = "<h5>Branch : <?h5>"+c;
}


// main program

document.getElementById("get_the_value").onclick = function(){
    var opcode = document.getElementById("Area_fill").value;

    console.log (opcode)

    switch (opcode) {

        case '0':
            window.alert("Please select the Value");
            break;
        
        case '1':
            let radius = window.prompt("Enter the Radius for the Circle")
            // let result = 0;
            result = circle_Area(radius);
            console.log (result);
            document.getElementById("view").innerHTML = "<h4><br>The Area of the Circle is : "+result.toFixed(2)+"</h2>";
            break;

        case '2':
            // rectangle
            let length = window.prompt("Enter the Length of the Rectangle")
            let width = window.prompt("Enter the Width of the Rectangle")
            result = Rectangle_Area (length, width)

        default:
            break;
    }

    function circle_Area(r){
        const pi = 3.14;
        area = pi * r *r;
        return area;
    }
}