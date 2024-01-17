var button = document.querySelector('#submit'),
    username = document.querySelector('#username'),
    password = document.querySelector('#password');

var accounts = [
    {
        name : "mehemmed",
        password : "salam" 
    },
    {
        name : "nihad",
        password : "bunediki" 
    },
    {
        name : "xeyyam",
        password : "forubilmirem" 
    },
]

button.onclick = function(){
    var correct = accounts.filter(a => a.name == username.value.toLowerCase() && a.password == password.value);
    if(correct.length == 1){
        window.location.href = "https://moonle-js.github.io/thirdtemplate/";
    }else{
        alert('You are not an admin (Guada)')
    }
}