var pletters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
var password = "";


var message = document.getElementById("message");
console.log(message);
var submit = document.getElementById("submit");
console.log(submit);

submit.onclick = function() {
    console.log("onclick");

//    for(var i = 0; i < pletters.length; i++) {
//        password = pletters[Math.floor(Math.random() * pletters.length)];
//    }
    message.innerHTML = password+ "sdsd";
}
