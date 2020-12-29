var nametextarea=document.querySelector("#nametext1");
var namebutton=document.querySelector("#namebtn");
var namepara=document.querySelector("#namepara");
var input1=document.querySelector("#inputtext1");
var output1=document.querySelector("#output1");
var output2=document.querySelector("#output2");
var inpbutton=document.querySelector("#inputbtn");
var imagegif=document.querySelector("#image");

function play(){  
    // imagegif.innerHTML="<img src='images/loading.gif'>"; 
    var value=input1.value.split("/");
    setTimeout(function (){   //as random starts with 0 so we add +1 so it will shown from 1
    output1.innerText=nametextarea.value+" you are born on "+checkprime(value[0]);
    output2.innerText=nametextarea.value+" you are "+leapYear(value[2]);},800);
}

function checkprime(input){
    if(input==1){
        return "Non-Prime Day";
    }
    for(var i=2;i<=input/2;i++){
        if(input % i===0){
            return "Non-Prime Day";
        }
    }
    return "Prime Day";
}

function leapYear(input){
     if((input %4===0 && input % 100!==0)|| input %400===0)
     return "Born In Leap year";
     else
     return "Born In Non-Leap year";
}

function nameit(){
    namepara.innerText=nametextarea.value+" Welcome to The Game";
}

inpbutton.addEventListener("click",play);
namebutton.addEventListener("click",nameit);