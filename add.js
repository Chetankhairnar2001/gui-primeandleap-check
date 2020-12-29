var nametextarea=document.querySelector("#nametext1");
var namebutton=document.querySelector("#namebtn");
var namepara=document.querySelector("#namepara");
var input1=document.querySelector("#inputtext1");
var luckyno=document.querySelector("#inputtext2");
var output1=document.querySelector("#output1");
var output2=document.querySelector("#output2");
var output3=document.querySelector("#output3");
var inpbutton=document.querySelector("#inputbtn");
var imagegif=document.querySelector("#image");

function play(){  
    var value=input1.value.split("-");
    console.log(value)
    setTimeout(function (){   //as random starts with 0 so we add +1 so it will shown from 1
    output1.innerText=nametextarea.value+" you are born on "+checkprime(value[0]);
    output2.innerText=nametextarea.value+" you are "+leapYear(value[2]);
    output3.innerHTML=lucky(value[0]+value[1]+value[2]);
    },800);
}

function lucky(input){
    var sum=0;
    while(input!=0){
    sum+=Math.floor(input%10);
    input=input/10;
    }
    var no=luckyno.value;
    if(sum%no ==0)
    return "<img src='images/yes.gif'>";
    else
    return "<img src='images/no.gif'>";
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