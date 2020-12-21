var input1=document.querySelector("#inputtext1");
var output1=document.querySelector("#output1");
var output2=document.querySelector("#output2");
var inpbutton=document.querySelector("#inputbtn");

function play(){
    var value=input1.value.split("/");
    output1.innerText=checkprime(value[0]);
    output2.innerText=value[2];
}

function checkprime(input){
    
}

inpbutton.addEventListener("click",play);