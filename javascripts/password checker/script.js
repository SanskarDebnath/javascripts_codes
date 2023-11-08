document.getElementById("week").style.display = "none";
document.getElementById("strong").style.display = "none";

sessionStorage.setItem('username' , 'sanskare')




document.getElementById("submit").onclick = function(){

    var latex = document.getElementById("password").value
    
    if (latex === ''){
        window.alert("Not acceptable")
    }
    else{
        var reg = validatePassword(latex)

        function validatePassword(password) {
            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/;
            return regex.test(password);
         }
    
        if (reg == false){
            document.getElementById("week").style.display = "block";
            setTimeout(function(){
                window.location.reload();
             }, 1500);
        }
        else if (reg == true){
            document.getElementById("strong").style.display = "block";
        }
    }


}
