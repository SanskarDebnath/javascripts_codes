document.getElementById ("submit").onclick = function(){
// console.log ("debugging")

    var vote1, vote2, vote3;

    vote1 = document.getElementById("TIT")
    vote2 = document.getElementById("TECHNO")
    vote3 = document.getElementById("NIT")


    const sanskar = document.getElementById("myfirst_check_box");

    if (sanskar.checked && vote1.checked==true || vote2.checked==True || vote3.checked==True){
        window.alert("You will be redirect to a page")
        console.log("ok")
    }

    // else if(vote1.checked || vote2.checked || vote3.checked){
    //     window.alert("you have voted")
    // }



    else{
        window.alert("Please check the Terms and Conditions")
        console.log("no")
    }

}