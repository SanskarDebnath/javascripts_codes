const answer = Math.floor(Math.random() * 10 + 1)
console.log (answer)

document.getElementById("submit").onclick = function(){
    let userInput = document.getElementById("Number").value;
    console.log(userInput);

    check_input(userInput);

    function check_input(a) {
        if (a == answer){
            window.alert("You guess the Correct Answer & the answer is : "+`${answer}`);
            location.reload(true)
        }
        else if (a > answer) {
            window.alert("The inputed Number is bigger then the ans")
        }
        else if (a< answer ){
            window.alert("The inputed Number is smaller then the ans")
        }
    }
}