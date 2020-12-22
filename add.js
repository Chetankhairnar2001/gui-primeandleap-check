var input1=document.querySelector("#inputtext1");
var output1=document.querySelector("#output1");
var output2=document.querySelector("#output2");
var inpbutton=document.querySelector("#inputbtn");

function play(){
    var value=input1.value.split("/");
    output1.innerText=checkprime(value[0]);
    output2.innerText=leapYear(value[2]);
}

function checkprime(input){
    if(input==1){
        return "Non-Prime No";
    }
    for(var i=2;i<=input/2;i++){
        if(input % i===0){
            return "Prime No";
        }
    }
    return "Non-Prime No";
}

function leapYear(input){
     if((input %4===0 && input % 100!==0)|| input %400===0)
     return "Born In Leap year";
     else
     return "Born In Non-Leap year";
}

inpbutton.addEventListener("click",play);