

document.getElementById("opcode").onclick = function ()
{

    const Row_value_M1 = window.prompt("Enter the Maximum Number of Rows for the Matrix 01");
    const Column_value_M1 = window.prompt("Enter the Maximum Number of columns for the Matrix 01");

    const Row_value_M2 = window.prompt("Enter the Maximum Number of Rows for the Matrix 02");
    const Column_value_M2 = window.prompt("Enter the Maximum Number of Rows for the Matrix 02");



    let array1 = new Array (Row_value_M1);
    for ( let i = 0; i< Row_value_M1; i++){
        array1 [i] = [];
    }

    for ( i = 0 ; i < Row_value_M1 ; i++ ){
        for (let j = 0 ; j < Column_value_M1; j++){
            array1 [i][j] = window.prompt("Enter the elements for the 1st matrix")
            // c = c+2;
        }
    }
    let str = "<table border = '1'>"; //2D array
    for ( i = 0; i < Row_value_M1 ; i++){
        str = str + "<tr>";
        for ( j = 0; j < Column_value_M1 ; j++){
            str = str +"<td>" + array1[i][j] + "</td>"+" ";
        }
        str = str + "</tr>";
    }
    str = str + "</table>";

    document.getElementById("first_matrix").innerHTML = str;

    // matrix 02
    let array2 = new Array (Row_value_M2);

    for ( let i = 0; i< Row_value_M2; i++){
        array2 [i] = [];
    }

    for ( i = 0 ; i < Row_value_M2 ; i++){
        for ( let j = 0; j < Column_value_M2; j++){
            array2[i][j] = window.prompt("Enter the elements for the 2nd Matrix");
        }
    }

    let str2 = "<table border = '1'>";
    for (i = 0; i < Row_value_M2; i++){
        for (j = 0; j < Column_value_M2; j++){
            str2 = str2 + "<td>" + array2[i][j] + "</td>" + " ";
        }
        str2 = str2 + "</tr>"
    }
    str2 = str2 + "</table>";
    document.getElementById("second_matrix").innerHTML = str2;

// matrix additions

    let sum = new Array (Row_value_M1);
    for ( i = 0; i < Row_value_M1; i++){
        sum[i] = [];
    }
    if (Row_value_M1 != Row_value_M2 && Column_value_M1 != Column_value_M2){
        window.alert("The Matrix Summation Can Not be possible");}

    else{
        for (let y = 0; y <Row_value_M1 ; y++){
            for ( let x = 0; x < Column_value_M2 ; x++){
                sum [y][x] = array1[i][j] + array2 [i][j];
            }
        }
    }

    let str3 = "<table border = '1'>";
    for (i = 0; i<Row_value_M1; i++){
        for (j = 0; j < Column_value_M2; j++){
            str3 = str3 + "<td>" + sum[y][x]  + "</td>" + " ";
        }
        str3 = str3 + "</tr>";
    }
    str3 = str3 + "</table>";
    document.getElementById("matrix_add").innerHTML = str3;
};
