let username = "sanskar debnath"

console.log(username.length)
console.log(username.charAt(0))
console.log(username.indexOf("n"))

console.log(username.lastIndexOf("t"))
console.log(username.toLocaleUpperCase())

console.log (username.toLowerCase())

console.log (username.trim())

console.log (username.replaceAll(" " , "%"))


let new_name = "jhhwddr fuyfbhferirhu";
console.log(new_name.indexOf(" "));

console.log(new_name.length);

var first_name;
var last_name;

first_name = new_name.slice(0, new_name.indexOf(" "))
console.log(first_name);



// trimmed

const author = document.getElementById("trimmed");
// console.log(author);

console.log(author.textContent.length)


text = author.textContent

if (text.length > 500){
    let renew = text.slice(0, 300)
document.getElementById("trimmed").innerHTML = renew + "..."
}

else {
    let renew = text.slice(0, 150)
document.getElementById("trimmed").innerHTML = renew + "..."
}


// method chaining

let name45 = "hanuman"

let temp;
temp = name45.charAt(0).toLocaleUpperCase()

let temp2 = temp + name45.slice(1)


// name45.slice(1) = anuman

console.log(temp2)

// console.log(temp);